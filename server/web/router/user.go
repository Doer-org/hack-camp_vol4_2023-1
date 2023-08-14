package router

import (
	"github.com/Doer-org/hack-camp_vol4_2023-1/internal/infrastructure/database"
	"github.com/Doer-org/hack-camp_vol4_2023-1/internal/infrastructure/repository"
	"github.com/Doer-org/hack-camp_vol4_2023-1/internal/usecase"
	"github.com/Doer-org/hack-camp_vol4_2023-1/web/http/handler"
)

func (r Router) InitUserRouter(conn *database.Conn) {
	repo := repository.NewUserRepository(conn)
	uc := usecase.NewUserUsecase(repo)
	h := handler.NewUserHandler(uc)

	g := r.Engine.Group("/user")
	g.POST("/", h.CreateUser)
	g.GET("/:id", h.GetUserById)
	g.PUT("/:id", h.UpdateUser)
}
