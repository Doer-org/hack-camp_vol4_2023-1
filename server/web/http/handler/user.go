package handler

import (
	"net/http"

	"github.com/Doer-org/hack-camp_vol4_2023-1/internal/usecase"
	"github.com/Doer-org/hack-camp_vol4_2023-1/web/http/json"
	"github.com/gin-gonic/gin"
)

type UserHandler struct {
	uc usecase.IUserUsecase
}

func NewUserHandler(uc usecase.IUserUsecase) *UserHandler {
	return &UserHandler{
		uc: uc,
	}
}

func (u *UserHandler) CreateUser(ctx *gin.Context) {
	var j json.UserJson
	if err := ctx.BindJSON(&j); err != nil {
		ctx.JSON(
			http.StatusBadRequest,
			gin.H{"error": err.Error()},
		)
		return
	}
	user, err := u.uc.CreateUser(ctx, json.UserJsonToEntity(&j))
	if err != nil {
		ctx.JSON(
			http.StatusBadRequest,
			gin.H{"error": err.Error()},
		)
	}
	userjson := json.UserEntityToJson(user)
	ctx.JSON(
		http.StatusCreated,
		gin.H{"data": userjson},
	)
}

func (u *UserHandler) GetUserById(ctx *gin.Context) {
	id := ctx.Param("id")
	user, err := u.uc.GetUserById(ctx, id)
	if err != nil {
		ctx.JSON(
			http.StatusBadRequest,
			gin.H{"error": err.Error()},
		)
		return
	}
	userjson := json.UserEntityToJson(user)
	ctx.JSON(
		http.StatusOK,
		gin.H{"data": userjson},
	)
}

func (u *UserHandler) UpdateUser(ctx *gin.Context) {
	id := ctx.Param("id")
	var j json.UserJson
	if err := ctx.BindJSON(&j); err != nil {
		ctx.JSON(
			http.StatusBadRequest,
			gin.H{"error": err.Error()},
		)
		return
	}
	user, err := u.uc.UpdateUser(ctx, json.UserJsonToEntity(&j), id)
	if err != nil {
		ctx.JSON(
			http.StatusBadRequest,
			gin.H{"error": err.Error()},
		)
		return
	}
	userjson := json.UserEntityToJson(user)
	ctx.JSON(
		http.StatusCreated,
		gin.H{"data": userjson},
	)
}
