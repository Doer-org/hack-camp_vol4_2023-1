package usecase

import (
	"context"
	"fmt"

	"github.com/Doer-org/hack-camp_vol4_2023-1/internal/domain/entity"
	"github.com/Doer-org/hack-camp_vol4_2023-1/internal/domain/repository"
	"github.com/Doer-org/hack-camp_vol4_2023-1/utils"
)

var _ IFriendUsecase = &FriendUsecase{}

type FriendUsecase struct {
	repo repository.IFriendRepository
}

type IFriendUsecase interface {
	GetFriendsByUserID(ctx context.Context, userId string) (entity.FriendsById, error)
	GetRequestsByFriendID(ctx context.Context, userId string) (entity.FriendsById, error)
	CreateFriend(ctx context.Context, friend *entity.Friend) (*entity.Friend, error)
	DeleteFriend(ctx context.Context, id string) error
	UpdateFriend(ctx context.Context, friend *entity.Friend, id string) (*entity.Friend, error)
}

func NewFriendUsecase(repo repository.IFriendRepository) IFriendUsecase {
	return &FriendUsecase{
		repo: repo,
	}
}

func (uu *FriendUsecase) GetFriendsByUserID(ctx context.Context, userId string) (entity.FriendsById, error) {
	if userId == "" {
		return nil, fmt.Errorf("userId is empty")
	}
	friends, err := uu.repo.GetFriendsByUserID(ctx, userId)
	return friends, err
}

func (uu *FriendUsecase) GetRequestsByFriendID(ctx context.Context, friendId string) (entity.FriendsById, error) {
	if friendId == "" {
		return nil, fmt.Errorf("friendId is empty")
	}
	friends, err := uu.repo.GetRequestsByFriendID(ctx, friendId)
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

func (uu *FriendUsecase) UpdateFriend(ctx context.Context, friend *entity.Friend, id string) (*entity.Friend, error) {
	if friend.Id == "" {
		return nil, fmt.Errorf("id from friend is empty")
	}
	if id == "" {
		return nil, fmt.Errorf("id is empty")
	}
	friend.Accept = true
	friend, err := uu.repo.UpdateFriend(ctx, friend, id)
	return friend, err

}

func (uu *FriendUsecase) DeleteFriend(ctx context.Context, id string) error {
	if id == "" {
		return fmt.Errorf("id is empty")
	}
	err := uu.repo.DeleteFriend(ctx, id)
	return err
}
