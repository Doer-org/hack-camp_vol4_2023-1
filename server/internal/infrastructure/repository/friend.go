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

func (fr *FriendRepository) CreateFriend(ctx context.Context, friend *entity.Friend) (*entity.Friend, error) {
	query := `INSERT INTO friend (id, user_id, friend_id, accept) VALUES (:id, :user_id, :friend_id, :accept);`
	dto := d.FriendEntityToDto(friend)
	_, err := fr.conn.DB.NamedExecContext(ctx, query, dto)
	if err != nil {
		return nil, err
	}
	return d.FriendDtoToEntity(&dto), nil
}

func (fr *FriendRepository) DeleteFriend(ctx context.Context, id string) error {
	query := `DELETE FROM friend WHERE id = ?;`
	_, err := fr.conn.DB.ExecContext(ctx, query, id)
	if err != nil {
		return err
	}
	return nil
}

func (fr *FriendRepository) GetFriendsByUserID(ctx context.Context, userId string) (entity.FriendsById, error) {
	//query := `SELECT * FROM friend WHERE user_id = ? AND accept = true`
	query := `
	SELECT friend.id, friend.user_id, friend.friend_id, friend.accept, user.name, user.image FROM friend INNER JOIN user ON friend.friend_id = user.id WHERE friend.user_id = ? AND friend.accept = true;
	`
	var dtos d.FriendByIdDtos
	err := fr.conn.DB.SelectContext(ctx, &dtos, query, userId)
	if err != nil {
		return nil, err
	}
	return d.FriendByIdDtosToEntity(dtos), nil
}

func (fr *FriendRepository) GetRequestsByFriendID(ctx context.Context, friendId string) (entity.FriendsById, error) {
	//query := `SELECT * FROM friend WHERE friend_id = ? AND accept = false`
	query := `
	SELECT friend.id, friend.user_id, friend.friend_id, friend.accept, user.name, user.image FROM friend INNER JOIN user ON friend.friend_id = user.id WHERE friend.friend_id = ? AND friend.accept = true;
	`
	var dtos d.FriendByIdDtos
	err := fr.conn.DB.SelectContext(ctx, &dtos, query, friendId)
	if err != nil {
		return nil, err
	}
	return d.FriendByIdDtosToEntity(dtos), nil
}

func (fr *FriendRepository) UpdateFriend(ctx context.Context, friend *entity.Friend, id string) (*entity.Friend, error) {
	query := `UPDATE friend SET accept = :accept WHERE id = :id;`
	dto := d.FriendEntityToDto(friend)
	dto.Id = id
	_, err := fr.conn.DB.NamedExecContext(ctx, query, &dto)
	if err != nil {
		return nil, err
	}
	return d.FriendDtoToEntity(&dto), nil
}
