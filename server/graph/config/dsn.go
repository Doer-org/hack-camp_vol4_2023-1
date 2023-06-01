package config

import (
	"fmt"
	"os"

	_ "github.com/go-sql-driver/mysql"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

var db *gorm.DB

var (
	dbUser     = os.Getenv("DB_USER")
	dbPass     = os.Getenv("DB_PASSWORD")
	dbHost     = os.Getenv("DB_HOST")
	dbPort     = os.Getenv("DB_PORT")
	dbDatabase = os.Getenv("DB_DATABASE")
)

func GetDbURI() (string, error) {
	if dbUser == "" || dbPass == "" {
		return "", fmt.Errorf("dbUser or dbPass is empty")
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

func InitDB() error {

	DbURI, err := GetDbURI()
	if err != nil {
		return err
	}

	conn, err := gorm.Open("mysql", DbURI)
	if err != nil {
		return err
	}

	db = conn.Set("gorm:auto_update", false)

	return nil
}

func DB() *gorm.DB {
	return db
}
