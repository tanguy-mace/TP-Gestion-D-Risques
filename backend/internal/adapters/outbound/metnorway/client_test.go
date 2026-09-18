package metnorway_test

import (
	"context"
	"net/http"
	"net/http/httptest"
	"testing"

	"meteo-app/backend/internal/adapters/outbound/metnorway"
)

func TestMetNorwayClient_GetHourlyForecast_Success(t *testing.T) {
	ts := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		userAgent := r.Header.Get("User-Agent")
		if userAgent != "TP2-MeteoApi/1.0 test@ecole.fr" {
			t.Errorf("unexpected User-Agent: %s", userAgent)
		}

		lat := r.URL.Query().Get("lat")
		lon := r.URL.Query().Get("lon")
		if lat != "44.1200" || lon != "4.0800" {
			t.Errorf("expected lat=44.1200, lon=4.0800, got lat=%s, lon=%s", lat, lon)
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
								"details": {
									"air_temperature": 23.5
								}
							},
							"next_1_hours": {
								"summary": {
									"symbol_code": "clearsky_day"
								}
							}
						}
					},
					{
						"time": "2026-09-18T15:00:00Z",
						"data": {
							"instant": {
								"details": {
									"air_temperature": 21.0
								}
							},
							"next_1_hours": {
								"summary": {
									"symbol_code": "rainshowers_day"
								}
							}
						}
					}
				]
			}
		}`))
	}))
	defer ts.Close()

	client := metnorway.NewClient(ts.Client(), ts.URL, "TP2-MeteoApi/1.0 test@ecole.fr")
	forecasts, err := client.GetHourlyForecast(context.Background(), 44.12, 4.08)

	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	if len(forecasts) != 2 {
		t.Fatalf("expected 2 forecasts, got %d", len(forecasts))
	}
	if forecasts[0].Temperature != 23.5 || forecasts[0].WeatherCode != 0 {
		t.Errorf("unexpected forecast 0: %+v", forecasts[0])
	}
	if forecasts[1].Temperature != 21.0 || forecasts[1].WeatherCode != 81 {
		t.Errorf("unexpected forecast 1: %+v", forecasts[1])
	}
}

func TestMetNorwayClient_GetHourlyForecast_403Forbidden(t *testing.T) {
	ts := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(http.StatusForbidden)
	}))
	defer ts.Close()

	client := metnorway.NewClient(ts.Client(), ts.URL, "UnregisteredAgent")
	_, err := client.GetHourlyForecast(context.Background(), 44.12, 4.08)

	if err == nil {
		t.Fatal("expected error on 403 Forbidden")
	}
}

func TestMetNorwayClient_GetHourlyForecast_ServerError(t *testing.T) {
	ts := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(http.StatusInternalServerError)
	}))
	defer ts.Close()

	client := metnorway.NewClient(ts.Client(), ts.URL, "")
	_, err := client.GetHourlyForecast(context.Background(), 44.12, 4.08)

	if err == nil {
		t.Fatal("expected error on 500 status")
	}
}
