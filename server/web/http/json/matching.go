package json

import "github.com/Doer-org/hack-camp_vol4_2023-1/internal/domain/entity"

type MatchingJson struct {
	FriendId string `json:"friend_id"`
}

type MatchingsJson []MatchingJson

func MatchingEntityToJson(c *entity.Matching) *MatchingJson {
	return &MatchingJson{
		FriendId: c.FriendId,
	}
}

func MatchingsEntityToJson(c entity.Matchings) *MatchingsJson {
	var MatchingsJson MatchingsJson
	for _, matching := range c {
		MatchingsJson = append(MatchingsJson, *MatchingEntityToJson(matching))
	}
	return &MatchingsJson
}
