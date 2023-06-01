package entity

type User struct {
	Id          string
	Name        string
	Description string
	Firebase_id string
}

type Users []*User
