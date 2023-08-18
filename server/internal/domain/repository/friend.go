package repository

import (
	"context"

	"github.com/Doer-org/hack-camp_vol4_2023-1/internal/domain/entity"
)

type IFriendRepository interface {
	GetFriendsByUserID(ctx context.Context, userId string) (entity.FriendsById, error)
	GetRequestsByFriendID(ctx context.Context, friendId string) (entity.FriendsById, error)
	CreateFriend(ctx context.Context, friend *entity.Friend) (*entity.Friend, error)
	DeleteFriend(ctx context.Context, id string) error
	UpdateFriend(ctx context.Context, friend *entity.Friend, id string) (*entity.Friend, error)
}
