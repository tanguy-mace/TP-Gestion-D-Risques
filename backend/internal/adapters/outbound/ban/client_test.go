package ban_test

import (
	"context"
	"errors"
	"net/http"
	"net/http/httptest"
	"testing"

	"meteo-app/backend/internal/adapters/outbound/ban"
	"meteo-app/backend/internal/domain"
)

func TestBANClient_Geocode_Success(t *testing.T) {
	ts := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		q := r.URL.Query().Get("q")
		if q != "Alès" {
			t.Errorf("expected q=Alès, got %s", q)
		}
		limit := r.URL.Query().Get("limit")
		if limit != "1" {
			t.Errorf("expected limit=1, got %s", limit)
		}

		w.Header().Set("Content-Type", "application/json")
		_, _ = w.Write([]byte(`{
			"type": "FeatureCollection",
			"features": [
				{
					"type": "Feature",
					"geometry": {
						"type": "Point",
						"coordinates": [4.0834, 44.1272]
					},
					"properties": {
						"label": "Alès",
						"score": 0.95,
						"city": "Alès"
					}
				}
			]
		}`))
	}))
	defer ts.Close()

	client := ban.NewClient(ts.Client(), ts.URL)
	loc, err := client.Geocode(context.Background(), "Alès")

	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	if loc == nil {
		t.Fatal("expected non-nil location")
	}
	if loc.DisplayName != "Alès" {
		t.Errorf("expected DisplayName 'Alès', got %s", loc.DisplayName)
	}
	// Coordinates in GeoJSON are [lon, lat] = [4.0834, 44.1272]
	if loc.Latitude != 44.1272 || loc.Longitude != 4.0834 {
		t.Errorf("expected lat 44.1272 and lon 4.0834, got lat %f, lon %f", loc.Latitude, loc.Longitude)
	}
}

func TestBANClient_Geocode_NotFound(t *testing.T) {
	ts := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		_, _ = w.Write([]byte(`{"type":"FeatureCollection","features":[]}`))
	}))
	defer ts.Close()

	client := ban.NewClient(ts.Client(), ts.URL)
	loc, err := client.Geocode(context.Background(), "VilleInconnue99999")

	if !errors.Is(err, domain.ErrLocationNotFound) {
		t.Errorf("expected ErrLocationNotFound, got %v", err)
	}
	if loc != nil {
		t.Errorf("expected nil location, got %v", loc)
	}
}

func TestBANClient_Geocode_EmptyAddress(t *testing.T) {
	client := ban.NewClient(nil, "")
	loc, err := client.Geocode(context.Background(), "")

	if !errors.Is(err, domain.ErrAddressRequired) {
		t.Errorf("expected ErrAddressRequired, got %v", err)
	}
	if loc != nil {
		t.Errorf("expected nil location, got %v", loc)
	}
}

func TestBANClient_Geocode_ServerError(t *testing.T) {
	ts := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(http.StatusInternalServerError)
	}))
	defer ts.Close()

	client := ban.NewClient(ts.Client(), ts.URL)
	loc, err := client.Geocode(context.Background(), "Paris")

	if !errors.Is(err, domain.ErrGeocodingFailed) {
		t.Errorf("expected ErrGeocodingFailed, got %v", err)
	}
	if loc != nil {
		t.Errorf("expected nil location, got %v", loc)
	}
}
