import * as THREE from 'three';

const EARTH_RADIUS = 6378137; // Rayon terrestre WGS84 en mètres

/**
 * Projette des coordonnées géodésiques (lat, lon) dans un repère cartésien local (x, z) en mètres
 * centré sur (centerLat, centerLon).
 */
export function latLonToMeters(lat, lon, centerLat, centerLon) {
  const rad = Math.PI / 180;
  const cosLat = Math.cos(centerLat * rad);
  const x = (lon - centerLon) * rad * EARTH_RADIUS * cosLat;
  const z = -(lat - centerLat) * rad * EARTH_RADIUS;
  return { x, z };
}

/**
 * Calcule l'aire d'un polygone 2D en mètres carrés (formule du lacet).
 */
function calculatePolygonArea(points) {
  let area = 0;
  const n = points.length;
  for (let i = 0; i < n; i++) {
    const j = (i + 1) % n;
    area += points[i].x * points[j].z;
    area -= points[j].x * points[i].z;
  }
  return Math.abs(area) / 2;
}

/**
 * Vérifie si un point 2D (x, z) est à l'intérieur d'un polygone (Ray-casting).
 */
function isPointInsidePolygon(point, vs) {
  const x = point.x, z = point.z;
  let inside = false;
  for (let i = 0, j = vs.length - 1; i < vs.length; j = i++) {
    const xi = vs[i].x, zi = vs[i].z;
    const xj = vs[j].x, zj = vs[j].z;
    const intersect = ((zi > z) !== (zj > z)) && (x < (xj - xi) * (z - zi) / (zj - zi) + xi);
    if (intersect) inside = !inside;
  }
  return inside;
}

/**
 * Récupère les vrais bâtiments et la voirie physiques depuis l'API officielle OpenStreetMap.
 * Couvre un rayon de 100m autour du point géographique exact.
 */
export async function fetchOsmBuildings(lat, lon, radiusMeters = 100) {
  const dLat = radiusMeters / 111320;
  const dLon = radiusMeters / (111320 * Math.cos(lat * Math.PI / 180));

  const minLon = (lon - dLon).toFixed(6);
  const minLat = (lat - dLat).toFixed(6);
  const maxLon = (lon + dLon).toFixed(6);
  const maxLat = (lat + dLat).toFixed(6);

  // 1. Source prioritaire : API officielle OpenStreetMap (directe, temps réel et sans blocage 406)
  const osmUrl = `https://api.openstreetmap.org/api/0.6/map?bbox=${minLon},${minLat},${maxLon},${maxLat}`;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    const resp = await fetch(osmUrl, {
      headers: {
        'Accept': 'application/xml, text/xml, */*',
        'User-Agent': 'Meteo3DApp/1.0 (OpenStreetMap 3D Real City Viewer)'
      },
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (resp.ok) {
      const xmlText = await resp.text();
      const parsedData = parseOsmXml(xmlText, lat, lon);
      if (parsedData.buildings.length > 0) {
        return {
          elements: parsedData.buildings,
          streets: parsedData.streets,
          source: 'osm_real',
          centerLat: lat,
          centerLon: lon
        };
      }
    }
  } catch (err) {
    console.warn('Erreur OSM direct API, essai Overpass API...', err.message);
  }

  // 2. Source de repli : Overpass API
  const overpassQuery = `[out:json][timeout:15];(way["building"](around:${radiusMeters},${lat},${lon}););out geom;`;
  const overpassEndpoints = [
    'https://overpass-api.de/api/interpreter',
    'https://overpass.kumi.systems/api/interpreter'
  ];

  for (const endpoint of overpassEndpoints) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 7000);

      const resp = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: 'data=' + encodeURIComponent(overpassQuery),
        signal: controller.signal
      });
      clearTimeout(timeoutId);

      if (resp.ok) {
        const data = await resp.json();
        if (data && data.elements && data.elements.length > 0) {
          const buildings = data.elements.filter(e => e.geometry && e.geometry.length >= 3);
          return {
            elements: buildings,
            streets: [],
            source: 'overpass',
            centerLat: lat,
            centerLon: lon
          };
        }
      }
    } catch {
      // continuer
    }
  }

  // 3. Dernier recours si aucun réseau
  return {
    elements: generateFallbackBlocks(lat, lon),
    streets: [],
    source: 'procedural',
    centerLat: lat,
    centerLon: lon
  };
}

/**
 * Analyse le XML de l'API OpenStreetMap pour extraire les nœuds, bâtiments et rues réels.
 */
