package repository

import (
	"context"

	"github.com/Doer-org/hack-camp_vol4_2023-1/internal/domain/entity"
	"github.com/Doer-org/hack-camp_vol4_2023-1/internal/domain/repository"
	"github.com/Doer-org/hack-camp_vol4_2023-1/internal/infrastructure/database"
	d "github.com/Doer-org/hack-camp_vol4_2023-1/internal/infrastructure/repository/dto"
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

func (ur *ScheduleRepository) CreateSchedule(ctx context.Context, schedule *entity.Schedule) (*entity.Schedule, error) {
	query := `INSERT INTO schedule (id, user_id, date) VALUES (:id, :user_id, :date);`
	dto := d.ScheduleEntityToDto(schedule)
	_, err := ur.conn.DB.NamedExecContext(ctx, query, dto)
	if err != nil {
		return nil, err
	}
	return d.ScheduleDtoToEntity(&dto), nil
}

func (ur *ScheduleRepository) DeleteSchedule(ctx context.Context, id string) error {
	query := `DELETE FROM schedule WHERE id = ?;`
	_, err := ur.conn.DB.ExecContext(ctx, query, id)
	if err != nil {
		return err
	}
	return nil
}

func (ur *ScheduleRepository) GetSchedulesByUserId(ctx context.Context, id string) (entity.Schedules, error) {
	query := `SELECT * FROM schedule WHERE user_id = ?`
	var dtos d.SchedulesDtos
	err := ur.conn.DB.SelectContext(ctx, &dtos, query, id)
	if err != nil {
		return nil, err
	}
	return d.SchedulesDtosToEntity(dtos), nil
}

func (ur *ScheduleRepository) UpdateSchedule(ctx context.Context, schedule *entity.Schedule, id string) (*entity.Schedule, error) {
	query := `UPDATE schedule SET date = :date WHERE id = :id`
	dto := d.ScheduleEntityToDto(schedule)
	dto.Id = id
	_, err := ur.conn.DB.NamedExecContext(ctx, query, &dto)
	if err != nil {
		return nil, err
	}
	return d.ScheduleDtoToEntity(&dto), nil
}
