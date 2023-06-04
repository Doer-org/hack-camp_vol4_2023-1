package repository

import (
	"context"

	"github.com/Doer-org/hack-camp_vol4_2023-1/domain/entity"
)

type IUserRepository interface {
	CreateUser(ctx context.Context, user *entity.User) (*entity.User, error)
	UpdateUser(ctx context.Context, user *entity.User) (*entity.User, error)
	GetUserById(ctx context.Context, id string) (*entity.User, error)
}
