# Application Météo 3D & OpenStreetMap (Fullstack Monorepo)

Application complète de prévision météo avec visualisation 3D de bâtiments OpenStreetMap extrudés et météo cartoon animée.

## Structure du Projet

```
├── backend/                              # Backend en Go (Clean Architecture / Hexagonale)
│   ├── cmd/server/main.go                # Point d'entrée (Composition Root & Injection de Dépendances dynamique)
│   ├── config.json                       # Fichier de configuration des fournisseurs
│   ├── internal/
│   │   ├── config/                       # Gestionnaire de configuration (JSON + Variables d'environnement)
│   │   │   ├── config.go
│   │   │   └── config_test.go
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
│   │           ├── ban/                  # Client géocodage BAN (Base Adresse Nationale - Souverain) [TP2]
│   │           ├── metnorway/            # Client météo MET Norway (Locationforecast 2.0) [TP2]
│   │           ├── nominatim/            # Client géocodage OpenStreetMap Nominatim [TP1]
│   │           ├── openmeteo/            # Client météo horaire Open-Meteo [TP1]
│   │           └── contract/             # Suite de tests de contrat unifiée & tests anti-fuite DTO [TP2]
│   │               ├── geocoding_contract_test.go
│   │               ├── weather_contract_test.go
│   │               └── dto_leak_test.go
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

Par défaut, l'application utilise désormais le géocodeur souverain **BAN** et le fournisseur météo **MET Norway** :

```bash
cd backend
go run ./cmd/server
```

Le serveur démarre par défaut sur `http://localhost:8081`.
- Endpoint météo : `GET http://localhost:8081/weather?address=Alès`
- Endpoint santé : `GET http://localhost:8081/health`

### Configuration dynamique des fournisseurs (sans recompilation) [TP2]

Vous pouvez permuter les fournisseurs à chaud à l'aide de variables d'environnement ou via le fichier `config.json` :

#### Via variables d'environnement :
```bash
# Utiliser les anciens fournisseurs (Nominatim + Open-Meteo)
GEOCODING_PROVIDER=nominatim WEATHER_PROVIDER=openmeteo go run ./cmd/server

# Utiliser BAN avec MET Norway (défaut)
GEOCODING_PROVIDER=ban WEATHER_PROVIDER=metnorway go run ./cmd/server

# Spécifier un User-Agent personnalisé pour MET Norway
METNORWAY_USER_AGENT="MonApp/1.0 contact@mon-ecole.fr" go run ./cmd/server
```

#### Via `config.json` :
Modifiez directement les champs dans `backend/config.json` :
```json
{
  "port": "8081",
  "geocoding_provider": "ban",
  "weather_provider": "metnorway"
}
```

---

## 2. Exécution des Tests Backend

Le backend dispose d'une suite complète de tests unitaires, de tests d'intégration HTTP, de tests de contrat unifiés et de tests de pureté d'architecture :

```bash
cd backend
go test ./... -v
```

### Détail des tests de contrat [TP2]
- **Suite de contrat de géocodage** (`contract/geocoding_contract_test.go`) :
  - Exécutée de manière strictement identique contre **Nominatim** et **BAN**.
  - Valide : adresse valide, adresse introuvable (`ErrLocationNotFound`), réponse vide (`ErrLocationNotFound`), et gestion des caractères accentués (ex: *Alès*).
- **Suite de contrat météo** (`contract/weather_contract_test.go`) :
  - Exécutée contre **Open-Meteo** et **MET Norway**.
  - Valide : prévisions horaires exploitables (`Time`, `Temperature`, `WeatherCode`) et gestion des pannes amont (`ErrWeatherFetchFailed`).
- **Tests d'étanchéité et pureté d'architecture** (`contract/dto_leak_test.go`) :
  - Analyse statique de l'AST Go pour garantir qu'aucun DTO interne d'API (`banResponse`, `nominatimResponseItem`, `metNorwayResponse`, etc.) n'est exporté hors de son adaptateur.
  - Vérifie que le `domain` n'importe aucune dépendance externe ni aucun adaptateur.

---

## 3. Architecture & TP2

1. **Coût du changement minimal (IoC & DI)** :
   - L'ajout des deux nouveaux adaptateurs (**BAN** et **MET Norway**) a été réalisé sans modifier une seule ligne du domaine (`domain`) ou des cas d'utilisation (`usecase`).
   - L'injection de dépendance dans `cmd/server/main.go` résout dynamiquement les implémentations selon la configuration.

2. **Respect des spécificités d'API** :
   - **BAN** : Inversion de l'ordre GeoJSON `[longitude, latitude]` vers `domain.Location{Latitude, Longitude}`.
   - **MET Norway** : Header obligatoire `User-Agent` identifiable pour éviter l'erreur HTTP 403, et traduction des `symbol_code` météo vers la nomenclature universelle WMO.

