package repository

import (
	"context"

	"github.com/Doer-org/hack-camp_vol4_2023-1/internal/domain/entity"
	"github.com/Doer-org/hack-camp_vol4_2023-1/internal/domain/repository"
	"github.com/Doer-org/hack-camp_vol4_2023-1/internal/infrastructure/database"
	d "github.com/Doer-org/hack-camp_vol4_2023-1/internal/infrastructure/repository/dto"
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

func (ur *UserRepository) CreateUser(ctx context.Context, user *entity.User) (*entity.User, error) {
	query := `INSERT INTO user (id, name, description, image) VALUES (:id, :name, :description, :image);`
	dto := d.UserEntityToDto(user)
	_, err := ur.conn.DB.NamedExecContext(ctx, query, dto)
	if err != nil {
		return nil, err
	}
	return d.UserDtoToEntity(&dto), nil
}

func (ur *UserRepository) GetUserById(ctx context.Context, id string) (*entity.User, error) {
	query := `SELECT * FROM user WHERE id = ?;`
	var dto d.UserDto
	err := ur.conn.DB.GetContext(ctx, &dto, query, id)
	if err != nil {
		return nil, err
	}
	return d.UserDtoToEntity(&dto), nil
}

func (ur *UserRepository) UpdateUser(ctx context.Context, user *entity.User, id string) (*entity.User, error) {
	query := `UPDATE user SET name = :name, description = :description WHERE id = :id;`
	dto := d.UserEntityToDto(user)
	dto.Id = id
	_, err := ur.conn.DB.NamedExecContext(ctx, query, &dto)
	if err != nil {
		return nil, err
	}
	return d.UserDtoToEntity(&dto), nil

}
