package openmeteo_test

import (
	"context"
	"net/http"
	"net/http/httptest"
	"testing"

	"meteo-app/backend/internal/adapters/outbound/openmeteo"
)

func TestOpenMeteoClient_GetHourlyForecast_Success(t *testing.T) {
	ts := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		_, _ = w.Write([]byte(`{
			"latitude": 48.85,
			"longitude": 2.35,
			"hourly": {
				"time": ["2026-09-18T12:00", "2026-09-18T13:00"],
				"weathercode": [0, 61],
				"temperature_2m": [22.4, 19.8]
			}
		}`))
	}))
	defer ts.Close()

	client := openmeteo.NewClient(ts.Client(), ts.URL)
	forecasts, err := client.GetHourlyForecast(context.Background(), 48.85, 2.35)

	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	if len(forecasts) != 2 {
		t.Fatalf("expected 2 forecasts, got %d", len(forecasts))
	}
	if forecasts[0].WeatherCode != 0 || forecasts[0].Temperature != 22.4 {
		t.Errorf("unexpected forecast 0: %+v", forecasts[0])
	}
	if forecasts[1].WeatherCode != 61 || forecasts[1].Temperature != 19.8 {
		t.Errorf("unexpected forecast 1: %+v", forecasts[1])
	}
}

func TestOpenMeteoClient_GetHourlyForecast_ServerError(t *testing.T) {
	ts := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(http.StatusInternalServerError)
	}))
	defer ts.Close()

	client := openmeteo.NewClient(ts.Client(), ts.URL)
	_, err := client.GetHourlyForecast(context.Background(), 48.85, 2.35)

	if err == nil {
		t.Fatal("expected error on 500 status")
	}
}
