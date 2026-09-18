package config_test

import (
	"os"
	"testing"

	"meteo-app/backend/internal/config"
)

func TestConfig_Defaults(t *testing.T) {
	cfg := config.DefaultConfig()
	if cfg.GeocodingProvider != "ban" {
		t.Errorf("expected default geocoding provider ban, got %s", cfg.GeocodingProvider)
	}
	if cfg.WeatherProvider != "metnorway" {
		t.Errorf("expected default weather provider metnorway, got %s", cfg.WeatherProvider)
	}
	if cfg.Port != "8081" {
		t.Errorf("expected default port 8081, got %s", cfg.Port)
	}
}

func TestConfig_EnvOverrides(t *testing.T) {
	os.Setenv("PORT", "9999")
	os.Setenv("GEOCODING_PROVIDER", "nominatim")
	os.Setenv("WEATHER_PROVIDER", "openmeteo")
	defer func() {
		os.Unsetenv("PORT")
		os.Unsetenv("GEOCODING_PROVIDER")
		os.Unsetenv("WEATHER_PROVIDER")
	}()

	cfg, err := config.Load()
	if err != nil {
		t.Fatalf("unexpected load error: %v", err)
	}
	if cfg.Port != "9999" {
		t.Errorf("expected port 9999, got %s", cfg.Port)
	}
	if cfg.GeocodingProvider != "nominatim" {
		t.Errorf("expected geocoding nominatim, got %s", cfg.GeocodingProvider)
	}
	if cfg.WeatherProvider != "openmeteo" {
		t.Errorf("expected weather openmeteo, got %s", cfg.WeatherProvider)
	}
}
