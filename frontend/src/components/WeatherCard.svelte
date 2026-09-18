<script>
  import { getWeatherInfo } from '../lib/wmo.js';

  let {
    location = null,
    currentForecast = null,
    selectedHour = 12,
    buildingsCount = 0,
    buildingsSource = 'overpass'
  } = $props();

  let weatherInfo = $derived(
    currentForecast ? getWeatherInfo(currentForecast.weathercode) : null
  );

  let formattedHour = $derived(
    `${String(selectedHour).padStart(2, '0')}:00`
  );
</script>

{#if location && currentForecast}
  <div class="weather-card">
    <div class="header">
      <div class="location-badge">📍 Coordonnées OSM</div>
      <div class="coords">
        {location.latitude.toFixed(4)}°N, {location.longitude.toFixed(4)}°E
      </div>
    </div>

    <h2 class="display-name" title={location.display_name}>
      {location.display_name}
    </h2>

    <div class="weather-main">
      <div class="weather-icon-pulse">{weatherInfo?.icon || '🌤️'}</div>
      <div class="temp-wrapper">
        <span class="temperature">
          {currentForecast.temperature_2m.toFixed(1)}°
        </span>
        <span class="unit">C</span>
      </div>
    </div>

    <div class="details-row">
      <div class="detail-tag">
        <span class="detail-label">Condition :</span>
        <span class="detail-value">{weatherInfo?.label}</span>
      </div>
      <div class="detail-tag">
        <span class="detail-label">Heure :</span>
        <span class="detail-value">{formattedHour}</span>
      </div>
    </div>

    <div class="buildings-status">
      <span class="pulse-dot {buildingsSource}"></span>
      <span class="buildings-text">
        {buildingsCount} bâtiments réels (100m • {buildingsSource === 'osm_real' ? 'OSM Physique Réel' : buildingsSource === 'overpass' ? 'Overpass OSM' : 'Procédural'})
      </span>
    </div>
  </div>
{/if}

<style>
  .weather-card {
    background: rgba(15, 23, 42, 0.75);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 18px;
    padding: 18px 22px;
    width: 320px;
    box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    gap: 12px;
    animation: fadeIn 0.4s ease-out;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-8px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.72rem;
  }

  .location-badge {
    background: rgba(56, 189, 248, 0.15);
    color: #38bdf8;
    padding: 2px 8px;
    border-radius: 12px;
    font-weight: 600;
  }

  .coords {
    color: #94a3b8;
    font-family: monospace;
  }

  .display-name {
    font-size: 1.05rem;
    font-weight: 700;
    color: #ffffff;
    line-height: 1.3;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .weather-main {
    display: flex;
    align-items: center;
    gap: 16px;
    margin: 4px 0;
  }

  .weather-icon-pulse {
    font-size: 3rem;
    filter: drop-shadow(0 4px 12px rgba(251, 191, 36, 0.4));
    animation: floatIcon 3s ease-in-out infinite;
  }

  @keyframes floatIcon {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-4px) scale(1.06); }
  }

  .temp-wrapper {
    display: flex;
    align-items: baseline;
  }

  .temperature {
    font-size: 2.8rem;
    font-weight: 800;
    color: #ffffff;
    letter-spacing: -1px;
    line-height: 1;
  }

  .unit {
    font-size: 1.2rem;
    font-weight: 600;
    color: #38bdf8;
    margin-left: 2px;
  }

  .details-row {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }

  .detail-tag {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.08);
    padding: 4px 10px;
    border-radius: 8px;
    font-size: 0.78rem;
    display: flex;
    gap: 5px;
  }

  .detail-label {
    color: #94a3b8;
  }

  .detail-value {
    color: #ffffff;
    font-weight: 600;
  }

  .buildings-status {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.75rem;
    color: #94a3b8;
    border-top: 1px solid rgba(255, 255, 255, 0.06);
    padding-top: 8px;
  }

  .pulse-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }

  .pulse-dot.osm_real,
  .pulse-dot.overpass {
    background: #10b981;
    box-shadow: 0 0 8px #10b981;
  }

  .pulse-dot.procedural {
    background: #f59e0b;
    box-shadow: 0 0 8px #f59e0b;
  }
</style>

