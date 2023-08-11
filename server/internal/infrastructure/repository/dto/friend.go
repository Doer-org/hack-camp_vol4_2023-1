package dto

import "github.com/Doer-org/hack-camp_vol4_2023-1/internal/domain/entity"

type FriendDto struct {
	Id        string `db:"id"`
	User_id   string `db:"user_id"`
	Friend_id string `db:"friend_id"`
	Accept    bool   `db:"accept"`
}

type FriendsDtos []FriendDto

func FriendDtoToEntity(dto *FriendDto) *entity.Friend {
	return &entity.Friend{
		Id:        dto.Id,
		User_id:   dto.User_id,
		Friend_id: dto.Friend_id,
		Accept:    dto.Accept,
	}
}

func FriendEntityToDto(u *entity.Friend) FriendDto {
	return FriendDto{
		Id:        u.Id,
		User_id:   u.User_id,
		Friend_id: u.Friend_id,
		Accept:    u.Accept,
	}
}

func FriendsDtosToEntity(dtos FriendsDtos) entity.Friends {
	var friends entity.Friends
	for _, dto := range dtos {
		friend := FriendDtoToEntity(&dto)
		friends = append(friends, friend)
	}
	return friends
}
