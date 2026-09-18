package main

import (
	"context"
	"errors"
	"log"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"

	httpAdapter "meteo-app/backend/internal/adapters/inbound/http"
	"meteo-app/backend/internal/adapters/outbound/ban"
	"meteo-app/backend/internal/adapters/outbound/metnorway"
	"meteo-app/backend/internal/adapters/outbound/nominatim"
	"meteo-app/backend/internal/adapters/outbound/openmeteo"
	"meteo-app/backend/internal/config"
	"meteo-app/backend/internal/domain"
	"meteo-app/backend/internal/usecase"
)

func main() {
	cfg, err := config.Load()
	if err != nil {
		log.Fatalf("Erreur chargement configuration : %v", err)
	}

	httpClient := &http.Client{
		Timeout: 10 * time.Second,
	}

	// Dynamic instantiation of Geocoding Port based on configuration
	var geocodingPort domain.GeocodingPort
	switch cfg.GeocodingProvider {
	case "nominatim":
		log.Println("Fournisseur de géocodage sélectionné : Nominatim (OpenStreetMap)")
		geocodingPort = nominatim.NewClient(httpClient, cfg.NominatimBaseURL, cfg.NominatimUserAgent)
	case "ban":
		fallthrough
	default:
		log.Println("Fournisseur de géocodage sélectionné : BAN (Base Adresse Nationale - Souverain)")
		geocodingPort = ban.NewClient(httpClient, cfg.BanBaseURL)
	}

	// Dynamic instantiation of Weather Port based on configuration
	var weatherPort domain.WeatherPort
	switch cfg.WeatherProvider {
	case "openmeteo":
		log.Println("Fournisseur météo sélectionné : Open-Meteo")
		weatherPort = openmeteo.NewClient(httpClient, cfg.OpenMeteoBaseURL)
	case "metnorway":
		fallthrough
	default:
		log.Printf("Fournisseur météo sélectionné : MET Norway (Locationforecast 2.0, User-Agent: %s)", cfg.MetNorwayUserAgent)
		weatherPort = metnorway.NewClient(httpClient, cfg.MetNorwayBaseURL, cfg.MetNorwayUserAgent)
	}

	// Inject chosen outbound adapters into the use case (Clean Architecture / Hexagonal)
	weatherUseCase := usecase.NewWeatherService(geocodingPort, weatherPort)

	// Inject use case into the inbound HTTP handler
	weatherHandler := httpAdapter.NewWeatherHandler(weatherUseCase)

	allowedOrigins := []string{
		"http://localhost:5173",
		"http://127.0.0.1:5173",
		"http://localhost:3000",
		"*",
	}

	router := httpAdapter.NewRouter(weatherHandler, allowedOrigins)

	server := &http.Server{
		Addr:         ":" + cfg.Port,
		Handler:      router,
		ReadTimeout:  15 * time.Second,
		WriteTimeout: 15 * time.Second,
		IdleTimeout:  60 * time.Second,
	}

	stopChan := make(chan os.Signal, 1)
	signal.Notify(stopChan, os.Interrupt, syscall.SIGTERM)

	go func() {
		log.Printf("Serveur météo démarré sur http://localhost:%s", cfg.Port)
		log.Printf("Endpoints disponibles :")
		log.Printf("  - GET /weather?address={address}")
		log.Printf("  - GET /health")
		if err := server.ListenAndServe(); err != nil && !errors.Is(err, http.ErrServerClosed) {
			log.Fatalf("Erreur fatale serveur HTTP : %v", err)
		}
	}()

	<-stopChan
	log.Println("Arrêt en cours du serveur...")

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	if err := server.Shutdown(ctx); err != nil {
		log.Fatalf("Arrêt forcé du serveur : %v", err)
	}

	log.Println("Serveur arrêté proprement.")
}
