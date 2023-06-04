package repository

import (
	"context"

	"github.com/Doer-org/hack-camp_vol4_2023-1/domain/entity"
)

type IFriendRepository interface {
	GetFriendsByUserID(ctx context.Context, userId string) (entity.Friends, error)
	CreateFriend(ctx context.Context, friend *entity.Friend) (*entity.Friend, error)
	DeleteFriend(ctx context.Context, userId string) (*entity.Friend, error)
	UpdateFriendAccept(ctx context.Context, friend entity.Friend, id string) (*entity.Friend, error)
}