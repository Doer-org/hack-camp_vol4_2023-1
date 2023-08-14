package json

import "github.com/Doer-org/hack-camp_vol4_2023-1/internal/domain/entity"

type ScheduleJson struct {
	Id      string `json:"id"`
	User_id string `json:"user_id"`
	Date    string `json:"date"`
}

type SchedulesJson []ScheduleJson

func ScheduleEntityToJson(c *entity.Schedule) *ScheduleJson {
	return &ScheduleJson{
		Id:      c.Id,
		User_id: c.User_id,
		Date:    c.Date,
	}
}

func SchedulesEntityToJson(c entity.Schedules) *SchedulesJson {
	var SchedulesJson SchedulesJson
	for _, Schedule := range c {
		SchedulesJson = append(SchedulesJson, *ScheduleEntityToJson(Schedule))
	}
	return &SchedulesJson
}

func ScheduleJsonToEntity(j *ScheduleJson) *entity.Schedule {
	return &entity.Schedule{
		Id:      j.Id,
		User_id: j.User_id,
		Date:    j.Date,
	}
}
