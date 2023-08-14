package dto

import "github.com/Doer-org/hack-camp_vol4_2023-1/internal/domain/entity"

type ScheduleDto struct {
	Id      string `db:"id"`
	User_id string `db:"user_id"`
	Date    string `db:"date"`
}

type SchedulesDtos []ScheduleDto

func ScheduleDtoToEntity(dto *ScheduleDto) *entity.Schedule {
	return &entity.Schedule{
		Id:      dto.Id,
		User_id: dto.User_id,
		Date:    dto.Date,
	}
}

func ScheduleEntityToDto(u *entity.Schedule) ScheduleDto {
	return ScheduleDto{
		Id:      u.Id,
		User_id: u.User_id,
		Date:    u.Date,
	}
}

func SchedulesDtosToEntity(dtos SchedulesDtos) entity.Schedules {
	var Schedules entity.Schedules
	for _, dto := range dtos {
		Schedule := ScheduleDtoToEntity(&dto)
		Schedules = append(Schedules, Schedule)
	}
	return Schedules
}
