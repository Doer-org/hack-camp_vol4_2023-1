package entity

type Matching struct {
	FriendId    string
	FriendName  string
	FriendImage string
}

type Matchings []*Matching

type MatchingFriendId struct {
	FriendId string
}

type MatchingFriendsId []*MatchingFriendId

type MatchingHangout struct {
	Name string
}

type MatchingHangouts []*MatchingHangout

type MatchingSchedule struct {
	Date string
}

type MatchingSchedules []*MatchingSchedule
