package main

import (
	"log"
	"net/http"
	"os"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/Doer-org/hack-camp_vol4_2023-1/infrastructure"
	"github.com/Doer-org/hack-camp_vol4_2023-1/infrastructure/database"
	"github.com/rs/cors"
)

const defaultPort = "8080"

func main() {
	if err := database.Connect(); err != nil {
		panic(err.Error())
	}

	port := os.Getenv("PORT")
	if port == "" {
		port = defaultPort
	}

	// c := cors.New(cors.Options{
	// 	AllowedOrigins: []string{"http://localhost", "http://localhost:8080","http://localhost:3000/"},
	// 	AllowCredentials: true,
	// 	// Enable Debugging for testing, consider disabling in production
	// 	Debug: true,
	// })
	r := http.NewServeMux()

	srv := handler.NewDefaultServer(infrastructure.NewExecutableSchema(infrastructure.Config{Resolvers: &infrastructure.Resolver{}}))
	r.Handle("/", playground.Handler("GraphQL playground", "/query"))
	r.Handle("/query", srv)
	handler := cors.AllowAll().Handler(r)

	s := &http.Server{
		Addr:    ":8080",
		Handler: handler,
	}

	log.Printf("connect to http://localhost:%s/ for GraphQL playground", port)
	log.Fatal(s.ListenAndServe())
}
