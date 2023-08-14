package usecase

import (
	"context"
	"fmt"

	"github.com/Doer-org/hack-camp_vol4_2023-1/internal/domain/entity"
	"github.com/Doer-org/hack-camp_vol4_2023-1/internal/domain/repository"
	"github.com/Doer-org/hack-camp_vol4_2023-1/utils"
)

var _ IUserUsecase = &UserUsecase{}

type UserUsecase struct {
	repo repository.IUserRepository
}

type IUserUsecase interface {
	CreateUser(ctx context.Context, user *entity.User) (*entity.User, error)
	UpdateUser(ctx context.Context, user *entity.User, id string) (*entity.User, error)
	GetUserById(ctx context.Context, id string) (*entity.User, error)
}

func NewUserUsecase(repo repository.IUserRepository) IUserUsecase {
	return &UserUsecase{
		repo: repo,
	}
}

func (uu *UserUsecase) CreateUser(ctx context.Context, user *entity.User) (*entity.User, error) {
	if user.Name == "" {
		return nil, fmt.Errorf("user name empty")
	}
	user.Id = utils.GetUlid()

	resuser, err := uu.repo.CreateUser(ctx, user)
	return resuser, err
}

func (uu *UserUsecase) UpdateUser(ctx context.Context, user *entity.User, id string) (*entity.User, error) {
	if user.Name == "" {
		return nil, fmt.Errorf("user name empty")
	}
	if user.Id == "" {
		return nil, fmt.Errorf("user id empty")
	}

	if id == "" {
		return nil, fmt.Errorf("id is empty")
	}

	resuser, err := uu.repo.UpdateUser(ctx, user, id)
	return resuser, err
}

func (uu *UserUsecase) GetUserById(ctx context.Context, id string) (*entity.User, error) {
	if id == "" {
		return nil, fmt.Errorf("id empty")
	}

	user, err := uu.repo.GetUserById(ctx, id)
	return user, err
}
