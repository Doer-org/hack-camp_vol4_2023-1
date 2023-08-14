package dto

import "github.com/Doer-org/hack-camp_vol4_2023-1/internal/domain/entity"

type UserDto struct {
	Id          string `db:"id"`
	Name        string `db:"name"`
	Description string `db:"description"`
	Image       string `db:"image"`
}

func UserDtoToEntity(dto *UserDto) *entity.User {
	return &entity.User{
		Id:          dto.Id,
		Name:        dto.Name,
		Description: dto.Description,
		Image:       dto.Image,
	}
}

func UserEntityToDto(u *entity.User) UserDto {
	return UserDto{
		Id:          u.Id,
		Name:        u.Name,
		Description: u.Description,
		Image:       u.Image,
	}
}