function parseOsmXml(xmlText) {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlText, 'text/xml');

  // Dictionnaire des nœuds { id: { lat, lon } }
  const nodes = {};
  const nodeElements = xmlDoc.getElementsByTagName('node');
  for (let i = 0; i < nodeElements.length; i++) {
    const n = nodeElements[i];
    const id = n.getAttribute('id');
    const lat = parseFloat(n.getAttribute('lat'));
    const lon = parseFloat(n.getAttribute('lon'));
    nodes[id] = { lat, lon };
  }

  const buildings = [];
  const streets = [];

  const wayElements = xmlDoc.getElementsByTagName('way');
  for (let i = 0; i < wayElements.length; i++) {
    const w = wayElements[i];
    const wayId = w.getAttribute('id');

    // Récupérer les tags
    const tags = {};
    const tagElements = w.getElementsByTagName('tag');
    for (let j = 0; j < tagElements.length; j++) {
      const t = tagElements[j];
      tags[t.getAttribute('k')] = t.getAttribute('v');
    }

    // Récupérer la liste des coordonnées géométriques via <nd ref="...">
    const ndElements = w.getElementsByTagName('nd');
    const geometry = [];
    for (let j = 0; j < ndElements.length; j++) {
      const ref = ndElements[j].getAttribute('ref');
      if (nodes[ref]) {
        geometry.push(nodes[ref]);
      }
    }

    if (geometry.length < 2) continue;

    // Bâtiments
    if (tags.building && geometry.length >= 3) {
      buildings.push({
        id: wayId,
        tags,
        geometry
      });
    }

    // Rues et voies carrossables pour le tracé au sol
    if (tags.highway && geometry.length >= 2) {
      streets.push({
        id: wayId,
        tags,
        geometry
      });
    }
  }

  return { buildings, streets };
}

/**
 * Palette de matériaux architecturaux selon le type de bâtiment réel
 */
function getBuildingMaterials(tags, isTargetBuilding) {
  // Matériaux toiture
  let roofColor = 0x3b4252; // Ardoise / zinc par défaut
  let roofRoughness = 0.5;
  let roofMetalness = 0.35;

  if (tags['roof:material'] === 'tile' || tags['roof:material'] === 'roof_tiles' || tags['roof:colour'] === 'terracotta' || tags['roof:colour'] === 'red') {
    roofColor = 0xa0522d; // Tuiles terre cuite
    roofRoughness = 0.75;
    roofMetalness = 0.05;
  } else if (tags['roof:material'] === 'copper' || tags['roof:colour'] === 'green') {
    roofColor = 0x2e7d32; // Cuivre patiné
    roofRoughness = 0.4;
    roofMetalness = 0.45;
  } else if (tags['roof:material'] === 'tar_paper' || tags['roof:colour'] === 'black') {
    roofColor = 0x1f2937;
    roofRoughness = 0.8;
  }

  // Matériaux façades
  let facadeColor = 0xf3ede2; // Pierre de taille claire haussmannienne
  let facadeRoughness = 0.82;
  let facadeMetalness = 0.05;

  if (isTargetBuilding) {
    // Mise en valeur subtile et élégante du bâtiment physique de l'adresse demandée
    facadeColor = 0xfffbeb;
    facadeRoughness = 0.7;
    facadeMetalness = 0.1;
  } else if (tags['building:material'] === 'brick' || tags['building:colour'] === 'brown') {
    facadeColor = 0xb45309; // Brique
  } else if (tags['building:material'] === 'concrete' || tags['building:colour'] === 'grey') {
    facadeColor = 0xd1d5db; // Béton
  } else if (tags['building:material'] === 'glass' || tags.building === 'commercial') {
    facadeColor = 0xe0f2fe; // Verre clair
    facadeRoughness = 0.3;
    facadeMetalness = 0.6;
  } else if (tags.building === 'house' || tags.building === 'detached') {
    facadeColor = 0xfaebd7; // Enduit pavillon
  }

  const roofMat = new THREE.MeshStandardMaterial({
    color: roofColor,
    roughness: roofRoughness,
    metalness: roofMetalness,
    flatShading: false
  });

  const facadeMat = new THREE.MeshStandardMaterial({
    color: facadeColor,
    roughness: facadeRoughness,
    metalness: facadeMetalness,
    flatShading: false
  });

  return { roofMat, facadeMat };
}

/**
 * Crée les maillages 3D Three.js extrudés représentant physiquement le quartier réel.
 */
