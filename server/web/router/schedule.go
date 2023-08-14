package router

import (
	"github.com/Doer-org/hack-camp_vol4_2023-1/internal/infrastructure/database"
	"github.com/Doer-org/hack-camp_vol4_2023-1/internal/infrastructure/repository"
	"github.com/Doer-org/hack-camp_vol4_2023-1/internal/usecase"
	"github.com/Doer-org/hack-camp_vol4_2023-1/web/http/handler"
)

func (r Router) InitScheduleRouter(conn *database.Conn) {
	repo := repository.NewScheduleRepository(conn)
	uc := usecase.NewScheduleUsecase(repo)
	h := handler.NewScheduleHandler(uc)

	g := r.Engine.Group("/schedule")
	g.POST("/", h.CreateSchedule)
	g.GET("/:user_id", h.GetSchedulesByUserID)
	g.PUT("/:id", h.UpdateSchedule)
	g.DELETE("/:id", h.DeleteSchedule)
}
