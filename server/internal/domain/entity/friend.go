package entity

type Friend struct {
	Id        string
	User_id   string
	Friend_id string
	Accept    bool
}

type Friends []*Friend
