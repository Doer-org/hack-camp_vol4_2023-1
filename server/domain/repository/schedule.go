package repository

import(
	"context"

	"github.com/Doer-org/hack-camp_vol4_2023-1/domain/entity"
)

type IScheduleRepository interface{
	GetSchedulesByUserId(ctx context.Context, id string) (entity.Schedules, error)
	CreateSchedule(ctx context.Context, schedule *entity.Schedule) (*entity.Schedule, error)
	UpdateSchedule(ctx context.Context, schedule *entity.Schedule) (*entity.Schedule, error)
	DeleteSchedule(ctx context.Context, id string) (*entity.Schedules, error)
}