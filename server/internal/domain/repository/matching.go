package repository

import (
	"context"

	"github.com/Doer-org/hack-camp_vol4_2023-1/internal/domain/entity"
)

type IMatchingRepository interface {
	GetMatchingsByUserId(ctx context.Context, user_id string) (entity.Matchings, error)
}
