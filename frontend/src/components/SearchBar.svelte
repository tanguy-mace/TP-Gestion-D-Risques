<script>
  let { onSearch = () => {}, loading = false } = $props();

  let query = $state('Paris');

  const popularCities = ['Paris', 'Lyon', 'Marseille', 'Tokyo', 'New York'];

  function handleSubmit(e) {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  }

  function handleQuickSelect(city) {
    query = city;
    onSearch(city);
  }
</script>

<div class="search-container">
  <form onsubmit={handleSubmit} class="search-form">
    <div class="input-wrapper">
      <span class="search-icon">🔍</span>
      <input
        type="text"
        bind:value={query}
        placeholder="Entrez une adresse ou ville (ex: Paris, Gare de Lyon...)"
        disabled={loading}
        class="search-input"
      />
      {#if loading}
        <div class="spinner"></div>
      {/if}
    </div>
    <button type="submit" disabled={loading || !query.trim()} class="submit-btn">
      Rechercher
    </button>
  </form>

  <div class="quick-cities">
    <span class="quick-label">Suggestions :</span>
    {#each popularCities as city}
      <button
        type="button"
        class="city-chip"
        onclick={() => handleQuickSelect(city)}
        disabled={loading}
      >
        {city}
      </button>
    {/each}
  </div>
</div>

<style>
  .search-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    max-width: 680px;
  }

  .search-form {
    display: flex;
    gap: 8px;
    background: rgba(15, 23, 42, 0.75);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 14px;
    padding: 6px;
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
  }

  .input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    flex: 1;
  }

  .search-icon {
    position: absolute;
    left: 12px;
    font-size: 1.1rem;
    opacity: 0.6;
    pointer-events: none;
  }

  .search-input {
    width: 100%;
    padding: 10px 38px 10px 40px;
    background: transparent;
    border: none;
    color: #ffffff;
    font-size: 0.95rem;
    font-family: inherit;
    outline: none;
  }

  .search-input::placeholder {
    color: #94a3b8;
  }

  .spinner {
    position: absolute;
    right: 12px;
    width: 18px;
    height: 18px;
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-top-color: #38bdf8;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  .submit-btn {
    padding: 10px 20px;
    background: linear-gradient(135deg, #2563eb, #38bdf8);
    color: #ffffff;
    border: none;
    border-radius: 10px;
    font-weight: 600;
    font-size: 0.9rem;
    font-family: inherit;
    cursor: pointer;
    transition: all 0.2s ease;
    white-space: nowrap;
  }

  .submit-btn:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(56, 189, 248, 0.35);
  }

  .submit-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .quick-cities {
    display: flex;
    align-items: center;
    gap: 6px;
    flex-wrap: wrap;
    font-size: 0.8rem;
  }

  .quick-label {
    color: #94a3b8;
    margin-right: 4px;
  }

  .city-chip {
    background: rgba(30, 41, 59, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.08);
    color: #cbd5e1;
    border-radius: 20px;
    padding: 4px 12px;
    font-size: 0.78rem;
    cursor: pointer;
    font-family: inherit;
    transition: all 0.15s ease;
  }

  .city-chip:hover:not(:disabled) {
    background: rgba(56, 189, 248, 0.2);
    border-color: rgba(56, 189, 248, 0.4);
    color: #ffffff;
  }
</style>

