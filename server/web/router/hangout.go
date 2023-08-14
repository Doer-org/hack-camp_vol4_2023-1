package router

import (
	"github.com/Doer-org/hack-camp_vol4_2023-1/internal/infrastructure/database"
	"github.com/Doer-org/hack-camp_vol4_2023-1/internal/infrastructure/repository"
	"github.com/Doer-org/hack-camp_vol4_2023-1/internal/usecase"
	"github.com/Doer-org/hack-camp_vol4_2023-1/web/http/handler"
)

func (r Router) InitHangoutRouter(conn *database.Conn) {
	repo := repository.NewHangoutRepository(conn)
	uc := usecase.NewHangoutUsecase(repo)
	h := handler.NewHangoutHandler(uc)

	g := r.Engine.Group("/hangout")
	g.POST("/", h.CreateHangout)
	g.GET("/:user_id", h.GetHangoutsByUserID)
	g.PUT("/:id", h.UpdateHangout)
	g.DELETE("/:id", h.DeleteHangout)
}
