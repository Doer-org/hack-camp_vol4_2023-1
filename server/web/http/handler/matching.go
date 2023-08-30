package handler

import (
	"net/http"

	"github.com/Doer-org/hack-camp_vol4_2023-1/internal/usecase"
	"github.com/Doer-org/hack-camp_vol4_2023-1/web/http/json"
	"github.com/gin-gonic/gin"
)

type MatchingHandler struct {
	uc usecase.IMatchingUsecase
}

func NewMatchingHandler(uc usecase.IMatchingUsecase) *MatchingHandler {
	return &MatchingHandler{
		uc: uc,
	}
}

func (u *MatchingHandler) GetMatchingsByUserId(ctx *gin.Context) {
	user_id := ctx.Param("user_id")
	matchings, err := u.uc.GetMatchingsByUserId(ctx, user_id)
	if err != nil {
		ctx.JSON(
			http.StatusBadRequest,
			gin.H{"error": err.Error()},
		)
		return
	}
	matchingsjson := json.MatchingsEntityToJson(matchings)
	ctx.JSON(
		http.StatusCreated,
		gin.H{"data": matchingsjson},
	)
}