export function createBuildingMeshes(elements, centerLat, centerLon, streets = []) {
  const rootGroup = new THREE.Group();
  rootGroup.name = 'OsmRealEnvironment';

  const buildingsGroup = new THREE.Group();
  buildingsGroup.name = 'RealBuildingsGroup';
  rootGroup.add(buildingsGroup);

  const centerPoint = { x: 0, z: 0 };

  // 1. Tracé des rues physiques réelles au sol
  if (streets && streets.length > 0) {
    const streetGroup = new THREE.Group();
    streetGroup.name = 'RealStreetsGroup';

    const streetMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.95,
      metalness: 0.05
    });

    for (const street of streets) {
      if (!street.geometry || street.geometry.length < 2) continue;
      const pts = street.geometry.map(g => latLonToMeters(g.lat, g.lon, centerLat, centerLon));

      // Largeur de voie
      const halfWidth = (street.tags.highway === 'primary' || street.tags.highway === 'secondary') ? 5 : 3.5;

      for (let i = 0; i < pts.length - 1; i++) {
        const p1 = pts[i];
        const p2 = pts[i + 1];
        const dx = p2.x - p1.x;
        const dz = p2.z - p1.z;
        const len = Math.sqrt(dx * dx + dz * dz);
        if (len < 0.5) continue;

        const roadGeo = new THREE.PlaneGeometry(halfWidth * 2, len);
        const roadMesh = new THREE.Mesh(roadGeo, streetMat);
        roadMesh.rotation.x = -Math.PI / 2;
        roadMesh.rotation.z = -Math.atan2(dx, dz);
        roadMesh.position.set((p1.x + p2.x) / 2, 0.04, (p1.z + p2.z) / 2);
        roadMesh.receiveShadow = true;
        streetGroup.add(roadMesh);
      }
    }
    rootGroup.add(streetGroup);
  }

  // 2. Identifier le bâtiment physique exact contenant ou le plus proche de l'adresse demandée (0, 0)
  let targetBuildingId = null;
  let minDistanceToCenter = Infinity;

  const validBuildings = [];

  for (const el of elements) {
    if (!el.geometry || el.geometry.length < 3) continue;
    const localPoints = el.geometry.map(pt => latLonToMeters(pt.lat, pt.lon, centerLat, centerLon));

    // Calcul du barycentre du bâtiment
    let cx = 0, cz = 0;
    for (const p of localPoints) {
      cx += p.x;
      cz += p.z;
    }
    cx /= localPoints.length;
    cz /= localPoints.length;

    const dist = Math.sqrt(cx * cx + cz * cz);
    if (dist > 120) continue; // Au-delà des 100m + marge

    const isInside = isPointInsidePolygon(centerPoint, localPoints);
    if (isInside) {
      targetBuildingId = el.id;
      minDistanceToCenter = 0;
    } else if (minDistanceToCenter > 0 && dist < minDistanceToCenter) {
      minDistanceToCenter = dist;
      targetBuildingId = el.id;
    }

    validBuildings.push({ el, localPoints, cx, cz, dist });
  }

  // Matériau pour les arêtes architecturales
  const edgeLineMaterial = new THREE.LineBasicMaterial({
    color: 0x1e293b,
    transparent: true,
    opacity: 0.5
  });

  const targetEdgeMaterial = new THREE.LineBasicMaterial({
    color: 0x38bdf8, // Mise en valeur cyan pour l'adresse demandée
    linewidth: 2,
    transparent: true,
    opacity: 0.85
  });

  const floorLineMaterial = new THREE.LineBasicMaterial({
    color: 0x475569,
    transparent: true,
    opacity: 0.35
  });

  // 3. Génération des volumes 3D extrudés réels
  for (const item of validBuildings) {
    const { el, localPoints, cx, cz } = item;
    const isTarget = (el.id === targetBuildingId);

    const shape = new THREE.Shape();
    // Y_shape = -localPoints.z pour extrusion ascendante (+Y) après rotateX(-PI/2)
    shape.moveTo(localPoints[0].x, -localPoints[0].z);
    for (let i = 1; i < localPoints.length; i++) {
      shape.lineTo(localPoints[i].x, -localPoints[i].z);
    }
    shape.closePath();

    const area = calculatePolygonArea(localPoints);
    if (area < 6) continue;

    // Détermination de la hauteur réelle physique
    let height = 14;
    let levels = 4;

    if (el.tags) {
      if (el.tags.height) {
        const parsed = parseFloat(el.tags.height);
        if (!isNaN(parsed) && parsed > 2) height = parsed;
      } else if (el.tags['building:levels']) {
        const parsedLevels = parseFloat(el.tags['building:levels']);
        if (!isNaN(parsedLevels) && parsedLevels > 0) {
          levels = parsedLevels;
          height = levels * 3.2;
        }
      } else {
        // Déduction réaliste basée sur la typologie et l'emprise physique
        if (el.tags.building === 'house' || el.tags.building === 'detached') {
          levels = 2;
          height = 7.5;
        } else if (el.tags.building === 'church' || el.tags.building === 'cathedral') {
          levels = 1;
          height = 28.0;
        } else if (area > 500) {
          levels = 6;
          height = 20.0;
        } else if (area > 200) {
          levels = 5;
          height = 16.5;
        } else if (area > 70) {
          levels = 4;
          height = 13.0;
        } else {
          levels = 2;
          height = 6.5;
        }
      }
    }

    try {
      // Biseau créant la corniche de toit en relief
      const extrudeSettings = {
        depth: height,
        bevelEnabled: true,
        bevelThickness: 0.4,
        bevelSize: 0.3,
        bevelSegments: 1
      };

      const geom = new THREE.ExtrudeGeometry(shape, extrudeSettings);
      geom.rotateX(-Math.PI / 2);
      geom.computeVertexNormals();

      const { roofMat, facadeMat } = getBuildingMaterials(el.tags, isTarget);

      // mat[0] = toiture, mat[1] = façades
      const mesh = new THREE.Mesh(geom, [roofMat, facadeMat]);
      mesh.castShadow = true;
      mesh.receiveShadow = true;

      // Arêtes contrastées
      const edges = new THREE.EdgesGeometry(geom, 22);
      const edgeLine = new THREE.LineSegments(edges, isTarget ? targetEdgeMaterial : edgeLineMaterial);
      mesh.add(edgeLine);

      // Corniches et niveaux d'étages
      if (levels >= 2 && height >= 7) {
        const floorStep = height / levels;
        for (let lvl = 1; lvl < levels; lvl++) {
          const yLevel = lvl * floorStep;
          const bandPoints = [];
          for (let p = 0; p < localPoints.length; p++) {
            bandPoints.push(new THREE.Vector3(localPoints[p].x, yLevel, localPoints[p].z));
          }
          const bandGeo = new THREE.BufferGeometry().setFromPoints(bandPoints);
          const bandLine = new THREE.LineLoop(bandGeo, floorLineMaterial);
          mesh.add(bandLine);
        }
      }

      // Structure technique sur toiture (terrasse, édicule d'ascenseur)
      if (area > 90) {
        const roofH = 1.6;
        const roofW = Math.max(3, Math.min(8, Math.sqrt(area) * 0.3));
        const roofD = Math.max(3, Math.min(8, Math.sqrt(area) * 0.3));
        const roofBoxGeo = new THREE.BoxGeometry(roofW, roofH, roofD);
        const roofBox = new THREE.Mesh(roofBoxGeo, roofMat);
        roofBox.position.set(cx, height + roofH / 2, cz);
        roofBox.castShadow = true;
        roofBox.receiveShadow = true;
        mesh.add(roofBox);
      }

      // Si c'est le bâtiment à l'adresse demandée, ajouter une balise 3D élégante au-dessus
      if (isTarget) {
        const targetMarker = new THREE.Group();
        const haloRing = new THREE.RingGeometry(2, 2.5, 32);
        const haloMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, side: THREE.DoubleSide });
        const ringMesh = new THREE.Mesh(haloRing, haloMat);
        ringMesh.rotation.x = -Math.PI / 2;
        ringMesh.position.set(cx, height + 4, cz);
        targetMarker.add(ringMesh);
        mesh.add(targetMarker);
      }

      buildingsGroup.add(mesh);
    } catch {
      // Polygone dégénéré ignoré
    }
  }

  return rootGroup;
}

