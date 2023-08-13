package json

import "github.com/Doer-org/hack-camp_vol4_2023-1/internal/domain/entity"

type FriendJson struct {
	Id        string `json:"id"`
	User_id   string `json:"user_id"`
	Friend_id string `json:"friend_id"`
	Accept    bool   `json:"accept"`
}

type FriendsJson []FriendJson

func FriendEntityToJson(f *entity.Friend) *FriendJson {
	return &FriendJson{
		Id:        f.Id,
		User_id:   f.User_id,
		Friend_id: f.Friend_id,
		Accept:    f.Accept,
	}
}

func FriendsEntityToJson(c entity.Friends) *FriendsJson {
	var FriendsJson FriendsJson
	for _, friend := range c {
		FriendsJson = append(FriendsJson, *FriendEntityToJson(friend))
	}
	return &FriendsJson
}

func FriendJsonToEntity(j *FriendJson) *entity.Friend {
	return &entity.Friend{
		Id:        j.Id,
		User_id:   j.User_id,
		Friend_id: j.Friend_id,
		Accept:    j.Accept,
	}
}
