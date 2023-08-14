package usecase

import (
	"context"
	"fmt"

	"github.com/Doer-org/hack-camp_vol4_2023-1/internal/domain/entity"
	"github.com/Doer-org/hack-camp_vol4_2023-1/internal/domain/repository"
	"github.com/Doer-org/hack-camp_vol4_2023-1/utils"
)

var _ IHangoutUsecase = &HangoutUsecase{}

type HangoutUsecase struct {
	repo repository.IHangoutRepository
}

type IHangoutUsecase interface {
	GetHangoutsByUserID(ctx context.Context, id string) (entity.Hangouts, error)
	CreateHangout(ctx context.Context, hangout *entity.Hangout) (*entity.Hangout, error)
	UpdateHangout(ctx context.Context, hangout *entity.Hangout, id string) (*entity.Hangout, error)
	DeleteHangout(ctx context.Context, id string) error
}

func NewHangoutUsecase(repo repository.IHangoutRepository) IHangoutUsecase {
	return &HangoutUsecase{
		repo: repo,
	}
}

func (uu *HangoutUsecase) GetHangoutsByUserID(ctx context.Context, user_id string) (entity.Hangouts, error) {
	if user_id == "" {
		return nil, fmt.Errorf("user_id is empty")
	}
	user, err := uu.repo.GetHangoutsByUserId(ctx, user_id)
	return user, err
}

func (uu *HangoutUsecase) CreateHangout(ctx context.Context, hangout *entity.Hangout) (*entity.Hangout, error) {
	if hangout.User_id == "" {
		return nil, fmt.Errorf("user_id is empty")
	}
	if hangout.Name == "" {
		return nil, fmt.Errorf("name is empty")
	}
	hangout.Id = utils.GetUlid()
	hangout, err := uu.repo.CreateHangout(ctx, hangout)
	return hangout, err
}

func (uu *HangoutUsecase) UpdateHangout(ctx context.Context, hangout *entity.Hangout, id string) (*entity.Hangout, error) {
	if hangout.User_id == "" {
		return nil, fmt.Errorf("user_id is empty")
	}
	if hangout.Name == "" {
		return nil, fmt.Errorf("name is empty")
	}
	if id == "" {
		return nil, fmt.Errorf("id is empry")
	}
	hangout, err := uu.repo.UpdateHangout(ctx, hangout, id)
	return hangout, err
}

func (uu *HangoutUsecase) DeleteHangout(ctx context.Context, id string) error {
	if id == "" {
		return fmt.Errorf("id is empty")
	}
	err := uu.repo.DeleteHangout(ctx, id)
	return err
}
