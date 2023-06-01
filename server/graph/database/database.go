package database

import (
	"database/sql"
	"log"


	"github.com/Doer-org/hack-camp_vol4_2023-1/graph/config"
	_ "github.com/go-sql-driver/mysql"
)

func Connect() *sql.DB {
	db, err := sql.Open("postgres", config.GetDbUri())
	if err != nil {
		log.Println("db connect failed")
		panic(err)
	}
	log.Println("db connect success")

	return db
}

