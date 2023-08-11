package router

import (
	"github.com/Doer-org/hack-camp_vol4_2023-1/internal/infrastructure/database"
	"github.com/Doer-org/hack-camp_vol4_2023-1/internal/infrastructure/repository"
	"github.com/Doer-org/hack-camp_vol4_2023-1/internal/usecase"
	"github.com/Doer-org/hack-camp_vol4_2023-1/web/http/handler"
)

func (r Router) InitFriendRouter(conn *database.Conn) {
	repo := repository.NewFriendRepository(conn)
	uc := usecase.NewFriendUsecase(repo)
	h := handler.NewFriendHandler(uc)

	g := r.Engine.Group("/friend")
	g.POST("/", h.CreateFriend)
	g.GET("/:user_id", h.GetFriendsByUserID)
	g.PUT("/:id", h.UpdateFriend)
	g.DELETE("/:id", h.DeleteFriend)
}
