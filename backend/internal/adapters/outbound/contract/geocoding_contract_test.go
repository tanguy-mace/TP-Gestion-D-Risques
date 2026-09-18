package contract_test

import (
	"context"
	"errors"
	"net/http"
	"net/http/httptest"
	"testing"

	"meteo-app/backend/internal/adapters/outbound/ban"
	"meteo-app/backend/internal/adapters/outbound/nominatim"
	"meteo-app/backend/internal/domain"
)

type GeocodingScenario int

const (
	ScenarioValidAddress GeocodingScenario = iota
	ScenarioNotFound
	ScenarioEmptyResponse
	ScenarioAccentedAddress
)

// GeocodingAdapterHarness sets up an implementation of domain.GeocodingPort for a given scenario.
type GeocodingAdapterHarness struct {
	Name    string
	Factory func(t *testing.T, scenario GeocodingScenario) domain.GeocodingPort
}

// runGeocodingContractTestSuite executes the exact same contract test suite against any domain.GeocodingPort implementation.
// Conforms to TP2 requirement 3: "Écrivez une suite de tests de contrat unique, exécutée contre chaque implémentation d'une même abstraction".
func runGeocodingContractTestSuite(t *testing.T, harness GeocodingAdapterHarness) {
	t.Helper()

	t.Run(harness.Name+": adresse valide", func(t *testing.T) {
		adapter := harness.Factory(t, ScenarioValidAddress)
		loc, err := adapter.Geocode(context.Background(), "Paris")

		if err != nil {
			t.Fatalf("[%s] expected no error, got: %v", harness.Name, err)
		}
		if loc == nil {
			t.Fatalf("[%s] expected non-nil location", harness.Name)
		}
		if loc.DisplayName == "" {
			t.Errorf("[%s] expected non-empty DisplayName", harness.Name)
		}
		if loc.Latitude == 0 || loc.Longitude == 0 {
			t.Errorf("[%s] expected valid non-zero coordinates, got lat=%f, lon=%f", harness.Name, loc.Latitude, loc.Longitude)
		}
	})

	t.Run(harness.Name+": adresse introuvable", func(t *testing.T) {
		adapter := harness.Factory(t, ScenarioNotFound)
		loc, err := adapter.Geocode(context.Background(), "AdresseInconnueXYZ123")

		if err == nil {
			t.Fatalf("[%s] expected error for unknown address, got nil", harness.Name)
		}
		if !errors.Is(err, domain.ErrLocationNotFound) {
			t.Errorf("[%s] expected domain.ErrLocationNotFound, got: %v", harness.Name, err)
		}
		if loc != nil {
			t.Errorf("[%s] expected nil location on not found, got: %+v", harness.Name, loc)
		}
	})

	t.Run(harness.Name+": réponse vide", func(t *testing.T) {
		adapter := harness.Factory(t, ScenarioEmptyResponse)
		loc, err := adapter.Geocode(context.Background(), "EmptyQuery")

		if err == nil {
			t.Fatalf("[%s] expected error for empty response, got nil", harness.Name)
		}
		if !errors.Is(err, domain.ErrLocationNotFound) {
			t.Errorf("[%s] expected domain.ErrLocationNotFound, got: %v", harness.Name, err)
		}
		if loc != nil {
			t.Errorf("[%s] expected nil location, got: %+v", harness.Name, loc)
		}
	})

	t.Run(harness.Name+": caractères accentués", func(t *testing.T) {
		adapter := harness.Factory(t, ScenarioAccentedAddress)
		loc, err := adapter.Geocode(context.Background(), "Alès")

		if err != nil {
			t.Fatalf("[%s] expected no error for accented address 'Alès', got: %v", harness.Name, err)
		}
		if loc == nil {
			t.Fatalf("[%s] expected non-nil location for 'Alès'", harness.Name)
		}
		if loc.Latitude == 0 || loc.Longitude == 0 {
			t.Errorf("[%s] expected non-zero coordinates for 'Alès', got lat=%f, lon=%f", harness.Name, loc.Latitude, loc.Longitude)
		}
		if loc.DisplayName == "" {
			t.Errorf("[%s] expected non-empty DisplayName for 'Alès'", harness.Name)
		}
	})
}

// TestGeocodingContract_Nominatim runs the unique contract suite against OpenStreetMap Nominatim.
func TestGeocodingContract_Nominatim(t *testing.T) {
	runGeocodingContractTestSuite(t, GeocodingAdapterHarness{
		Name: "Nominatim",
		Factory: func(t *testing.T, scenario GeocodingScenario) domain.GeocodingPort {
			server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
				w.Header().Set("Content-Type", "application/json")
				switch scenario {
				case ScenarioValidAddress:
					_, _ = w.Write([]byte(`[{"lat":"48.8566","lon":"2.3522","display_name":"Paris, Île-de-France, France"}]`))
				case ScenarioNotFound, ScenarioEmptyResponse:
					_, _ = w.Write([]byte(`[]`))
				case ScenarioAccentedAddress:
					q := r.URL.Query().Get("q")
					if q != "Alès" {
						t.Errorf("[Nominatim Server] expected query parameter 'Alès', got '%s'", q)
					}
					_, _ = w.Write([]byte(`[{"lat":"44.1272","lon":"4.0834","display_name":"Alès, Gard, France"}]`))
				}
			}))
			t.Cleanup(server.Close)
			return nominatim.NewClient(server.Client(), server.URL, "ContractTest/1.0")
		},
	})
}

// TestGeocodingContract_BAN runs the unique contract suite against Base Adresse Nationale (BAN).
func TestGeocodingContract_BAN(t *testing.T) {
	runGeocodingContractTestSuite(t, GeocodingAdapterHarness{
		Name: "BAN",
		Factory: func(t *testing.T, scenario GeocodingScenario) domain.GeocodingPort {
			server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
				w.Header().Set("Content-Type", "application/json")
				switch scenario {
				case ScenarioValidAddress:
					_, _ = w.Write([]byte(`{
						"type": "FeatureCollection",
						"features": [
							{
								"type": "Feature",
								"geometry": {
									"type": "Point",
									"coordinates": [2.3522, 48.8566]
								},
								"properties": {
									"label": "Paris, Île-de-France, France",
									"city": "Paris"
								}
							}
						]
					}`))
				case ScenarioNotFound, ScenarioEmptyResponse:
					_, _ = w.Write([]byte(`{"type":"FeatureCollection","features":[]}`))
				case ScenarioAccentedAddress:
					q := r.URL.Query().Get("q")
					if q != "Alès" {
						t.Errorf("[BAN Server] expected query parameter 'Alès', got '%s'", q)
					}
					_, _ = w.Write([]byte(`{
						"type": "FeatureCollection",
						"features": [
							{
								"type": "Feature",
								"geometry": {
									"type": "Point",
									"coordinates": [4.0834, 44.1272]
								},
								"properties": {
									"label": "Alès",
									"city": "Alès"
								}
							}
						]
					}`))
				}
			}))
			t.Cleanup(server.Close)
			return ban.NewClient(server.Client(), server.URL)
		},
	})
}
