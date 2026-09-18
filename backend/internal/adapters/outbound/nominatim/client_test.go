package nominatim_test

import (
	"context"
	"errors"
	"net/http"
	"net/http/httptest"
	"testing"

	"meteo-app/backend/internal/adapters/outbound/nominatim"
	"meteo-app/backend/internal/domain"
)

func TestNominatimClient_Geocode_Success(t *testing.T) {
	ts := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		q := r.URL.Query().Get("q")
		if q != "Paris" {
			t.Errorf("expected q=Paris, got %s", q)
		}
		userAgent := r.Header.Get("User-Agent")
		if userAgent == "" {
			t.Error("expected User-Agent header")
		}
		w.Header().Set("Content-Type", "application/json")
		_, _ = w.Write([]byte(`[{"lat":"48.8566","lon":"2.3522","display_name":"Paris, France"}]`))
	}))
	defer ts.Close()

	client := nominatim.NewClient(ts.Client(), ts.URL, "TestAgent/1.0")
	loc, err := client.Geocode(context.Background(), "Paris")

	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	if loc.DisplayName != "Paris, France" {
		t.Errorf("expected Paris, France, got %s", loc.DisplayName)
	}
	if loc.Latitude != 48.8566 || loc.Longitude != 2.3522 {
		t.Errorf("unexpected coords: %f, %f", loc.Latitude, loc.Longitude)
	}
}

func TestNominatimClient_Geocode_NotFound(t *testing.T) {
	ts := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		_, _ = w.Write([]byte(`[]`))
	}))
	defer ts.Close()

	client := nominatim.NewClient(ts.Client(), ts.URL, "TestAgent/1.0")
	loc, err := client.Geocode(context.Background(), "NowhereLand")

	if !errors.Is(err, domain.ErrLocationNotFound) {
		t.Errorf("expected ErrLocationNotFound, got %v", err)
	}
	if loc != nil {
		t.Errorf("expected nil loc, got %v", loc)
	}
}
