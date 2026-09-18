package domain

import "context"

// GeocodingPort is the outbound port for converting an address string into coordinates.
type GeocodingPort interface {
	Geocode(ctx context.Context, address string) (*Location, error)
}

// WeatherPort is the outbound port for fetching weather forecasts given coordinates.
type WeatherPort interface {
	GetHourlyForecast(ctx context.Context, lat, lon float64) ([]HourlyForecast, error)
}

// WeatherUseCase is the inbound port defining use case operations for weather.
type WeatherUseCase interface {
	GetWeatherByAddress(ctx context.Context, address string) (*WeatherForecast, error)
}
