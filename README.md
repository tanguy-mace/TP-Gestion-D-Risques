# Application Météo 3D & OpenStreetMap (Fullstack Monorepo)

Application complète de prévision météo avec visualisation 3D de bâtiments OpenStreetMap extrudés et météo cartoon animée.

## Structure du Projet

```
├── backend/                              # Backend en Go (Clean Architecture / Hexagonale)
│   ├── cmd/server/main.go                # Point d'entrée (Composition Root & Injection de Dépendances)
│   ├── internal/
│   │   ├── domain/                       # Entités métier & Ports (Interfaces)
│   │   │   ├── weather.go
│   │   │   └── ports.go
│   │   ├── usecase/                      # Cas d'utilisation applicatif (WeatherService)
│   │   │   ├── weather_usecase.go
│   │   │   └── weather_usecase_test.go   # Tests unitaires avec mocks
│   │   └── adapters/
│   │       ├── inbound/http/             # Adaptateur HTTP REST & Middleware CORS
│   │       │   ├── handler.go
│   │       │   ├── handler_test.go       # Tests d'intégration httptest
│   │       │   └── middleware.go
│   │       └── outbound/
│   │           ├── nominatim/            # Client géocodage OpenStreetMap Nominatim
│   │           └── openmeteo/            # Client météo horaire Open-Meteo
│   └── go.mod
│
└── frontend/                             # Frontend en Svelte (JavaScript pur, aucun TypeScript)
    ├── package.json
    ├── vite.config.js
    ├── index.html
    └── src/
        ├── main.js
        ├── App.svelte                    # Orchestration principale
        ├── components/
        │   ├── SearchBar.svelte          # Recherche d'adresse + suggestions rapides
        │   ├── Timeline.svelte           # Timeline interactive 24h & timelapse animé
        │   ├── Weather3DView.svelte      # Scène 3D Three.js, OrbitControls, Canvas natif
        │   └── WeatherCard.svelte        # Carte des conditions actuelles
        └── lib/
            ├── overpass.js               # Requête Overpass OSM & extrusion de maillages
            ├── weatherEffects.js         # Effets météo 3D cartoon (soleil pulsant, nuages, pluie, éclairs)
            └── wmo.js                    # Mapping et thèmes des codes WMO Open-Meteo
```

---

## 1. Démarrage Rapide

### Backend (Go)

```bash
cd backend
go run ./cmd/server
```

Le serveur démarre par défaut sur `http://localhost:8081` (ou sur la variable d'environnement `PORT` si définie).
- Endpoint météo : `GET http://localhost:8081/weather?address=Paris`
- Endpoint santé : `GET http://localhost:8081/health`

### Frontend (Svelte)

Le frontend est du bonus et ne fonctionne pas comme souhaité.

Dans un second terminal :

```bash
cd frontend
npm install
npm run dev
```

L'application est accessible sur `http://localhost:5173`.

---

## 2. Exécution des Tests Backend

Pour exécuter l'ensemble des tests unitaires (avec mocks des ports) et les tests d'intégration HTTP (`httptest`) :

```bash
cd backend
go test ./... -v
```

---

## 3. Fonctionnalités Clés

1. **Architecture Hexagonale Stricte** :
   - Le cœur de domaine (`domain`, `usecase`) ne dépend d'aucune bibliothèque externe ni framework HTTP.
   - Les interfaces secondaires (`GeocodingPort`, `WeatherPort`) et primaires (`WeatherUseCase`) permettent l'inversion de contrôle (IoC) et l'injection de dépendances complète.
   - Aucun singleton global.

2. **Rendu 3D OpenStreetMap & Three.js** :
   - Interrogation directe de l'Overpass API d'OSM (`way["building"](around:1000, lat, lon)`).
   - Projection métrique des coordonnées géodésiques WGS84 centrée sur l'adresse demandée.
   - Génération de maillages 3D polygonaux extrudés via `THREE.ExtrudeGeometry` avec détection des hauteurs ou niveaux.
   - Contrôle libre de caméra OrbitControls limité au rayon de 1 km autour de la position.

3. **Météo Caricaturale 3D & Timelapse** :
   - Soleil cartoon géant pulsant avec couronne de rayons en rotation et visage stylisé.
   - Nuages low-poly volumétriques en mouvement continu.
   - Particules de pluie et de neige animées selon les conditions météo.
   - Flashs lumineux stroboscopiques en cas d'orage (codes WMO 95+).
   - Timeline interactive de 24 heures avec mode **Timelapse** interpolant fluidement l'heure, le cycle jour/nuit et l'éclairage de la ville.

