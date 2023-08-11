package repository

import (
	"context"

	"github.com/Doer-org/hack-camp_vol4_2023-1/internal/domain/entity"
)

type IHangoutRepository interface {
	GetHangoutsByUserId(ctx context.Context, id string) (entity.Hangouts, error)
	CreateHangout(ctx context.Context, hangout *entity.Hangout) (*entity.Hangout, error)
	UpdateHangout(ctx context.Context, hangout *entity.Hangout, id string) (*entity.Hangout, error)
	DeleteHangout(ctx context.Context, id string) error
}
