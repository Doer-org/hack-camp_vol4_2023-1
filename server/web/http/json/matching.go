package json

import "github.com/Doer-org/hack-camp_vol4_2023-1/internal/domain/entity"

type MatchingJson struct {
	FriendId    string `json:"friend_id"`
	FriendName  string `json:"friend_name"`
	FriendImage string `json:"friend_image"`
}

type MatchingsJson []MatchingJson

func MatchingEntityToJson(c *entity.Matching) *MatchingJson {
	return &MatchingJson{
		FriendId: c.FriendId,
		FriendName: c.FriendName,
		FriendImage: c.FriendImage,
	}
}

func MatchingsEntityToJson(c entity.Matchings) *MatchingsJson {
	var MatchingsJson MatchingsJson
	for _, matching := range c {
		MatchingsJson = append(MatchingsJson, *MatchingEntityToJson(matching))
	}
	return &MatchingsJson
}
