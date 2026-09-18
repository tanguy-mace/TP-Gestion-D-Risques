package usecase

import (
	"context"
	"strings"
	"time"

	"meteo-app/backend/internal/domain"
)

// WeatherService implements domain.WeatherUseCase orchestrating geocoding and forecast ports.
type WeatherService struct {
	geocodingPort domain.GeocodingPort
	weatherPort   domain.WeatherPort
}

// NewWeatherService instantiates WeatherService with injected dependencies.
func NewWeatherService(geocoding domain.GeocodingPort, weather domain.WeatherPort) *WeatherService {
	return &WeatherService{
		geocodingPort: geocoding,
		weatherPort:   weather,
	}
}

// GetWeatherByAddress coordinates geocoding the address and retrieving the hourly forecast.
func (s *WeatherService) GetWeatherByAddress(ctx context.Context, address string) (*domain.WeatherForecast, error) {
	trimmedAddress := strings.TrimSpace(address)
	if trimmedAddress == "" {
		return nil, domain.ErrAddressRequired
	}

	loc, err := s.geocodingPort.Geocode(ctx, trimmedAddress)
	if err != nil {
		return nil, err
	}

	hourly, err := s.weatherPort.GetHourlyForecast(ctx, loc.Latitude, loc.Longitude)
	if err != nil {
		return nil, err
	}

	return &domain.WeatherForecast{
		Location:    *loc,
		GeneratedAt: time.Now().UTC(),
		Hourly:      hourly,
	}, nil
}
