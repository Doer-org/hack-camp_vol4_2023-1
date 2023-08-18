package repository

import (
	"context"

	"github.com/Doer-org/hack-camp_vol4_2023-1/internal/domain/entity"
	"github.com/Doer-org/hack-camp_vol4_2023-1/internal/domain/repository"
	"github.com/Doer-org/hack-camp_vol4_2023-1/internal/infrastructure/database"
	d "github.com/Doer-org/hack-camp_vol4_2023-1/internal/infrastructure/repository/dto"
)

var _ repository.IHangoutRepository = &HangoutReposiroty{}

type HangoutReposiroty struct {
	conn *database.Conn
}

func NewHangoutRepository(conn *database.Conn) repository.IHangoutRepository {
	return &HangoutReposiroty{
		conn: conn,
	}
}

func (ur *HangoutReposiroty) CreateHangout(ctx context.Context, hangout *entity.Hangout) (*entity.Hangout, error) {
	query := `INSERT INTO friend (id, user_id, name) VALUES (:id, :user_id, :name);`
	dto := d.HangoutEntityToDto(hangout)
	_, err := ur.conn.DB.NamedExecContext(ctx, query, dto)
	if err != nil {
		return nil, err
	}
	return d.HangoutDtoToEntity(&dto), nil
}

func (ur *HangoutReposiroty) DeleteHangout(ctx context.Context, id string) error {
	query := `DELETE FROM hangout WHERE id = ?;`
	_, err := ur.conn.DB.ExecContext(ctx, query, id)
	if err != nil {
		return err
	}
	return nil
}

func (ur *HangoutReposiroty) GetHangoutsByUserId(ctx context.Context, id string) (entity.Hangouts, error) {
	query := `SELECT * FROM hangout WHERE id = ?`
	var dtos d.HangoutsDtos
	err := ur.conn.DB.SelectContext(ctx, &dtos, query, id)
	if err != nil {
		return nil, err
	}
	return d.HangoutsDtosToEntity(dtos), nil
}

func (ur *HangoutReposiroty) UpdateHangout(ctx context.Context, hangout *entity.Hangout, id string) (*entity.Hangout, error) {
	query := `UPDATE hangout SET name = :name WHERE id = :id`
	dto := d.HangoutEntityToDto(hangout)
	dto.Id = id
	_, err := ur.conn.DB.NamedExecContext(ctx, query, &dto)
	if err != nil {
		return nil, err
	}
	return d.HangoutDtoToEntity(&dto), nil
}
