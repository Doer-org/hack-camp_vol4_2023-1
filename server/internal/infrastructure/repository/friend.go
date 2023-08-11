package repository

import (
	"context"

	"github.com/Doer-org/hack-camp_vol4_2023-1/internal/domain/entity"
	"github.com/Doer-org/hack-camp_vol4_2023-1/internal/domain/repository"
	"github.com/Doer-org/hack-camp_vol4_2023-1/internal/infrastructure/database"
	d "github.com/Doer-org/hack-camp_vol4_2023-1/internal/infrastructure/repository/dto"
)

var _ repository.IFriendRepository = &FriendRepository{}

type FriendRepository struct {
	conn *database.Conn
}

func NewFriendRepository(conn *database.Conn) repository.IFriendRepository {
	return &FriendRepository{
		conn: conn,
	}
}

func (ur *FriendRepository) CreateFriend(ctx context.Context, friend *entity.Friend) (*entity.Friend, error) {
	query := `INSERT INTO friend (id, user_id, friend_id, accept) VALUES (:id, :user_id, :friend_id, :accept);`
	dto := d.FriendEntityToDto(friend)
	_, err := ur.conn.DB.NamedExecContext(ctx, query, dto)
	if err != nil {
		return nil, err
	}
	return d.FriendDtoToEntity(&dto), nil
}

func (ur *FriendRepository) DeleteFriend(ctx context.Context, id string) error {
	query := `DELETE FROM friend WHERE id = ?;`
	_, err := ur.conn.DB.ExecContext(ctx, query, id)
	if err != nil {
		return err
	}
	return nil
}

func (ur *FriendRepository) GetFriendsByUserID(ctx context.Context, userId string) (entity.Friends, error) {
	query := `SELECT * FROM friend WHERE user_id = ? AND accept = true`
	var dtos d.FriendsDtos
	err := ur.conn.DB.SelectContext(ctx, &dtos, query, userId)
	if err != nil {
		return nil, err
	}
	return d.FriendsDtosToEntity(dtos), nil
}

func (ur *FriendRepository) UpdateFriend(ctx context.Context, friend *entity.Friend, id string) (*entity.Friend, error) {
	query := `UPDATE friend SET accept = :accept WHERE id = :id`
	dto := d.FriendEntityToDto(friend)
	dto.Id = id
	_, err := ur.conn.DB.NamedExecContext(ctx, query, &dto)
	if err != nil {
		return nil, err
	}
	return d.FriendDtoToEntity(&dto), nil
}
