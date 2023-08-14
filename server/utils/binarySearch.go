package utils

import "github.com/Doer-org/hack-camp_vol4_2023-1/internal/domain/entity"

func BinarySearch(key string, array entity.Matchings) string {
	left, right := 0, len(array)-1

	for left <= right {
		mid := left + (right-left)/2
		if array[mid].FriendId == key {
			return array[mid].FriendId
		} else if array[mid].FriendId < key {
			left = mid + 1
		} else {
			right = mid - 1
		}
	}
	return ""
}
