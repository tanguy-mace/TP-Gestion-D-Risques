package contract_test

import (
	"context"
	"errors"
	"net/http"
	"net/http/httptest"
	"testing"

	"meteo-app/backend/internal/adapters/outbound/metnorway"
	"meteo-app/backend/internal/adapters/outbound/openmeteo"
	"meteo-app/backend/internal/domain"
)

type WeatherScenario int

const (
	ScenarioValidForecast WeatherScenario = iota
	ScenarioUpstreamError
)

type WeatherAdapterHarness struct {
	Name    string
	Factory func(t *testing.T, scenario WeatherScenario) domain.WeatherPort
}

// runWeatherContractTestSuite executes the exact same contract test suite against any domain.WeatherPort implementation.
func runWeatherContractTestSuite(t *testing.T, harness WeatherAdapterHarness) {
	t.Helper()

	t.Run(harness.Name+": prévisions valides", func(t *testing.T) {
		adapter := harness.Factory(t, ScenarioValidForecast)
		forecasts, err := adapter.GetHourlyForecast(context.Background(), 44.12, 4.08)

		if err != nil {
			t.Fatalf("[%s] expected no error, got: %v", harness.Name, err)
		}
		if len(forecasts) == 0 {
			t.Fatalf("[%s] expected at least one forecast", harness.Name)
		}
		for i, f := range forecasts {
			if f.Time == "" {
				t.Errorf("[%s] forecast[%d] empty time", harness.Name, i)
			}
			if f.Temperature < -100 || f.Temperature > 60 {
				t.Errorf("[%s] forecast[%d] temperature out of realistic bounds: %f", harness.Name, i, f.Temperature)
			}
			if f.WeatherCode < 0 {
				t.Errorf("[%s] forecast[%d] invalid weathercode: %d", harness.Name, i, f.WeatherCode)
			}
		}
	})

	t.Run(harness.Name+": erreur upstream", func(t *testing.T) {
		adapter := harness.Factory(t, ScenarioUpstreamError)
		forecasts, err := adapter.GetHourlyForecast(context.Background(), 44.12, 4.08)

		if err == nil {
			t.Fatalf("[%s] expected error on upstream failure, got nil", harness.Name)
		}
		if !errors.Is(err, domain.ErrWeatherFetchFailed) {
			t.Errorf("[%s] expected domain.ErrWeatherFetchFailed, got: %v", harness.Name, err)
		}
		if forecasts != nil {
			t.Errorf("[%s] expected nil forecasts on error, got: %+v", harness.Name, forecasts)
		}
	})
}

// TestWeatherContract_OpenMeteo tests Open-Meteo against the weather contract suite.
func TestWeatherContract_OpenMeteo(t *testing.T) {
	runWeatherContractTestSuite(t, WeatherAdapterHarness{
		Name: "OpenMeteo",
		Factory: func(t *testing.T, scenario WeatherScenario) domain.WeatherPort {
			server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
				if scenario == ScenarioUpstreamError {
					w.WriteHeader(http.StatusInternalServerError)
					return
				}
				w.Header().Set("Content-Type", "application/json")
				_, _ = w.Write([]byte(`{
					"latitude": 44.12,
					"longitude": 4.08,
					"hourly": {
						"time": ["2026-09-18T14:00", "2026-09-18T15:00"],
						"weathercode": [0, 61],
						"temperature_2m": [22.4, 20.1]
					}
				}`))
			}))
			t.Cleanup(server.Close)
			return openmeteo.NewClient(server.Client(), server.URL)
		},
	})
}

// TestWeatherContract_METNorway tests MET Norway against the weather contract suite.
func TestWeatherContract_METNorway(t *testing.T) {
	runWeatherContractTestSuite(t, WeatherAdapterHarness{
		Name: "METNorway",
		Factory: func(t *testing.T, scenario WeatherScenario) domain.WeatherPort {
			server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
				if scenario == ScenarioUpstreamError {
					w.WriteHeader(http.StatusBadGateway)
					return
				}
				// Verify mandatory User-Agent
				userAgent := r.Header.Get("User-Agent")
				if userAgent == "" {
					w.WriteHeader(http.StatusForbidden)
					return
				}
				w.Header().Set("Content-Type", "application/json")
				_, _ = w.Write([]byte(`{
					"type": "Feature",
					"properties": {
						"timeseries": [
							{
								"time": "2026-09-18T14:00:00Z",
								"data": {
									"instant": {
										"details": { "air_temperature": 22.4 }
									},
									"next_1_hours": {
										"summary": { "symbol_code": "clearsky_day" }
									}
								}
							},
							{
								"time": "2026-09-18T15:00:00Z",
								"data": {
									"instant": {
										"details": { "air_temperature": 20.1 }
									},
									"next_1_hours": {
										"summary": { "symbol_code": "lightrain" }
									}
								}
							}
						]
					}
				}`))
			}))
			t.Cleanup(server.Close)
			return metnorway.NewClient(server.Client(), server.URL, "TP2-MeteoApi/1.0 test@ecole.fr")
		},
	})
}
