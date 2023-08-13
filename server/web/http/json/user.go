package json

import "github.com/Doer-org/hack-camp_vol4_2023-1/internal/domain/entity"

type UserJson struct {
	Id string `json:"id"`
	Name string `json:"name"`
	Description string `json:"descriptoion"`
	Image string `json:"image"`
}

func UserEntityToJson(u *entity.User) *UserJson {
	return &UserJson{
		Id: u.Id,
		Name: u.Name,
		Description: u.Description,
		Image: u.Image,
	}
}

func UserJsonToEntity(j *UserJson) *entity.User {
	return &entity.User{
		Id: j.Id,
		Name: j.Name,
		Description: j.Description,
		Image: j.Image,
	}
}