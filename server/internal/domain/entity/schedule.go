package entity

type Schedule struct {
	Id      string
	User_id string
	Date    string
}

type Schedules []*Schedule
