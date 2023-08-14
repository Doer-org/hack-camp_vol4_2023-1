package handler

import (
	"log"
	"net/http"

	"github.com/Doer-org/hack-camp_vol4_2023-1/internal/usecase"
	"github.com/Doer-org/hack-camp_vol4_2023-1/web/http/json"
	"github.com/gin-gonic/gin"
)

type ScheduleHandler struct {
	uc usecase.IScheduleUsecase
}

func NewScheduleHandler(uc usecase.IScheduleUsecase) *ScheduleHandler {
	return &ScheduleHandler{
		uc: uc,
	}
}

func (u *ScheduleHandler) CreateSchedule(ctx *gin.Context) {
	var j json.ScheduleJson
	if err := ctx.BindJSON(&j); err != nil {
		log.Fatalf(err.Error())
		ctx.JSON(
			http.StatusBadRequest,
			gin.H{"error": err.Error()},
		)
		return
	}
	Schedule, err := u.uc.CreateSchedule(ctx, json.ScheduleJsonToEntity(&j))
	if err != nil {
		ctx.JSON(
			http.StatusBadRequest,
			gin.H{"error": err.Error()},
		)
		return
	}
	Schedulejson := json.ScheduleEntityToJson(Schedule)
	ctx.JSON(
		http.StatusCreated,
		gin.H{"data": Schedulejson},
	)
}

func (u *ScheduleHandler) GetSchedulesByUserID(ctx *gin.Context) {
	user_id := ctx.Param("user_id")
	Schedules, err := u.uc.GetSchedulesByUserId(ctx, user_id)
	if err != nil {
		ctx.JSON(
			http.StatusBadRequest,
			gin.H{"error": err.Error()},
		)
		return
	}
	Schedulesjson := json.SchedulesEntityToJson(Schedules)
	ctx.JSON(
		http.StatusCreated,
		gin.H{"data": Schedulesjson},
	)
}

func (u *ScheduleHandler) DeleteSchedule(ctx *gin.Context) {
	id := ctx.Param("id")
	err := u.uc.DeleteSchedule(ctx, id)
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

func (u *ScheduleHandler) UpdateSchedule(ctx *gin.Context) {
	id := ctx.Param("id")
	var j json.ScheduleJson
	if err := ctx.BindJSON(&j); err != nil {
		ctx.JSON(
			http.StatusBadRequest,
			gin.H{"error": err.Error()},
		)
		return
	}
	Schedule, err := u.uc.UpdateSchedule(ctx, json.ScheduleJsonToEntity(&j), id)
	if err != nil {
		ctx.JSON(
			http.StatusBadRequest,
			gin.H{"error": err.Error()},
		)
		return
	}
	Schedulejson := json.ScheduleEntityToJson(Schedule)
	ctx.JSON(
		http.StatusCreated,
		gin.H{"data": Schedulejson},
	)
}
