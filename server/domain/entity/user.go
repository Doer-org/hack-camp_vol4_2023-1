package entity

type User struct {
	Id          string
	Name        string
	Description string
}

type Users []*User
