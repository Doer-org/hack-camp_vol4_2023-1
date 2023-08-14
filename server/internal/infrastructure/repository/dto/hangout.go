package dto

import "github.com/Doer-org/hack-camp_vol4_2023-1/internal/domain/entity"

type HangoutDto struct {
	Id      string `db:"id"`
	User_id string `db:"user_id"`
	Name    string `db:"name"`
}

type HangoutsDtos []HangoutDto

func HangoutDtoToEntity(dto *HangoutDto) *entity.Hangout {
	return &entity.Hangout{
		Id:      dto.Id,
		User_id: dto.User_id,
		Name:    dto.Name,
	}
}

func HangoutEntityToDto(u *entity.Hangout) HangoutDto {
	return HangoutDto{
		Id:      u.Id,
		User_id: u.User_id,
		Name:    u.Name,
	}
}

func HangoutsDtosToEntity(dtos HangoutsDtos) entity.Hangouts {
	var hangouts entity.Hangouts
	for _, dto := range dtos {
		hangout := HangoutDtoToEntity(&dto)
		hangouts = append(hangouts, hangout)
	}
	return hangouts
}
