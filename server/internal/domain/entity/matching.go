package entity

type Matching struct {
	FriendId string
}

type Matchings []*Matching

type MatchingFriend struct {
	FriendId string
}

type MatchingFriends []*MatchingFriend

type MatchingHangout struct {
	Name string
}

type MatchingHangouts []*MatchingHangout

type MatchingSchedule struct {
	Date string
}

type MatchingSchedules []*MatchingSchedule