/**
 * Générateur de secours réaliste si le réseau est totalement coupé
 */
function generateFallbackBlocks(centerLat, centerLon) {
  const elements = [];
  const rad = Math.PI / 180;
  const cosLat = Math.cos(centerLat * rad);
  let id = 800000;

  const positions = [
    { x: -35, z: -35, w: 30, d: 25, h: 18, lvls: 5 },
    { x: 5, z: -35, w: 35, d: 25, h: 21, lvls: 6 },
    { x: -35, z: 10, w: 28, d: 30, h: 16, lvls: 5 },
    { x: 5, z: 10, w: 32, d: 30, h: 19, lvls: 6 },
    { x: -10, z: -10, w: 20, d: 18, h: 14, lvls: 4 } // Bâtiment central
  ];

  for (const b of positions) {
    const cornersMeters = [
      { x: b.x, z: b.z },
      { x: b.x + b.w, z: b.z },
      { x: b.x + b.w, z: b.z + b.d },
      { x: b.x, z: b.z + b.d },
      { x: b.x, z: b.z }
    ];
    const geom = cornersMeters.map(p => ({
      lat: centerLat - (p.z / (EARTH_RADIUS * rad)),
      lon: centerLon + (p.x / (EARTH_RADIUS * rad * cosLat))
    }));
    elements.push({
      id: id++,
      tags: { building: 'yes', height: String(b.h), 'building:levels': String(b.lvls) },
      geometry: geom
    });
  }

  return elements;
}
