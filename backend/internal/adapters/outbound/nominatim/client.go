package nominatim

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"net/url"
	"strconv"
	"time"

	"meteo-app/backend/internal/domain"
)

type nominatimResponseItem struct {
	DisplayName string `json:"display_name"`
	Lat         string `json:"lat"`
	Lon         string `json:"lon"`
}

// Client implements domain.GeocodingPort using the Nominatim OpenStreetMap API.
type Client struct {
	httpClient *http.Client
	baseURL    string
	userAgent  string
}

// NewClient creates a new Nominatim geocoding client with dependency injection.
func NewClient(httpClient *http.Client, baseURL string, userAgent string) *Client {
	if httpClient == nil {
		httpClient = &http.Client{Timeout: 10 * time.Second}
	}
	if baseURL == "" {
		baseURL = "https://nominatim.openstreetmap.org/search"
	}
	if userAgent == "" {
		userAgent = "MeteoApp-Fullstack/1.0"
	}
	return &Client{
		httpClient: httpClient,
		baseURL:    baseURL,
		userAgent:  userAgent,
	}
}

// Geocode converts an address query into latitude and longitude coordinates.
func (c *Client) Geocode(ctx context.Context, address string) (*domain.Location, error) {
	if address == "" {
		return nil, domain.ErrAddressRequired
	}

	reqURL := fmt.Sprintf("%s?q=%s&format=json&limit=1", c.baseURL, url.QueryEscape(address))
	req, err := http.NewRequestWithContext(ctx, http.MethodGet, reqURL, nil)
	if err != nil {
		return nil, fmt.Errorf("%w: failed to create request: %v", domain.ErrGeocodingFailed, err)
	}

	req.Header.Set("User-Agent", c.userAgent)
	req.Header.Set("Accept", "application/json")

	resp, err := c.httpClient.Do(req)
	if err != nil {
		return nil, fmt.Errorf("%w: request error: %v", domain.ErrGeocodingFailed, err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("%w: unexpected status %d", domain.ErrGeocodingFailed, resp.StatusCode)
	}

	var results []nominatimResponseItem
	if err := json.NewDecoder(resp.Body).Decode(&results); err != nil {
		return nil, fmt.Errorf("%w: decode error: %v", domain.ErrGeocodingFailed, err)
	}

	if len(results) == 0 {
		return nil, domain.ErrLocationNotFound
	}

	lat, err := strconv.ParseFloat(results[0].Lat, 64)
	if err != nil {
		return nil, fmt.Errorf("%w: invalid latitude value: %v", domain.ErrGeocodingFailed, err)
	}

	lon, err := strconv.ParseFloat(results[0].Lon, 64)
	if err != nil {
		return nil, fmt.Errorf("%w: invalid longitude value: %v", domain.ErrGeocodingFailed, err)
	}

	return &domain.Location{
		DisplayName: results[0].DisplayName,
		Latitude:    lat,
		Longitude:   lon,
	}, nil
}
