package ban

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"net/url"
	"time"

	"meteo-app/backend/internal/domain"
)

// Internal DTOs representing the Base Adresse Nationale (BAN) GeoJSON response.
// These structs are strictly unexported to prevent any API-specific formats from leaking outside this adapter.
type banResponse struct {
	Type     string       `json:"type"`
	Features []banFeature `json:"features"`
}

type banFeature struct {
	Type       string        `json:"type"`
	Geometry   banGeometry   `json:"geometry"`
	Properties banProperties `json:"properties"`
}

type banGeometry struct {
	Type        string    `json:"type"`
	Coordinates []float64 `json:"coordinates"` // [longitude, latitude] in GeoJSON
}

type banProperties struct {
	Label string `json:"label"`
	Name  string `json:"name"`
	City  string `json:"city"`
}

// Client implements domain.GeocodingPort using the French Base Adresse Nationale (BAN) API.
type Client struct {
	httpClient *http.Client
	baseURL    string
}

// NewClient instantiates a new BAN geocoding client with dependency injection.
func NewClient(httpClient *http.Client, baseURL string) *Client {
	if httpClient == nil {
		httpClient = &http.Client{Timeout: 10 * time.Second}
	}
	if baseURL == "" {
		baseURL = "https://api-adresse.data.gouv.fr/search"
	}
	return &Client{
		httpClient: httpClient,
		baseURL:    baseURL,
	}
}

// Geocode converts an address string into coordinates using the BAN API.
func (c *Client) Geocode(ctx context.Context, address string) (*domain.Location, error) {
	if address == "" {
		return nil, domain.ErrAddressRequired
	}

	reqURL := fmt.Sprintf("%s/?q=%s&limit=1", c.baseURL, url.QueryEscape(address))
	req, err := http.NewRequestWithContext(ctx, http.MethodGet, reqURL, nil)
	if err != nil {
		return nil, fmt.Errorf("%w: failed to create request: %v", domain.ErrGeocodingFailed, err)
	}

	req.Header.Set("Accept", "application/json")

	resp, err := c.httpClient.Do(req)
	if err != nil {
		return nil, fmt.Errorf("%w: request error: %v", domain.ErrGeocodingFailed, err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("%w: unexpected status %d", domain.ErrGeocodingFailed, resp.StatusCode)
	}

	var data banResponse
	if err := json.NewDecoder(resp.Body).Decode(&data); err != nil {
		return nil, fmt.Errorf("%w: decode error: %v", domain.ErrGeocodingFailed, err)
	}

	if len(data.Features) == 0 {
		return nil, domain.ErrLocationNotFound
	}

	first := data.Features[0]
	if len(first.Geometry.Coordinates) < 2 {
		return nil, fmt.Errorf("%w: invalid coordinates payload in BAN response", domain.ErrGeocodingFailed)
	}

	lon := first.Geometry.Coordinates[0]
	lat := first.Geometry.Coordinates[1]

	displayName := first.Properties.Label
	if displayName == "" {
		displayName = first.Properties.Name
	}
	if displayName == "" {
		displayName = address
	}

	return &domain.Location{
		DisplayName: displayName,
		Latitude:    lat,
		Longitude:   lon,
	}, nil
}
