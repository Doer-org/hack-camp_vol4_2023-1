package entity

type Hangout struct {
	Id      string
	User_id string
	Name    string
}

type Hangouts []*Hangout
