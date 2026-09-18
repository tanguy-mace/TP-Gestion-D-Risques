package domain

import (
	"errors"
	"time"
)

var (
	ErrAddressRequired    = errors.New("address parameter is required")
	ErrLocationNotFound   = errors.New("location not found for given address")
	ErrGeocodingFailed    = errors.New("geocoding service failed")
	ErrWeatherFetchFailed = errors.New("weather service failed")
)

// Location represents a geographic location resolved from an address.
type Location struct {
	DisplayName string  `json:"display_name"`
	Latitude    float64 `json:"latitude"`
	Longitude   float64 `json:"longitude"`
}

// HourlyForecast represents the weather prediction for a single hour.
type HourlyForecast struct {
	Time        string  `json:"time"`
	WeatherCode int     `json:"weathercode"`
	Temperature float64 `json:"temperature_2m"`
}

// WeatherForecast aggregates location and hourly weather forecasts.
type WeatherForecast struct {
	Location    Location         `json:"location"`
	GeneratedAt time.Time        `json:"generated_at"`
	Hourly      []HourlyForecast `json:"hourly"`
}
