package entity

type User struct {
	Id          string
	Name        string
	Description string
	Image       string
}

type Users []*User
