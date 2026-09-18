<script>
  import { onMount } from 'svelte';
  import SearchBar from './components/SearchBar.svelte';
  import WeatherCard from './components/WeatherCard.svelte';
  import Timeline from './components/Timeline.svelte';
  import Weather3DView from './components/Weather3DView.svelte';

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8081';

  let location = $state({
    display_name: 'Paris, Île-de-France, France métropolitaine, 75001, France',
    latitude: 48.8566,
    longitude: 2.3522
  });

  let hourlyForecasts = $state([]);
  let selectedHour = $state(12);
  let loading = $state(false);
  let errorMessage = $state(null);
  let buildingsInfo = $state({ count: 0, source: 'overpass' });

  // Prévision pour l'heure actuellement sélectionnée sur la timeline
  let currentForecast = $derived.by(() => {
    if (!hourlyForecasts || hourlyForecasts.length === 0) {
      return { time: '', weathercode: 0, temperature_2m: 21.5 };
    }
    const match = hourlyForecasts.find(item => {
      if (!item.time) return false;
      const d = new Date(item.time);
      return !isNaN(d.getHours()) && d.getHours() === selectedHour;
    });
    return match || hourlyForecasts[selectedHour] || hourlyForecasts[0];
  });

  onMount(() => {
    // Caler l'heure sélectionnée sur l'heure locale actuelle
    const nowHour = new Date().getHours();
    selectedHour = nowHour;
    searchAddress('Paris');
  });

  async function searchAddress(address) {
    loading = true;
    errorMessage = null;

    try {
      const res = await fetch(`${BACKEND_URL}/weather?address=${encodeURIComponent(address)}`);
      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.details || errorData.error || `Erreur HTTP ${res.status}`);
      }

      const data = await res.json();
      location = data.location;
      hourlyForecasts = data.hourly || [];
    } catch (err) {
      console.warn('Erreur lors de la requête backend:', err.message);
      errorMessage = `Impossible de joindre le backend Go (${err.message}). Vérifiez que 'go run ./cmd/server' est lancé sur le port 8080.`;

      // Prévisions de démonstration pour permettre l'exploration 3D même si le backend n'a pas encore été démarré
      if (hourlyForecasts.length === 0) {
        hourlyForecasts = Array.from({ length: 24 }, (_, i) => ({
          time: `2026-09-18T${String(i).padStart(2, '0')}:00`,
          weathercode: i >= 18 ? 1 : i >= 14 ? 61 : i >= 10 ? 2 : 0,
          temperature_2m: 16 + Math.sin((i / 24) * Math.PI * 2 - Math.PI / 2) * 8
        }));
      }
    } finally {
      loading = false;
    }
  }

  function handleBuildingsLoaded(info) {
    buildingsInfo = info;
  }
</script>

<main class="app-container">
  <!-- Vue 3D Three.js en arrière-plan plein écran -->
  <div class="viewport-3d">
    <Weather3DView
      latitude={location.latitude}
      longitude={location.longitude}
      weatherCode={currentForecast?.weathercode || 0}
      {selectedHour}
      onBuildingsLoaded={handleBuildingsLoaded}
    />
  </div>

  <!-- Interface Utilisateur superposée (UI Glassmorphism) -->
  <div class="ui-overlay">
    <!-- Barre supérieure : En-tête & Recherche -->
    <header class="top-bar">
      <div class="brand">
        <div class="brand-logo">🌤️</div>
        <div>
          <h1 class="brand-title">MÉTÉO 3D OSM</h1>
          <span class="brand-subtitle">Hexagonal Go + Svelte Three.js</span>
        </div>
      </div>

      <SearchBar onSearch={searchAddress} {loading} />
    </header>

    {#if errorMessage}
      <div class="error-banner">
        <span>⚠️ {errorMessage}</span>
        <button type="button" class="close-error" onclick={() => errorMessage = null}>✕</button>
      </div>
    {/if}

    <!-- Panneau d'informations météo flottant à gauche -->
    <aside class="sidebar-card">
      <WeatherCard
        {location}
        {currentForecast}
        {selectedHour}
        buildingsCount={buildingsInfo.count}
        buildingsSource={buildingsInfo.source}
      />
    </aside>

    <!-- Timeline interactive cliquable 24h avec timelapse au bas de l'écran -->
    <footer class="bottom-bar">
      <Timeline
        {hourlyForecasts}
        {selectedHour}
        onSelectHour={(h) => selectedHour = h}
      />
    </footer>
  </div>
</main>

<style>
  .app-container {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: #0b0f19;
  }

  .viewport-3d {
    position: absolute;
    inset: 0;
    z-index: 1;
  }

  .ui-overlay {
    position: absolute;
    inset: 0;
    z-index: 10;
    pointer-events: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 24px;
  }

  .top-bar {
    pointer-events: auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;
    flex-wrap: wrap;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 12px;
    background: rgba(15, 23, 42, 0.75);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 16px;
    padding: 8px 16px;
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
  }

  .brand-logo {
    font-size: 2rem;
    filter: drop-shadow(0 2px 8px rgba(56, 189, 248, 0.5));
  }

  .brand-title {
    font-size: 1.05rem;
    font-weight: 800;
    letter-spacing: 0.5px;
    background: linear-gradient(135deg, #ffffff, #93c5fd);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .brand-subtitle {
    font-size: 0.68rem;
    color: #94a3b8;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .error-banner {
    pointer-events: auto;
    align-self: center;
    background: rgba(239, 68, 68, 0.9);
    backdrop-filter: blur(8px);
    color: #ffffff;
    padding: 10px 18px;
    border-radius: 12px;
    font-size: 0.82rem;
    display: flex;
    align-items: center;
    gap: 12px;
    box-shadow: 0 8px 20px rgba(239, 68, 68, 0.4);
    animation: slideDown 0.3s ease;
  }

  @keyframes slideDown {
    from { transform: translateY(-10px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  .close-error {
    background: transparent;
    border: none;
    color: #ffffff;
    font-weight: bold;
    cursor: pointer;
  }

  .sidebar-card {
    pointer-events: auto;
    align-self: flex-start;
    margin-top: 10px;
  }

  .bottom-bar {
    pointer-events: auto;
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: auto;
  }

  @media (max-width: 800px) {
    .ui-overlay {
      padding: 12px;
    }
    .top-bar {
      flex-direction: column;
      gap: 10px;
    }
    .brand {
      width: 100%;
    }
    .sidebar-card {
      margin-top: 5px;
      transform: scale(0.9);
      transform-origin: top left;
    }
  }
</style>
