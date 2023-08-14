package cmd

import (
	"log"

	"github.com/Doer-org/hack-camp_vol4_2023-1/internal/infrastructure/database"
	"github.com/Doer-org/hack-camp_vol4_2023-1/web/router"
)

func Exec() {
	conn, err := database.NewConn()
	if err != nil {
		log.Fatal(err)
	}
	r := router.NewRouter()

	r.InitUserRouter(conn)
	r.InitScheduleRouter(conn)
	r.InitFriendRouter(conn)
	r.Serve()
}
