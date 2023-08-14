package repository

import (
	"context"
	"sort"

	"github.com/Doer-org/hack-camp_vol4_2023-1/internal/domain/entity"
	"github.com/Doer-org/hack-camp_vol4_2023-1/internal/domain/repository"
	"github.com/Doer-org/hack-camp_vol4_2023-1/internal/infrastructure/database"
	d "github.com/Doer-org/hack-camp_vol4_2023-1/internal/infrastructure/repository/dto"
	"github.com/Doer-org/hack-camp_vol4_2023-1/utils"
)

var _ repository.IMatchingRepository = &MatchingRepository{}

type MatchingRepository struct {
	conn *database.Conn
}

func NewMatchingRepository(conn *database.Conn) repository.IMatchingRepository {
	return &MatchingRepository{
		conn: conn,
	}
}

func (mr *MatchingRepository) GetMatchingsByUserId(ctx context.Context, user_id string) (entity.Matchings, error) {
	friend_query := `SELECT friend_id FROM friend WHERE user_id = ?`
	hangout_query := `SELECT name FROM hangout WHERE user_id = ?`
	schedule_query := `SELECT date FROM schedule WHERE user_id = ?`
	hangout_user_query := `SELECT user_id FROM hangout WHERE name = ?`
	schedule_user_query := `SELECT user_id FROM schedule WHERE date = ?`

	var friend_dtos d.MatchingFriendDtos
	var hangout_dtos d.MatchingHangoutsDtos
	var schedule_dtos d.MatchingSchedulesDtos

	friend_err := mr.conn.DB.SelectContext(ctx, &friend_dtos, friend_query, user_id)
	if friend_err != nil {
		return nil, friend_err
	}
	user_friends := d.MatchingFriendsDtosToEntity(friend_dtos)

	hangout_err := mr.conn.DB.SelectContext(ctx, &hangout_dtos, hangout_query, user_id)
	if hangout_err != nil {
		return nil, hangout_err
	}
	hangouts := d.MatchingHangoutsDtosToEntity(hangout_dtos)

	schedule_err := mr.conn.DB.SelectContext(ctx, &schedule_dtos, schedule_query, user_id)
	if schedule_err != nil {
		return nil, schedule_err
	}
	schedules := d.MatchingSchedulesDtosToEntity(schedule_dtos)

	var hangouts_friends entity.Matchings
	for _, hangout := range hangouts {
		var dtos d.MatchingHangoutUserDtos
		err := mr.conn.DB.SelectContext(ctx, &dtos, hangout_user_query, hangout.Name)
		if err != nil {
			return nil, err
		}
		hangout_friends := d.MatchingHangoutUserDtosToEntity(dtos)
		hangouts_friends = append(hangouts_friends, hangout_friends...)
	}

	var schedules_friends entity.Matchings
	for _, schedule := range schedules {
		var dtos d.MatchingScheduleUserDtos
		err := mr.conn.DB.SelectContext(ctx, &dtos, schedule_user_query, schedule.Date)
		if err != nil {
			return nil, err
		}
		schedule_friends := d.MatchingScheduleUserDtosToEntity(dtos)
		schedules_friends = append(schedules_friends, schedule_friends...)
	}

	sort.Slice(hangouts_friends, func(i, j int) bool {
		return hangouts_friends[i].FriendId < hangouts_friends[j].FriendId
	})
	sort.Slice(schedules_friends, func(i, j int) bool {
		return schedules_friends[i].FriendId < schedules_friends[j].FriendId
	})

	var friends entity.Matchings
	for _, friend := range user_friends {
		hangout_check := utils.BinarySearch(friend.FriendId, hangouts_friends)
		schedule_check := utils.BinarySearch(friend.FriendId, schedules_friends)
		if hangout_check != "" && schedule_check != "" {
			friends = append(friends, friend)
		}
	}
	return friends, nil
}
