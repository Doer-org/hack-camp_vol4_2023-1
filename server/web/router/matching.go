package router

import (
	"github.com/Doer-org/hack-camp_vol4_2023-1/internal/infrastructure/database"
	"github.com/Doer-org/hack-camp_vol4_2023-1/internal/infrastructure/repository"
	"github.com/Doer-org/hack-camp_vol4_2023-1/internal/usecase"
	"github.com/Doer-org/hack-camp_vol4_2023-1/web/http/handler"
)

func (r Router) InitMatchingRouter(conn *database.Conn) {
	repo := repository.NewMatchingRepository(conn)
	uc := usecase.NewMatchingUsecase(repo)
	h := handler.NewMatchingHandler(uc)

	g := r.Engine.Group("/matching")
	g.GET("/:user_id", h.GetMatchingsByUserId)
}
