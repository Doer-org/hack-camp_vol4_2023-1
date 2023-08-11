package handler

import (
	"log"
	"net/http"

	"github.com/Doer-org/hack-camp_vol4_2023-1/internal/usecase"
	"github.com/Doer-org/hack-camp_vol4_2023-1/web/http/json"
	"github.com/gin-gonic/gin"
)

type FriendHandler struct {
	uc usecase.IFriendUsecase
}

func NewFriendHandler(uc usecase.IFriendUsecase) *FriendHandler {
	return &FriendHandler{
		uc: uc,
	}
}

func (u *FriendHandler) CreateFriend(ctx *gin.Context) {
	var j json.FriendJson
	if err := ctx.BindJSON(&j); err != nil {
		log.Fatalf(err.Error())
		ctx.JSON(
			http.StatusBadRequest,
			gin.H{"error": err.Error()},
		)
		return
	}
	friend, err := u.uc.CreateFriend(ctx, json.FriendJsonToEntity(&j))
	if err != nil {
		ctx.JSON(
			http.StatusBadRequest,
			gin.H{"error": err.Error()},
		)
		return
	}
	friendjson := json.FriendEntityToJson(friend)
	ctx.JSON(
		http.StatusCreated,
		gin.H{"data": friendjson},
	)
}

func (u *FriendHandler) GetFriendsByUserID(ctx *gin.Context) {
	user_id := ctx.Param("user_id")
	friends, err := u.uc.GetFriendsByUserID(ctx, user_id)
	if err != nil {
		ctx.JSON(
			http.StatusBadRequest,
			gin.H{"error": err.Error()},
		)
		return
	}
	friendsjson := json.FriendsEntityToJson(friends)
	ctx.JSON(
		http.StatusCreated,
		gin.H{"data": friendsjson},
	)
}

func (u *FriendHandler) DeleteFriend(ctx *gin.Context) {
	id := ctx.Param("id")
	err := u.uc.DeleteFriend(ctx, id)
	if err != nil {
		ctx.JSON(
			http.StatusBadRequest,
			gin.H{"error": err.Error()},
		)
		return
	}
	ctx.JSON(
		http.StatusCreated,
		gin.H{"data": "success"},
	)
}

func (u *FriendHandler) UpdateFriend(ctx *gin.Context) {
	id := ctx.Param("id")
	var j json.FriendJson
	if err := ctx.BindJSON(&j); err != nil {
		ctx.JSON(
			http.StatusBadRequest,
			gin.H{"error": err.Error()},
		)
		return
	}
	friend, err := u.uc.UpdateFriend(ctx, json.FriendJsonToEntity(&j), id)
	if err != nil {
		ctx.JSON(
			http.StatusBadRequest,
			gin.H{"error": err.Error()},
		)
		return
	}
	friendjson := json.FriendEntityToJson(friend)
	ctx.JSON(
		http.StatusCreated,
		gin.H{"data": friendjson},
	)
}
