package http_test

import (
	"context"
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"testing"
	"time"

	httpAdapter "meteo-app/backend/internal/adapters/inbound/http"
	"meteo-app/backend/internal/domain"
)

type MockWeatherUseCase struct {
	GetWeatherByAddressFunc func(ctx context.Context, address string) (*domain.WeatherForecast, error)
}

func (m *MockWeatherUseCase) GetWeatherByAddress(ctx context.Context, address string) (*domain.WeatherForecast, error) {
	if m.GetWeatherByAddressFunc != nil {
		return m.GetWeatherByAddressFunc(ctx, address)
	}
	return nil, nil
}

func TestGetWeather_Integration_Success(t *testing.T) {
	mockUseCase := &MockWeatherUseCase{
		GetWeatherByAddressFunc: func(ctx context.Context, address string) (*domain.WeatherForecast, error) {
			if address != "Paris" {
				t.Fatalf("expected Paris, got %s", address)
			}
			return &domain.WeatherForecast{
				Location: domain.Location{
					DisplayName: "Paris, Île-de-France, France",
					Latitude:    48.8566,
					Longitude:   2.3522,
				},
				GeneratedAt: time.Now(),
				Hourly: []domain.HourlyForecast{
					{Time: "2026-09-18T14:00", WeatherCode: 1, Temperature: 21.0},
				},
			}, nil
		},
	}

	handler := httpAdapter.NewWeatherHandler(mockUseCase)
	router := httpAdapter.NewRouter(handler, []string{"*"})

	req := httptest.NewRequest(http.MethodGet, "/weather?address=Paris", nil)
	req.Header.Set("Origin", "http://localhost:5173")
	rec := httptest.NewRecorder()

	router.ServeHTTP(rec, req)

	if rec.Code != http.StatusOK {
		t.Fatalf("expected status 200 OK, got %d. Body: %s", rec.Code, rec.Body.String())
	}

	// Verify CORS header
	corsHeader := rec.Header().Get("Access-Control-Allow-Origin")
	if corsHeader != "*" && corsHeader != "http://localhost:5173" {
		t.Errorf("expected CORS header, got '%s'", corsHeader)
	}

	var resp domain.WeatherForecast
	if err := json.NewDecoder(rec.Body).Decode(&resp); err != nil {
		t.Fatalf("failed to decode response: %v", err)
	}

	if resp.Location.Latitude != 48.8566 {
		t.Errorf("expected lat 48.8566, got %f", resp.Location.Latitude)
	}
	if len(resp.Hourly) != 1 {
		t.Errorf("expected 1 hourly record, got %d", len(resp.Hourly))
	}
}

func TestGetWeather_Integration_MissingAddress(t *testing.T) {
	mockUseCase := &MockWeatherUseCase{}
	handler := httpAdapter.NewWeatherHandler(mockUseCase)
	router := httpAdapter.NewRouter(handler, []string{"*"})

	req := httptest.NewRequest(http.MethodGet, "/weather", nil)
	rec := httptest.NewRecorder()

	router.ServeHTTP(rec, req)

	if rec.Code != http.StatusBadRequest {
		t.Errorf("expected status 400, got %d", rec.Code)
	}
}

func TestGetWeather_Integration_LocationNotFound(t *testing.T) {
	mockUseCase := &MockWeatherUseCase{
		GetWeatherByAddressFunc: func(ctx context.Context, address string) (*domain.WeatherForecast, error) {
			return nil, domain.ErrLocationNotFound
		},
	}
	handler := httpAdapter.NewWeatherHandler(mockUseCase)
	router := httpAdapter.NewRouter(handler, []string{"*"})

	req := httptest.NewRequest(http.MethodGet, "/weather?address=Inconnu12345", nil)
	rec := httptest.NewRecorder()

	router.ServeHTTP(rec, req)

	if rec.Code != http.StatusNotFound {
		t.Errorf("expected status 404, got %d", rec.Code)
	}
}

func TestGetWeather_Integration_CORSPreflight(t *testing.T) {
	mockUseCase := &MockWeatherUseCase{}
	handler := httpAdapter.NewWeatherHandler(mockUseCase)
	router := httpAdapter.NewRouter(handler, []string{"*"})

	req := httptest.NewRequest(http.MethodOptions, "/weather", nil)
	req.Header.Set("Origin", "http://localhost:5173")
	rec := httptest.NewRecorder()

	router.ServeHTTP(rec, req)

	if rec.Code != http.StatusNoContent {
		t.Errorf("expected 204 for preflight, got %d", rec.Code)
	}
}
