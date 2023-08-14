package dto

import "github.com/Doer-org/hack-camp_vol4_2023-1/internal/domain/entity"

type MatchingFriendDto struct {
	FriendId string `db:"friend_id"`
}

type MatchingFriendDtos []MatchingFriendDto

type MatchingHangoutDto struct {
	Name string `db:"name"`
}

type MatchingHangoutsDtos []MatchingHangoutDto

type MatchingScheduleDto struct {
	Date string `db:"date"`
}

type MatchingSchedulesDtos []MatchingScheduleDto

type MatchingHangoutUserDto struct {
	FriendId string `db:"user_id"`
}

type MatchingHangoutUserDtos []MatchingHangoutUserDto

type MatchingScheduleUserDto struct {
	FriendId string `db:"user_id"`
}

type MatchingScheduleUserDtos []MatchingScheduleUserDto

func MatchingFriendDtoToEntity(dto *MatchingFriendDto) *entity.Matching {
	return &entity.Matching{
		FriendId: dto.FriendId,
	}
}

func MatchingFriendsDtosToEntity(dtos MatchingFriendDtos) entity.Matchings {
	var friends entity.Matchings
	for _, dto := range dtos {
		friend := MatchingFriendDtoToEntity(&dto)
		friends = append(friends, friend)
	}
	return friends
}

func MatchingHangoutDtoToEntity(dto *MatchingHangoutDto) *entity.MatchingHangout {
	return &entity.MatchingHangout{
		Name: dto.Name,
	}
}

func MatchingHangoutsDtosToEntity(dtos MatchingHangoutsDtos) entity.MatchingHangouts {
	var hangouts entity.MatchingHangouts
	for _, dto := range dtos {
		hangout := MatchingHangoutDtoToEntity(&dto)
		hangouts = append(hangouts, hangout)
	}
	return hangouts
}

func MatchingScheduleDtoToEntity(dto *MatchingScheduleDto) *entity.MatchingSchedule {
	return &entity.MatchingSchedule{
		Date: dto.Date,
	}
}

func MatchingSchedulesDtosToEntity(dtos MatchingSchedulesDtos) entity.MatchingSchedules {
	var schedules entity.MatchingSchedules
	for _, dto := range dtos {
		schedule := MatchingScheduleDtoToEntity(&dto)
		schedules = append(schedules, schedule)
	}
	return schedules
}

func MatchingHangoutUserDtoToEntity(dto *MatchingHangoutUserDto) *entity.Matching {
	return &entity.Matching{
		FriendId: dto.FriendId,
	}
}

func MatchingHangoutUserDtosToEntity(dtos MatchingHangoutUserDtos) entity.Matchings {
	var hangouts entity.Matchings
	for _, dto := range dtos {
		hangout := MatchingHangoutUserDtoToEntity(&dto)
		hangouts = append(hangouts, hangout)
	}
	return hangouts
}

func MatchingScheduleUserDtoToEntity(dto *MatchingScheduleUserDto) *entity.Matching {
	return &entity.Matching{
		FriendId: dto.FriendId,
	}
}

func MatchingScheduleUserDtosToEntity(dtos MatchingScheduleUserDtos) entity.Matchings {
	var friends entity.Matchings
	for _, dto := range dtos {
		friend := MatchingScheduleUserDtoToEntity(&dto)
		friends = append(friends, friend)
	}
	return friends
}
