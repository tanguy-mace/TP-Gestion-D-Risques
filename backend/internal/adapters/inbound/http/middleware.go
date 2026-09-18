package http

import (
	"log"
	"net/http"
	"strings"
	"time"
)

// CORSMiddleware handles Cross-Origin Resource Sharing.
func CORSMiddleware(allowedOrigins []string) func(http.Handler) http.Handler {
	return func(next http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			origin := r.Header.Get("Origin")
			allowed := false

			if len(allowedOrigins) == 0 {
				w.Header().Set("Access-Control-Allow-Origin", "*")
				allowed = true
			} else {
				for _, o := range allowedOrigins {
					if o == "*" || strings.EqualFold(o, origin) {
						w.Header().Set("Access-Control-Allow-Origin", origin)
						allowed = true
						break
					}
				}
			}

			w.Header().Set("Access-Control-Allow-Methods", "GET, OPTIONS")
			w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Accept, Authorization")
			w.Header().Set("Access-Control-Max-Age", "86400")

			if r.Method == http.MethodOptions {
				if allowed {
					w.WriteHeader(http.StatusNoContent)
				} else {
					w.WriteHeader(http.StatusForbidden)
				}
				return
			}

			next.ServeHTTP(w, r)
		})
	}
}

// LoggingMiddleware logs incoming HTTP requests.
func LoggingMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		start := time.Now()
		next.ServeHTTP(w, r)
		log.Printf("[%s] %s %s (%s)", r.Method, r.URL.Path, r.URL.RawQuery, time.Since(start))
	})
}

// RecoveryMiddleware catches panics and returns HTTP 500.
func RecoveryMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		defer func() {
			if rec := recover(); rec != nil {
				log.Printf("PANIC recovered: %v", rec)
				http.Error(w, `{"error":"internal server error"}`, http.StatusInternalServerError)
			}
		}()
		next.ServeHTTP(w, r)
	})
}
