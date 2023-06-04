package config

import (
	"fmt"
	"os"
)

var (
	dbUser     = os.Getenv("DB_USER")
	dbPass     = os.Getenv("DB_PASSWORD")
	dbHost     = os.Getenv("DB_HOST")
	dbPort     = os.Getenv("DB_PORT")
	dbDatabase = os.Getenv("DB_DATABASE")
)

func GetDbURI() (string, error) {
	if dbUser == "" || dbPass == "" || dbHost == "" || dbPort == "" || dbDatabase == "" {
		return "", fmt.Errorf("env item empty")
	}
	return fmt.Sprintf(
		`%s:%s@tcp(%s:%s)/%s?charset=utf8&parseTime=True&loc=Local`,
		dbUser,
		dbPass,
		dbHost,
		dbPort,
		dbDatabase,
	), nil
}
