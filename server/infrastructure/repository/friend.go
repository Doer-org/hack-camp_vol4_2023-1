package repository

import (
	"context"
	"database/sql"

	"github.com/Doer-org/hack-camp_vol4_2023-1/domain/entity"
	"golang.org/x/xerrors"
)

type Friend struct {
	db *sql.DB
}

type Friends []*Friend

func NewFriend(db *sql.DB) *Friend {
	return &Friend{
		db: db,
	}
}

func (repo *Friends) GetFriendsByUserID(ctx context.Context, userId string) (entity.Friends, error) {
	query := `SELECT "id","name","done" FROM "todos" WHERE "id" = $1 AND "user_id" = $2;`

	var ets entity.Friends
	err := repo.db.QueryRowContext(ctx, query, userID).Scan(&ets.ID, &ets.User_id, &ets.Friend_id, &ets.Accept)
	if err != nil {
		switch err {
		case sql.ErrNoRows:
			return nil, xerrors.Errorf("repo.db.QueryRowContext: %w", ErrNotFound)
		default:
			return nil, xerrors.Errorf("repo.db.QueryRowContext: %v", err)
		}
	}
	return &ets, nil
}

func (repo *Friend) CreateFriend(ctx context.Context, friend *entity.Friend) (*entity.Friend, error) {
	query := `SELECT "id","name","done" FROM "todos" WHERE "id" = $1 AND "user_id" = $2;`

	var et entity.Friend
	err := repo.db.QueryRowContext(ctx, query, friend).Scan(&et.ID, &et.User_id, &et.Friend_id, &et.Accept)
	if err != nil {
		switch err {
		case sql.ErrNoRows:
			return nil, xerrors.Errorf("repo.db.QueryRowContext: %w", ErrNotFound)
		default:
			return nil, xerrors.Errorf("repo.db.QueryRowContext: %v", err)
		}
	}
	return &et, nil
}
