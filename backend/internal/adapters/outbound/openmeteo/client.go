package openmeteo

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"time"

	"meteo-app/backend/internal/domain"
)

type openMeteoResponse struct {
	Hourly struct {
		Time          []string  `json:"time"`
		WeatherCode   []int     `json:"weathercode"`
		WeatherCodeV2 []int     `json:"weather_code"`
		Temperature2M []float64 `json:"temperature_2m"`
	} `json:"hourly"`
}

// Client implements domain.WeatherPort using Open-Meteo API.
type Client struct {
	httpClient *http.Client
	baseURL    string
}

// NewClient instantiates a new Open-Meteo client.
func NewClient(httpClient *http.Client, baseURL string) *Client {
	if httpClient == nil {
		httpClient = &http.Client{Timeout: 10 * time.Second}
	}
	if baseURL == "" {
		baseURL = "https://api.open-meteo.com/v1/forecast"
	}
	return &Client{
		httpClient: httpClient,
		baseURL:    baseURL,
	}
}

// GetHourlyForecast retrieves hourly forecasts for specified latitude and longitude.
func (c *Client) GetHourlyForecast(ctx context.Context, lat, lon float64) ([]domain.HourlyForecast, error) {
	reqURL := fmt.Sprintf("%s?latitude=%.6f&longitude=%.6f&hourly=weathercode,temperature_2m", c.baseURL, lat, lon)
	req, err := http.NewRequestWithContext(ctx, http.MethodGet, reqURL, nil)
	if err != nil {
		return nil, fmt.Errorf("%w: failed to create request: %v", domain.ErrWeatherFetchFailed, err)
	}
	req.Header.Set("Accept", "application/json")

	resp, err := c.httpClient.Do(req)
	if err != nil {
		return nil, fmt.Errorf("%w: request failed: %v", domain.ErrWeatherFetchFailed, err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("%w: received HTTP status %d", domain.ErrWeatherFetchFailed, resp.StatusCode)
	}

	var data openMeteoResponse
	if err := json.NewDecoder(resp.Body).Decode(&data); err != nil {
		return nil, fmt.Errorf("%w: JSON decoding error: %v", domain.ErrWeatherFetchFailed, err)
	}

	weatherCodes := data.Hourly.WeatherCode
	if len(weatherCodes) == 0 && len(data.Hourly.WeatherCodeV2) > 0 {
		weatherCodes = data.Hourly.WeatherCodeV2
	}

	nTimes := len(data.Hourly.Time)
	nTemps := len(data.Hourly.Temperature2M)
	nCodes := len(weatherCodes)

	count := nTimes
	if nTemps < count {
		count = nTemps
	}
	if nCodes < count {
		count = nCodes
	}

	if count == 0 {
		return nil, fmt.Errorf("%w: empty hourly data received", domain.ErrWeatherFetchFailed)
	}

	forecasts := make([]domain.HourlyForecast, count)
	for i := 0; i < count; i++ {
		forecasts[i] = domain.HourlyForecast{
			Time:        data.Hourly.Time[i],
			WeatherCode: weatherCodes[i],
			Temperature: data.Hourly.Temperature2M[i],
		}
	}

	return forecasts, nil
}
