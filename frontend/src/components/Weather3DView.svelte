<script>
  import { onMount, onDestroy } from 'svelte';
  import * as THREE from 'three';
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
  import { fetchOsmBuildings, createBuildingMeshes } from '../lib/overpass.js';
  import { CartoonWeatherSystem } from '../lib/weatherEffects.js';
  import { getWeatherInfo } from '../lib/wmo.js';

  let {
    latitude = 48.8566,
    longitude = 2.3522,
    weatherCode = 0,
    selectedHour = 12,
    onBuildingsLoaded = () => {}
  } = $props();

  let canvasContainer;
  let canvasElement;

  // Références Three.js
  let renderer = null;
  let scene = null;
  let camera = null;
  let controls = null;
  let weatherSystem = null;
  let currentBuildingsGroup = null;
  let animationFrameId = null;
  let clock = null;
  let resizeObserver = null;

  let loadingBuildings = $state(false);

  onMount(() => {
    initThree();
    resizeObserver = new ResizeObserver(() => handleResize());
    if (canvasContainer) {
      resizeObserver.observe(canvasContainer);
    }
  });

  onDestroy(() => {
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
    if (resizeObserver) resizeObserver.disconnect();
    if (weatherSystem) weatherSystem.dispose();
    if (controls) controls.dispose();
    if (renderer) renderer.dispose();
  });

  function initThree() {
    const width = canvasContainer?.clientWidth || window.innerWidth;
    const height = canvasContainer?.clientHeight || window.innerHeight;

    clock = new THREE.Clock();

    // 1. Scène Three.js
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x60a5fa);
    scene.fog = new THREE.FogExp2(0x60a5fa, 0.0035);

    // 2. Caméra adaptée au rayon de 100m pour révéler les reliefs des façades et toits
    camera = new THREE.PerspectiveCamera(48, width / height, 0.5, 1000);
    camera.position.set(0, 32, 55);

    // 3. Rendu WebGL haute performance
    renderer = new THREE.WebGLRenderer({
      canvas: canvasElement,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // 4. OrbitControls avec zoom libre centré sur le rayon de 100m
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    controls.maxPolarAngle = Math.PI / 2 - 0.04;
    controls.minDistance = 4;
    controls.maxDistance = 160;
    controls.target.set(0, 10, 0);

    // 5. Sol urbain et anneaux métriques (25m, 50m, 75m, 100m)
    const groundGeo = new THREE.CircleGeometry(125, 64);
    const groundMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.9,
      metalness: 0.1,
      side: THREE.FrontSide
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.05;
    ground.receiveShadow = true;
    scene.add(ground);

    // Anneaux de distance concentriques à 25m, 50m, 75m et limite 100m
    const ringRadii = [25, 50, 75, 100];
    for (const r of ringRadii) {
      const ringGeo = new THREE.RingGeometry(r - 0.2, r + 0.2, 64);
      const ringMat = new THREE.MeshBasicMaterial({
        color: r === 100 ? 0x38bdf8 : 0x475569,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: r === 100 ? 0.7 : 0.35
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = -Math.PI / 2;
      ring.position.y = 0.02;
      scene.add(ring);
    }

    // Grille fine
    const grid = new THREE.GridHelper(200, 40, 0x38bdf8, 0x334155);
    grid.position.y = 0;
    scene.add(grid);

    // 6. Marqueur du point central de recherche
    const pinGroup = new THREE.Group();
    const pinGeo = new THREE.ConeGeometry(1.5, 7, 16);
    const pinMat = new THREE.MeshBasicMaterial({ color: 0xef4444 });
    const pinMesh = new THREE.Mesh(pinGeo, pinMat);
    pinMesh.rotation.x = Math.PI;
    pinMesh.position.y = 5.5;
    pinGroup.add(pinMesh);

    const haloGeo = new THREE.RingGeometry(1.5, 3, 24);
    const haloMat = new THREE.MeshBasicMaterial({ color: 0xef4444, side: THREE.DoubleSide });
    const halo = new THREE.Mesh(haloGeo, haloMat);
    halo.rotation.x = -Math.PI / 2;
    halo.position.y = 0.05;
    pinGroup.add(halo);
    scene.add(pinGroup);

    // 7. Système météo caricatural 3D
    weatherSystem = new CartoonWeatherSystem(scene);
    weatherSystem.setWeatherState(weatherCode, selectedHour);

    // 8. Boucle de rendu
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      controls.update();
      if (weatherSystem) {
        weatherSystem.update(delta, elapsedTime);
      }

      // Flottaison du marqueur central
      pinMesh.position.y = 6.5 + Math.sin(elapsedTime * 4) * 1.2;

      updateSkyColor();
      renderer.render(scene, camera);
    };
    animate();
  }

  function updateSkyColor() {
    if (!scene) return;
    const info = getWeatherInfo(weatherCode);
    const isDay = selectedHour >= 6 && selectedHour <= 20;

    let targetHex = isDay ? info.skyDay : info.skyNight;
    if (selectedHour === 6 || selectedHour === 7 || selectedHour === 19 || selectedHour === 20) {
      targetHex = 0xf97316;
    }

    const currentColor = scene.background;
    const targetColor = new THREE.Color(targetHex);
    currentColor.lerp(targetColor, 0.05);

    if (scene.fog) {
      scene.fog.color.copy(currentColor);
    }
  }

  async function loadBuildings(lat, lon) {
    if (!scene) return;
    loadingBuildings = true;

    if (currentBuildingsGroup) {
      scene.remove(currentBuildingsGroup);
    }

    try {
      // Chargement strict sur un rayon de 100m des vrais bâtiments physiques OSM
      const result = await fetchOsmBuildings(lat, lon, 100);
      const newGroup = createBuildingMeshes(result.elements, lat, lon, result.streets || []);
      currentBuildingsGroup = newGroup;
      scene.add(currentBuildingsGroup);

      const bGroup = newGroup.getObjectByName('RealBuildingsGroup');
      const bCount = bGroup ? bGroup.children.length : newGroup.children.length;

      onBuildingsLoaded({
        count: bCount,
        source: result.source
      });
    } catch (err) {
      console.error('Erreur chargement bâtiments 3D:', err);
    } finally {
      loadingBuildings = false;
    }
  }

  function handleResize() {
    if (!renderer || !camera || !canvasContainer) return;
    const width = canvasContainer.clientWidth;
    const height = canvasContainer.clientHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  }

  // Réaction réactive aux changements de coordonnées géographiques
  let lastLoadedLat = null;
  let lastLoadedLon = null;
  $effect(() => {
    const lat = latitude;
    const lon = longitude;
    if (
      lastLoadedLat === null ||
      Math.abs(lat - lastLoadedLat) > 0.0005 ||
      Math.abs(lon - lastLoadedLon) > 0.0005
    ) {
      lastLoadedLat = lat;
      lastLoadedLon = lon;
      if (scene) {
        loadBuildings(lat, lon);
      }
    }
  });

  // Réaction aux changements d'heure et code météo
  $effect(() => {
    if (weatherSystem) {
      weatherSystem.setWeatherState(weatherCode, selectedHour);
    }
  });
</script>

<div class="canvas-wrapper" bind:this={canvasContainer}>
  <canvas bind:this={canvasElement} class="three-canvas"></canvas>

  {#if loadingBuildings}
    <div class="loading-overlay">
      <div class="loader-spinner"></div>
      <p>Génération des bâtiments 3D avec reliefs (rayon 100m)...</p>
    </div>
  {/if}

  <div class="controls-hint">
    <span>🔍 Rayon 100m</span>
    <span>• 🖱️ Clic gauche : Rotation 360°</span>
    <span>• Molette : Zoom reliefs</span>
    <span>• Clic droit : Déplacement</span>
  </div>
</div>

<style>
  .canvas-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .three-canvas {
    width: 100%;
    height: 100%;
    display: block;
    cursor: grab;
  }

  .three-canvas:active {
    cursor: grabbing;
  }

  .loading-overlay {
    position: absolute;
    top: 24px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(15, 23, 42, 0.85);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(56, 189, 248, 0.4);
    color: #ffffff;
    padding: 10px 20px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 0.85rem;
    font-weight: 500;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    pointer-events: none;
    animation: fadeIn 0.3s ease;
  }

  .loader-spinner {
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

  .controls-hint {
    position: absolute;
    top: 18px;
    right: 20px;
    background: rgba(15, 23, 42, 0.7);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 6px 14px;
    font-size: 0.72rem;
    color: #cbd5e1;
    display: flex;
    gap: 8px;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    .controls-hint {
      display: none;
    }
  }
</style>
