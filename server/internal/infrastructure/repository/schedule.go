package repository

import (
	"context"
	"github.com/Doer-org/hack-camp_vol4_2023-1/internal/domain/entity"
	"github.com/Doer-org/hack-camp_vol4_2023-1/internal/domain/repository"
	"github.com/Doer-org/hack-camp_vol4_2023-1/internal/infrastructure/database"
)

var _ repository.IScheduleRepository = &ScheduleRepository{}

type ScheduleRepository struct {
	conn *database.Conn
}

func NewScheduleRepository(conn *database.Conn) repository.IScheduleRepository {
	return &ScheduleRepository{
		conn: conn,
	}
}

// comment: friend.goを参照にして実装してください。
// comment: 実装後はコメントを全て消してください。

// CreateSchedule implements repository.IScheduleRepository.
func (*ScheduleRepository) CreateSchedule(ctx context.Context, schedule *entity.Schedule) (*entity.Schedule, error) {
	panic("unimplemented")
}

// DeleteSchedule implements repository.IScheduleRepository.
func (*ScheduleRepository) DeleteSchedule(ctx context.Context, id string) error {
	panic("unimplemented")
}

// GetSchedulesByUserId implements repository.IScheduleRepository.
func (*ScheduleRepository) GetSchedulesByUserId(ctx context.Context, id string) (entity.Schedules, error) {
	panic("unimplemented")
}

// UpdateSchedule implements repository.IScheduleRepository.
func (*ScheduleRepository) UpdateSchedule(ctx context.Context, schedule *entity.Schedule, id string) (*entity.Schedule, error) {
	panic("unimplemented")
}

