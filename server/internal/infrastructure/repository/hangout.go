package repository

import (
	"context"
	"github.com/Doer-org/hack-camp_vol4_2023-1/internal/domain/entity"
	"github.com/Doer-org/hack-camp_vol4_2023-1/internal/domain/repository"
	"github.com/Doer-org/hack-camp_vol4_2023-1/internal/infrastructure/database"
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

// comment: friend.goを参照にして実装してください。
// comment: 実装後はコメントアウトされているのを全て消してください
// CreateHangout implements repository.IHangoutRepository.
func (*HangoutReposiroty) CreateHangout(ctx context.Context, hangout *entity.Hangout) (*entity.Hangout, error) {
	panic("unimplemented")
}

// DeleteHangout implements repository.IHangoutRepository.
func (*HangoutReposiroty) DeleteHangout(ctx context.Context, id string) error {
	panic("unimplemented")
}

// GetHangoutsByUserId implements repository.IHangoutRepository.
func (*HangoutReposiroty) GetHangoutsByUserId(ctx context.Context, id string) (entity.Hangouts, error) {
	panic("unimplemented")
}

// UpdateHangout implements repository.IHangoutRepository.
func (*HangoutReposiroty) UpdateHangout(ctx context.Context, hangout *entity.Hangout, id string) (*entity.Hangout, error) {
	panic("unimplemented")
}

