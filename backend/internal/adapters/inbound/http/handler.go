package http

import (
	"encoding/json"
	"errors"
	"net/http"

	"meteo-app/backend/internal/domain"
)

type errorResponse struct {
	Error   string `json:"error"`
	Details string `json:"details,omitempty"`
}

// WeatherHandler handles incoming HTTP requests for weather forecasts.
type WeatherHandler struct {
	weatherUseCase domain.WeatherUseCase
}

// NewWeatherHandler creates a new HTTP handler with injected WeatherUseCase.
func NewWeatherHandler(useCase domain.WeatherUseCase) *WeatherHandler {
	return &WeatherHandler{
		weatherUseCase: useCase,
	}
}

// GetWeather handles GET /weather?address={address}.
func (h *WeatherHandler) GetWeather(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		writeJSON(w, http.StatusMethodNotAllowed, errorResponse{Error: "method not allowed"})
		return
	}

	address := r.URL.Query().Get("address")
	if address == "" {
		writeJSON(w, http.StatusBadRequest, errorResponse{
			Error:   "bad request",
			Details: domain.ErrAddressRequired.Error(),
		})
		return
	}

	forecast, err := h.weatherUseCase.GetWeatherByAddress(r.Context(), address)
	if err != nil {
		switch {
		case errors.Is(err, domain.ErrAddressRequired):
			writeJSON(w, http.StatusBadRequest, errorResponse{Error: "bad request", Details: err.Error()})
		case errors.Is(err, domain.ErrLocationNotFound):
			writeJSON(w, http.StatusNotFound, errorResponse{Error: "not found", Details: err.Error()})
		case errors.Is(err, domain.ErrGeocodingFailed), errors.Is(err, domain.ErrWeatherFetchFailed):
			writeJSON(w, http.StatusBadGateway, errorResponse{Error: "upstream service failure", Details: err.Error()})
		default:
			writeJSON(w, http.StatusInternalServerError, errorResponse{Error: "internal error", Details: err.Error()})
		}
		return
	}

	writeJSON(w, http.StatusOK, forecast)
}

func writeJSON(w http.ResponseWriter, status int, data any) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(status)
	_ = json.NewEncoder(w).Encode(data)
}

// NewRouter sets up HTTP routing and applies middleware.
func NewRouter(handler *WeatherHandler, allowedOrigins []string) http.Handler {
	mux := http.NewServeMux()

	// Health check endpoint
	mux.HandleFunc("/health", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		_, _ = w.Write([]byte(`{"status":"ok"}`))
	})

	// Core weather endpoint
	mux.HandleFunc("/weather", handler.GetWeather)

	// Chain middlewares: Recovery -> Logging -> CORS -> Mux
	cors := CORSMiddleware(allowedOrigins)
	return RecoveryMiddleware(LoggingMiddleware(cors(mux)))
}
