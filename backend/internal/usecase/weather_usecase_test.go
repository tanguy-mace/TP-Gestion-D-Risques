package usecase_test

import (
	"context"
	"errors"
	"testing"

	"meteo-app/backend/internal/domain"
	"meteo-app/backend/internal/usecase"
)

// MockGeocodingPort implements domain.GeocodingPort for testing.
type MockGeocodingPort struct {
	GeocodeFunc func(ctx context.Context, address string) (*domain.Location, error)
}

func (m *MockGeocodingPort) Geocode(ctx context.Context, address string) (*domain.Location, error) {
	if m.GeocodeFunc != nil {
		return m.GeocodeFunc(ctx, address)
	}
	return nil, errors.New("unimplemented mock Geocode")
}

// MockWeatherPort implements domain.WeatherPort for testing.
type MockWeatherPort struct {
	GetHourlyForecastFunc func(ctx context.Context, lat, lon float64) ([]domain.HourlyForecast, error)
}

func (m *MockWeatherPort) GetHourlyForecast(ctx context.Context, lat, lon float64) ([]domain.HourlyForecast, error) {
	if m.GetHourlyForecastFunc != nil {
		return m.GetHourlyForecastFunc(ctx, lat, lon)
	}
	return nil, errors.New("unimplemented mock GetHourlyForecast")
}

func TestWeatherService_GetWeatherByAddress_Success(t *testing.T) {
	mockGeo := &MockGeocodingPort{
		GeocodeFunc: func(ctx context.Context, address string) (*domain.Location, error) {
			if address != "Paris" {
				t.Errorf("expected address 'Paris', got '%s'", address)
			}
			return &domain.Location{
				DisplayName: "Paris, France",
				Latitude:    48.8566,
				Longitude:   2.3522,
			}, nil
		},
	}

	mockWeather := &MockWeatherPort{
		GetHourlyForecastFunc: func(ctx context.Context, lat, lon float64) ([]domain.HourlyForecast, error) {
			if lat != 48.8566 || lon != 2.3522 {
				t.Errorf("unexpected coordinates (%.4f, %.4f)", lat, lon)
			}
			return []domain.HourlyForecast{
				{Time: "2026-09-18T12:00", WeatherCode: 0, Temperature: 22.5},
				{Time: "2026-09-18T13:00", WeatherCode: 1, Temperature: 23.1},
			}, nil
		},
	}

	svc := usecase.NewWeatherService(mockGeo, mockWeather)
	forecast, err := svc.GetWeatherByAddress(context.Background(), "Paris")

	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	if forecast == nil {
		t.Fatal("expected forecast to not be nil")
	}
	if forecast.Location.DisplayName != "Paris, France" {
		t.Errorf("expected Paris, France, got %s", forecast.Location.DisplayName)
	}
	if len(forecast.Hourly) != 2 {
		t.Errorf("expected 2 hourly items, got %d", len(forecast.Hourly))
	}
	if forecast.Hourly[0].Temperature != 22.5 {
		t.Errorf("expected temp 22.5, got %f", forecast.Hourly[0].Temperature)
	}
}

func TestWeatherService_GetWeatherByAddress_EmptyAddress(t *testing.T) {
	mockGeo := &MockGeocodingPort{}
	mockWeather := &MockWeatherPort{}

	svc := usecase.NewWeatherService(mockGeo, mockWeather)
	forecast, err := svc.GetWeatherByAddress(context.Background(), "   ")

	if !errors.Is(err, domain.ErrAddressRequired) {
		t.Errorf("expected ErrAddressRequired, got %v", err)
	}
	if forecast != nil {
		t.Error("expected nil forecast on error")
	}
}

func TestWeatherService_GetWeatherByAddress_GeocodingNotFound(t *testing.T) {
	mockGeo := &MockGeocodingPort{
		GeocodeFunc: func(ctx context.Context, address string) (*domain.Location, error) {
			return nil, domain.ErrLocationNotFound
		},
	}
	mockWeather := &MockWeatherPort{}

	svc := usecase.NewWeatherService(mockGeo, mockWeather)
	forecast, err := svc.GetWeatherByAddress(context.Background(), "NonExistentPlace123456")

	if !errors.Is(err, domain.ErrLocationNotFound) {
		t.Errorf("expected ErrLocationNotFound, got %v", err)
	}
	if forecast != nil {
		t.Error("expected nil forecast on error")
	}
}

func TestWeatherService_GetWeatherByAddress_WeatherFetchError(t *testing.T) {
	mockGeo := &MockGeocodingPort{
		GeocodeFunc: func(ctx context.Context, address string) (*domain.Location, error) {
			return &domain.Location{Latitude: 10, Longitude: 20}, nil
		},
	}
	mockWeather := &MockWeatherPort{
		GetHourlyForecastFunc: func(ctx context.Context, lat, lon float64) ([]domain.HourlyForecast, error) {
			return nil, domain.ErrWeatherFetchFailed
		},
	}

	svc := usecase.NewWeatherService(mockGeo, mockWeather)
	forecast, err := svc.GetWeatherByAddress(context.Background(), "Lyon")

	if !errors.Is(err, domain.ErrWeatherFetchFailed) {
		t.Errorf("expected ErrWeatherFetchFailed, got %v", err)
	}
	if forecast != nil {
		t.Error("expected nil forecast on error")
	}
}
