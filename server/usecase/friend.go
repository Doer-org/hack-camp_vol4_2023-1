package usecase

import (
	"context"
	"fmt"

	"github.com/Doer-org/hack-camp_vol4_2023-1/domain/entity"
	"github.com/Doer-org/hack-camp_vol4_2023-1/domain/repository"
	"github.com/Doer-org/hack-camp_vol4_2023-1/utils"
)

var _IFriendUsecase = &FriendUsecase{}

type FriendUsecase struct {
	repo repository.IFriendRepository
}

type IFriendUsecase interface {
	GetFriendsByUserID(ctx context.Context, userId string) (entity.Friends, error)
	CreateFriend(ctx context.Context, friend *entity.Friend) (*entity.Friend, error)
	DeleteFriend(ctx context.Context, userId string) (*entity.Friend, error)
	UpdateFriendAccept(ctx context.Context, friend *entity.Friend, id string) (*entity.Friend, error)
}

func (uu *FriendUsecase) GetFriendsByUserID(ctx context.Context, userId string) (entity.Friends, error) {
	if userId == "" {
		return nil, fmt.Errorf("userId is empty")
	}
	friends, err := uu.repo.GetFriendsByUserID(ctx, userId)
	return friends, err
}

func (uu *FriendUsecase) CreateFriend(ctx context.Context, friend *entity.Friend) (*entity.Friend, error) {
	if friend.User_id == "" {
		return nil, fmt.Errorf("userId is empty")
	}
	if friend.Friend_id == "" {
		return nil, fmt.Errorf("friendId is empty")
	}
	friend.Id = utils.GetUlid()
	friend, err := uu.repo.CreateFriend(ctx, friend)
	return friend, err
}

func (uu *FriendUsecase) UpdateFriendAccept(ctx context.Context, friend *entity.Friend, id string) (*entity.Friend, error) {
	if friend.Id == "" {
		return nil, fmt.Errorf("id is empty")
	}
	friend.Accept = true
	friend, err := uu.repo.UpdateFriendAccept(ctx, *friend, id)
	return friend, err
	
}


func (uu *FriendUsecase) DeleteFriend(ctx context.Context, id string) (*entity.Friend, error) {
	if id == "" {
		return nil, fmt.Errorf("id is empty")
	}
	friend, err := uu.repo.DeleteFriend(ctx, id)
	return friend, err
}