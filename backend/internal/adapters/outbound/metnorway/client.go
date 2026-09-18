package metnorway

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"strings"
	"time"

	"meteo-app/backend/internal/domain"
)

// Internal DTOs representing the MET Norway Locationforecast 2.0 GeoJSON response.
// These structs are strictly unexported to prevent API-specific models from leaking into the domain.
type metNorwayResponse struct {
	Properties struct {
		Timeseries []metNorwayTimeseries `json:"timeseries"`
	} `json:"properties"`
}

type metNorwayTimeseries struct {
	Time string            `json:"time"`
	Data metNorwayDataNode `json:"data"`
}

type metNorwayDataNode struct {
	Instant struct {
		Details struct {
			AirTemperature float64 `json:"air_temperature"`
		} `json:"details"`
	} `json:"instant"`
	Next1Hours *struct {
		Summary struct {
			SymbolCode string `json:"symbol_code"`
		} `json:"summary"`
	} `json:"next_1_hours"`
	Next6Hours *struct {
		Summary struct {
			SymbolCode string `json:"symbol_code"`
		} `json:"summary"`
	} `json:"next_6_hours"`
	Next12Hours *struct {
		Summary struct {
			SymbolCode string `json:"symbol_code"`
		} `json:"summary"`
	} `json:"next_12_hours"`
}

// Client implements domain.WeatherPort using the MET Norway Locationforecast 2.0 API.
type Client struct {
	httpClient *http.Client
	baseURL    string
	userAgent  string
}

// NewClient instantiates a new MET Norway weather client.
// An identifiable User-Agent is mandatory per MET Norway's Terms of Service.
func NewClient(httpClient *http.Client, baseURL string, userAgent string) *Client {
	if httpClient == nil {
		httpClient = &http.Client{Timeout: 10 * time.Second}
	}
	if baseURL == "" {
		baseURL = "https://api.met.no/weatherapi/locationforecast/2.0/compact"
	}
	if userAgent == "" {
		userAgent = "TP2-MeteoApi/1.0 contact@ecole.fr"
	}
	return &Client{
		httpClient: httpClient,
		baseURL:    baseURL,
		userAgent:  userAgent,
	}
}

// GetHourlyForecast fetches weather forecasts for the specified latitude and longitude from MET Norway.
func (c *Client) GetHourlyForecast(ctx context.Context, lat, lon float64) ([]domain.HourlyForecast, error) {
	reqURL := fmt.Sprintf("%s?lat=%.4f&lon=%.4f", c.baseURL, lat, lon)
	req, err := http.NewRequestWithContext(ctx, http.MethodGet, reqURL, nil)
	if err != nil {
		return nil, fmt.Errorf("%w: failed to create request: %v", domain.ErrWeatherFetchFailed, err)
	}

	req.Header.Set("User-Agent", c.userAgent)
	req.Header.Set("Accept", "application/json")

	resp, err := c.httpClient.Do(req)
	if err != nil {
		return nil, fmt.Errorf("%w: request failed: %v", domain.ErrWeatherFetchFailed, err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("%w: received HTTP status %d", domain.ErrWeatherFetchFailed, resp.StatusCode)
	}

	var data metNorwayResponse
	if err := json.NewDecoder(resp.Body).Decode(&data); err != nil {
		return nil, fmt.Errorf("%w: JSON decoding error: %v", domain.ErrWeatherFetchFailed, err)
	}

	timeseries := data.Properties.Timeseries
	if len(timeseries) == 0 {
		return nil, fmt.Errorf("%w: empty timeseries received from MET Norway", domain.ErrWeatherFetchFailed)
	}

	forecasts := make([]domain.HourlyForecast, len(timeseries))
	for i, item := range timeseries {
		symbol := ""
		if item.Data.Next1Hours != nil && item.Data.Next1Hours.Summary.SymbolCode != "" {
			symbol = item.Data.Next1Hours.Summary.SymbolCode
		} else if item.Data.Next6Hours != nil && item.Data.Next6Hours.Summary.SymbolCode != "" {
			symbol = item.Data.Next6Hours.Summary.SymbolCode
		} else if item.Data.Next12Hours != nil && item.Data.Next12Hours.Summary.SymbolCode != "" {
			symbol = item.Data.Next12Hours.Summary.SymbolCode
		}

		forecasts[i] = domain.HourlyForecast{
			Time:        item.Time,
			WeatherCode: symbolCodeToWMO(symbol),
			Temperature: item.Data.Instant.Details.AirTemperature,
		}
	}

	return forecasts, nil
}

// symbolCodeToWMO maps MET Norway weather symbol codes to standard WMO interpretation codes.
func symbolCodeToWMO(symbol string) int {
	clean := symbol
	for _, suffix := range []string{"_day", "_night", "_polartwilight"} {
		clean = strings.TrimSuffix(clean, suffix)
	}

	switch clean {
	case "clearsky":
		return 0
	case "fair":
		return 1
	case "partlycloudy":
		return 2
	case "cloudy":
		return 3
	case "fog":
		return 45
	case "lightsleet":
		return 56
	case "lightrain":
		return 61
	case "rain":
		return 63
	case "heavyrain":
		return 65
	case "sleet":
		return 66
	case "heavysleet":
		return 67
	case "lightsnow":
		return 71
	case "snow":
		return 73
	case "heavysnow":
		return 75
	case "lightrainshowers", "lightsleetshowers":
		return 80
	case "rainshowers", "sleetshowers":
		return 81
	case "heavyrainshowers", "heavysleetshowers":
		return 82
	case "lightsnowshowers", "snowshowers":
		return 85
	case "heavysnowshowers":
		return 86
	case "lightrainandthunder", "rainandthunder", "heavyrainandthunder",
		"lightrainshowersandthunder", "rainshowersandthunder", "heavyrainshowersandthunder",
		"lightsleetandthunder", "heavysleetandthunder":
		return 95
	case "lightsnowandthunder", "snowandthunder", "heavysnowandthunder":
		return 96
	default:
		return 0
	}
}
