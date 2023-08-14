package json

import "github.com/Doer-org/hack-camp_vol4_2023-1/internal/domain/entity"

type HangoutJson struct {
	Id      string `json:"id"`
	User_id string `json:"user_id"`
	Name    string `json:"name"`
}

type HangoutsJson []HangoutJson

func HangoutEntityToJson(c *entity.Hangout) *HangoutJson {
	return &HangoutJson{
		Id:      c.Id,
		User_id: c.User_id,
		Name:    c.Name,
	}
}

func HangoutsEntityToJson(c entity.Hangouts) *HangoutsJson {
	var HangoutsJson HangoutsJson
	for _, hangout := range c {
		HangoutsJson = append(HangoutsJson, *HangoutEntityToJson(hangout))
	}
	return &HangoutsJson
}

func HangoutJsonToEntity(j *HangoutJson) *entity.Hangout {
	return &entity.Hangout{
		Id:      j.Id,
		User_id: j.User_id,
		Name:    j.Name,
	}
}
