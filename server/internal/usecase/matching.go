package usecase

import (
	"context"
	"fmt"

	"github.com/Doer-org/hack-camp_vol4_2023-1/internal/domain/entity"
	"github.com/Doer-org/hack-camp_vol4_2023-1/internal/domain/repository"
)

var _ IMatchingUsecase = &MatchingUsecase{}

type MatchingUsecase struct {
	repo repository.IMatchingRepository
}

type IMatchingUsecase interface {
	GetMatchingsByUserId(ctx context.Context, user_id string) (entity.Matchings, error)
}

func NewMatchingUsecase(repo repository.IMatchingRepository) IMatchingUsecase {
	return &MatchingUsecase{
		repo: repo,
	}
}

func (mu *MatchingUsecase) GetMatchingsByUserId(ctx context.Context, user_id string) (entity.Matchings, error) {
	if user_id == "" {
		return nil, fmt.Errorf("user_id is empty")
	}
	user, err := mu.repo.GetMatchingsByUserId(ctx, user_id)
	return user, err
}
