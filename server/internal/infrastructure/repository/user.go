package repository

import (
	"context"
	"github.com/Doer-org/hack-camp_vol4_2023-1/internal/domain/entity"
	"github.com/Doer-org/hack-camp_vol4_2023-1/internal/domain/repository"
	"github.com/Doer-org/hack-camp_vol4_2023-1/internal/infrastructure/database"
)

var _ repository.IUserRepository = &UserRepository{}

type UserRepository struct {
	conn *database.Conn
}

func NewUserRepository(conn *database.Conn) repository.IUserRepository {
	return &UserRepository{
		conn: conn,
	}
}

// comment: friend.goを参照にしながら実装してください
// comment: 実装が終わったらコメントは全て消しておいてください。

// CreateUser implements repository.IUserRepository.
func (*UserRepository) CreateUser(ctx context.Context, user *entity.User) (*entity.User, error) {
	panic("unimplemented")
}

// GetUserById implements repository.IUserRepository.
func (*UserRepository) GetUserById(ctx context.Context, id string) (*entity.User, error) {
	panic("unimplemented")
}

// UpdateUser implements repository.IUserRepository.
func (*UserRepository) UpdateUser(ctx context.Context, user *entity.User, id string) (*entity.User, error) {
	panic("unimplemented")
}

