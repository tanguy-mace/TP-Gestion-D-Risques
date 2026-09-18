<script>
  import { onDestroy } from 'svelte';
  import { getWeatherInfo } from '../lib/wmo.js';

  let {
    hourlyForecasts = [],
    selectedHour = 12,
    onSelectHour = () => {}
  } = $props();

  let isPlaying = $state(false);
  let timer = null;

  // Filtrer ou extraire les 24 premières heures
  let daily24Hours = $derived(
    (hourlyForecasts || []).slice(0, 24).map((item, index) => {
      let hourNum = index;
      if (item.time) {
        const d = new Date(item.time);
        if (!isNaN(d.getHours())) hourNum = d.getHours();
      }
      return {
        ...item,
        hourNum,
        info: getWeatherInfo(item.weathercode)
      };
    })
  );

  function togglePlay() {
    isPlaying = !isPlaying;
    if (isPlaying) {
      startTimelapse();
    } else {
      stopTimelapse();
    }
  }

  function startTimelapse() {
    stopTimelapse();
    timer = setInterval(() => {
      const nextHour = (selectedHour + 1) % 24;
      onSelectHour(nextHour);
    }, 700);
  }

  function stopTimelapse() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  onDestroy(() => {
    stopTimelapse();
  });

  function handleSliderChange(e) {
    const val = parseInt(e.target.value, 10);
    onSelectHour(val);
  }
</script>

<div class="timeline-container">
  <div class="timeline-header">
    <div class="timelapse-controls">
      <button
        type="button"
        class="play-btn {isPlaying ? 'playing' : ''}"
        onclick={togglePlay}
        title={isPlaying ? 'Mettre en pause' : 'Lancer le timelapse animé 24h'}
      >
        <span class="btn-icon">{isPlaying ? '⏸' : '▶'}</span>
        <span>{isPlaying ? 'Pause Timelapse' : 'Timelapse 24h'}</span>
      </button>

      <span class="timelapse-desc">
        {isPlaying ? 'Animation en boucle sur 24h' : 'Cliquez sur une heure ou lancez le timelapse'}
      </span>
    </div>

    <div class="hour-indicator">
      <span class="hour-number">{String(selectedHour).padStart(2, '0')}:00</span>
    </div>
  </div>

  <!-- Curseur de défilement fluide -->
  <div class="slider-wrapper">
    <input
      type="range"
      min="0"
      max="23"
      step="1"
      value={selectedHour}
      oninput={handleSliderChange}
      class="timeline-slider"
    />
  </div>

  <!-- 24 crans d'heures cliquables -->
  <div class="hours-track">
    {#each daily24Hours as item, idx}
      {@const isSelected = item.hourNum === selectedHour}
      <button
        type="button"
        class="hour-item {isSelected ? 'selected' : ''}"
        onclick={() => onSelectHour(item.hourNum)}
      >
        <span class="hour-label">{String(item.hourNum).padStart(2, '0')}h</span>
        <span class="hour-icon">{item.info?.icon || '🌤️'}</span>
        <span class="hour-temp">{Math.round(item.temperature_2m)}°</span>
      </button>
    {/each}
  </div>
</div>

<style>
  .timeline-container {
    width: 100%;
    max-width: 1100px;
    background: rgba(15, 23, 42, 0.85);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 20px;
    padding: 16px 20px 14px 20px;
    box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .timeline-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .timelapse-controls {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .play-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 14px;
    background: rgba(56, 189, 248, 0.15);
    border: 1px solid rgba(56, 189, 248, 0.4);
    color: #38bdf8;
    border-radius: 12px;
    font-size: 0.85rem;
    font-weight: 600;
    cursor: pointer;
    font-family: inherit;
    transition: all 0.2s ease;
  }

  .play-btn:hover {
    background: rgba(56, 189, 248, 0.3);
    color: #ffffff;
    transform: translateY(-1px);
  }

  .play-btn.playing {
    background: #0284c7;
    border-color: #38bdf8;
    color: #ffffff;
    box-shadow: 0 0 12px rgba(56, 189, 248, 0.5);
  }

  .btn-icon {
    font-size: 0.95rem;
  }

  .timelapse-desc {
    font-size: 0.8rem;
    color: #94a3b8;
  }

  .hour-indicator {
    background: rgba(255, 255, 255, 0.08);
    padding: 4px 12px;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .hour-number {
    font-size: 1.1rem;
    font-weight: 700;
    color: #38bdf8;
    font-family: monospace;
  }

  .slider-wrapper {
    width: 100%;
    padding: 0 4px;
  }

  .timeline-slider {
    width: 100%;
    height: 6px;
    border-radius: 3px;
    background: rgba(255, 255, 255, 0.15);
    outline: none;
    -webkit-appearance: none;
    cursor: pointer;
    accent-color: #38bdf8;
  }

  .hours-track {
    display: grid;
    grid-template-columns: repeat(24, 1fr);
    gap: 4px;
    overflow-x: auto;
    padding-bottom: 2px;
  }

  .hour-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;
    padding: 6px 2px;
    background: transparent;
    border: 1px solid transparent;
    border-radius: 8px;
    cursor: pointer;
    color: #cbd5e1;
    font-family: inherit;
    transition: all 0.15s ease;
  }

  .hour-item:hover {
    background: rgba(255, 255, 255, 0.08);
    color: #ffffff;
  }

  .hour-item.selected {
    background: rgba(56, 189, 248, 0.25);
    border-color: #38bdf8;
    color: #ffffff;
    box-shadow: 0 0 10px rgba(56, 189, 248, 0.35);
    transform: scale(1.05);
  }

  .hour-label {
    font-size: 0.7rem;
    font-weight: 600;
    opacity: 0.8;
  }

  .hour-icon {
    font-size: 0.95rem;
  }

  .hour-temp {
    font-size: 0.72rem;
    font-weight: 700;
  }

  @media (max-width: 900px) {
    .hours-track {
      gap: 2px;
    }
    .hour-item {
      padding: 4px 1px;
    }
    .hour-icon {
      font-size: 0.8rem;
    }
  }
</style>

