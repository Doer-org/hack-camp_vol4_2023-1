package handler

import (
	"log"
	"net/http"

	"github.com/Doer-org/hack-camp_vol4_2023-1/internal/usecase"
	"github.com/Doer-org/hack-camp_vol4_2023-1/web/http/json"
	"github.com/gin-gonic/gin"
)

type HangoutHandler struct {
	uc usecase.IHangoutUsecase
}

func NewHangoutHandler(uc usecase.IHangoutUsecase) *HangoutHandler {
	return &HangoutHandler{
		uc: uc,
	}
}

func (u *HangoutHandler) CreateHangout(ctx *gin.Context) {
	var j json.HangoutJson
	if err := ctx.BindJSON(&j); err != nil {
		log.Fatalf(err.Error())
		ctx.JSON(
			http.StatusBadRequest,
			gin.H{"error": err.Error()},
		)
		return
	}
	hangout, err := u.uc.CreateHangout(ctx, json.HangoutJsonToEntity(&j))
	if err != nil {
		ctx.JSON(
			http.StatusBadRequest,
			gin.H{"error": err.Error()},
		)
		return
	}
	hangoutjson := json.HangoutEntityToJson(hangout)
	ctx.JSON(
		http.StatusCreated,
		gin.H{"data": hangoutjson},
	)
}

func (u *HangoutHandler) GetHangoutsByUserID(ctx *gin.Context) {
	user_id := ctx.Param("user_id")
	hangouts, err := u.uc.GetHangoutsByUserID(ctx, user_id)
	if err != nil {
		ctx.JSON(
			http.StatusBadRequest,
			gin.H{"error": err.Error()},
		)
		return
	}
	hangoutsjson := json.HangoutsEntityToJson(hangouts)
	ctx.JSON(
		http.StatusCreated,
		gin.H{"data": hangoutsjson},
	)
}

func (u *HangoutHandler) DeleteHangout(ctx *gin.Context) {
	id := ctx.Param("id")
	err := u.uc.DeleteHangout(ctx, id)
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

func (u *HangoutHandler) UpdateHangout(ctx *gin.Context) {
	id := ctx.Param("id")
	var j json.HangoutJson
	if err := ctx.BindJSON(&j); err != nil {
		ctx.JSON(
			http.StatusBadRequest,
			gin.H{"error": err.Error()},
		)
		return
	}
	hangout, err := u.uc.UpdateHangout(ctx, json.HangoutJsonToEntity(&j), id)
	if err != nil {
		ctx.JSON(
			http.StatusBadRequest,
			gin.H{"error": err.Error()},
		)
		return
	}
	hangoutjson := json.HangoutEntityToJson(hangout)
	ctx.JSON(
		http.StatusCreated,
		gin.H{"data": hangoutjson},
	)
}
