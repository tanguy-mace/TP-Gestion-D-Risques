package config

import (
	"encoding/json"
	"os"
	"strings"
)

// Config holds the application configuration for server and providers.
type Config struct {
	Port              string `json:"port"`
	GeocodingProvider string `json:"geocoding_provider"` // "ban" or "nominatim"
	WeatherProvider   string `json:"weather_provider"`   // "metnorway" or "openmeteo"

	BanBaseURL         string `json:"ban_base_url"`
	NominatimBaseURL   string `json:"nominatim_base_url"`
	NominatimUserAgent string `json:"nominatim_user_agent"`

	MetNorwayBaseURL   string `json:"metnorway_base_url"`
	MetNorwayUserAgent string `json:"metnorway_user_agent"`
	OpenMeteoBaseURL   string `json:"openmeteo_base_url"`
}

// DefaultConfig returns a configuration with sensible default values.
// The BAN sovereign geocoder and MET Norway weather provider are active by default per TP2 specs.
func DefaultConfig() *Config {
	return &Config{
		Port:              "8081",
		GeocodingProvider: "ban",
		WeatherProvider:   "metnorway",

		BanBaseURL:         "https://api-adresse.data.gouv.fr/search",
		NominatimBaseURL:   "https://nominatim.openstreetmap.org/search",
		NominatimUserAgent: "MeteoApp-Fullstack/1.0",

		MetNorwayBaseURL:   "https://api.met.no/weatherapi/locationforecast/2.0/compact",
		MetNorwayUserAgent: "TP2-MeteoApi/1.0 prenom.nom@ecole.fr",
		OpenMeteoBaseURL:   "https://api.open-meteo.com/v1/forecast",
	}
}

// Load loads the configuration with precedence: Defaults < Config File (if found) < Environment Variables.
func Load() (*Config, error) {
	cfg := DefaultConfig()

	// Check config file path from environment or default locations
	configPath := os.Getenv("CONFIG_PATH")
	if configPath == "" {
		for _, path := range []string{"config.json", "backend/config.json", "../config.json"} {
			if _, err := os.Stat(path); err == nil {
				configPath = path
				break
			}
		}
	}

	if configPath != "" {
		if fileBytes, err := os.ReadFile(configPath); err == nil {
			if err := json.Unmarshal(fileBytes, cfg); err != nil {
				return nil, err
			}
		}
	}

	// Environment variable overrides
	if val := os.Getenv("PORT"); val != "" {
		cfg.Port = val
	}
	if val := os.Getenv("GEOCODING_PROVIDER"); val != "" {
		cfg.GeocodingProvider = strings.ToLower(strings.TrimSpace(val))
	}
	if val := os.Getenv("WEATHER_PROVIDER"); val != "" {
		cfg.WeatherProvider = strings.ToLower(strings.TrimSpace(val))
	}

	if val := os.Getenv("BAN_BASE_URL"); val != "" {
		cfg.BanBaseURL = val
	}
	if val := os.Getenv("NOMINATIM_BASE_URL"); val != "" {
		cfg.NominatimBaseURL = val
	}
	if val := os.Getenv("NOMINATIM_USER_AGENT"); val != "" {
		cfg.NominatimUserAgent = val
	}

	if val := os.Getenv("METNORWAY_BASE_URL"); val != "" {
		cfg.MetNorwayBaseURL = val
	}
	if val := os.Getenv("METNORWAY_USER_AGENT"); val != "" {
		cfg.MetNorwayUserAgent = val
	}
	if val := os.Getenv("OPENMETEO_BASE_URL"); val != "" {
		cfg.OpenMeteoBaseURL = val
	}

	return cfg, nil
}
