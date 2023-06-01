package usecase

import (
	"context"
	"fmt"

	"github.com/Doer-org/hack-camp_vol4_2023-1/domain/entity"
	"github.com/Doer-org/hack-camp_vol4_2023-1/domain/repository"
)

var _ IScheduleUsecase= &ScheduleUsecase{}

type ScheduleUsecase struct{
	repo repository.IScheduleRepository
}

type IScheduleUsecase interface{
	GetSchedulesByUserId(ctx context.Context, id string) (entity.Schedules, error)
	CreateSchedule(ctx context.Context, schedule *entity.Schedule) (*entity.Schedule, error)
	UpdateSchedule(ctx context.Context, schedule *entity.Schedule) (*entity.Schedule, error)
	DeleteSchedule(ctx context.Context, id string) (*entity.Schedules, error)
}

func (uu *ScheduleUsecase)GetSchedulesByUserId(ctx context.Context, id string)(entity.Schedules, error){
	if id == "" {
		return nil, fmt.Errorf("id is empty")
	}
	schedules, err := uu.repo.GetSchedulesByUserId(ctx, id)
	return schedules, err
}

func (uu *ScheduleUsecase)CreateSchedule(ctx context.Context, schedule *entity.Schedule)(*entity.Schedule, error){
	if schedule.Date == "" {
		return nil, fmt.Errorf("date is empty")
	}

	if schedule.User_id==""{
		return nil, fmt.Errorf("user_id is empty")
	}

	schedule, err:=uu.repo.CreateSchedule(ctx, schedule)
	return schedule,err

}

func (uu *ScheduleUsecase)DeleteSchedule(ctx context.Context, id string) (*entity.Schedules, error){
	if id == "" {
		return nil, fmt.Errorf("id is empty")
	}
	schedule, err:=uu.repo.DeleteSchedule(ctx, id)

	return schedule, err
}

func (uu *ScheduleUsecase)UpdateSchedule(ctx context.Context, schedule *entity.Schedule)(*entity.Schedule, error){
	if schedule.Date == "" {
		return nil, fmt.Errorf("date is empty")
	}

	if schedule.User_id==""{
		return nil, fmt.Errorf("user_id is empty")
	}

	schedule, err:=uu.repo.UpdateSchedule(ctx, schedule)
	return schedule,err
}