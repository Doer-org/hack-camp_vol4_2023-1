package database

import (
	"log"

	"github.com/Doer-org/hack-camp_vol4_2023-1/domain/entity"
	"github.com/Doer-org/hack-camp_vol4_2023-1/graph/config"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var db *gorm.DB

func Connect() error {
	DbURI, err := config.GetDbURI()
	if err != nil {
		return err
	}

	conn, err := gorm.Open(mysql.Open(DbURI))
	if err != nil {
		return err
	}
	err = conn.AutoMigrate(&entity.User{}, &entity.Hangout{}, &entity.Schedule{}, &entity.Friend{})
	if err != nil {
		return err
	}
	log.Printf("dbconnect")

	db = conn.Set("gorm:auto_update", false)
	return nil
}

func DB() *gorm.DB {
	return db
}
