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
	"meteo-app/backend/internal/adapters/outbound/nominatim"
	"meteo-app/backend/internal/adapters/outbound/openmeteo"
	"meteo-app/backend/internal/usecase"
)

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8081"
	}

	httpClient := &http.Client{
		Timeout: 10 * time.Second,
	}

	nominatimClient := nominatim.NewClient(
		httpClient,
		"https://nominatim.openstreetmap.org/search",
		"Meteo3D-App/1.0",
	)

	openMeteoClient := openmeteo.NewClient(
		httpClient,
		"https://api.open-meteo.com/v1/forecast",
	)

	weatherUseCase := usecase.NewWeatherService(nominatimClient, openMeteoClient)

	weatherHandler := httpAdapter.NewWeatherHandler(weatherUseCase)

	allowedOrigins := []string{
		"http://localhost:5173",
		"http://127.0.0.1:5173",
		"http://localhost:3000",
		"*",
	}

	router := httpAdapter.NewRouter(weatherHandler, allowedOrigins)

	server := &http.Server{
		Addr:         ":" + port,
		Handler:      router,
		ReadTimeout:  15 * time.Second,
		WriteTimeout: 15 * time.Second,
		IdleTimeout:  60 * time.Second,
	}

	stopChan := make(chan os.Signal, 1)
	signal.Notify(stopChan, os.Interrupt, syscall.SIGTERM)

	go func() {
		log.Printf("Serveur météo démarré sur http://localhost:%s", port)
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
