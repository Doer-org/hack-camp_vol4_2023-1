package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.
// Code generated by github.com/99designs/gqlgen version v0.17.31

import (
	"context"

	"github.com/Doer-org/hack-camp_vol4_2023-1/graph/database"
	"github.com/Doer-org/hack-camp_vol4_2023-1/graph/model"
	"github.com/Doer-org/hack-camp_vol4_2023-1/utils"
)

// CreateUser is the resolver for the createUser field.
func (r *mutationResolver) CreateUser(ctx context.Context, input model.CreateUserInput) (*model.User, error) {
	db := database.DB()
	id := utils.GetUlid()
	user := model.User{
		ID:          id,
		Name:        input.Name,
		Description: input.Description,
		FirebaseID:  input.FirebaseID,
	}

	if err := db.Create(&user).Error; err != nil {
		return nil, err
	}

	return &user, nil
}

// UpdateUser is the resolver for the updateUser field.
func (r *mutationResolver) UpdateUser(ctx context.Context, input model.UpdateUserInput) (*model.User, error) {
	db := database.DB()
	user := model.User{
		ID:          input.ID,
		Name:        input.Name,
		Description: input.Description,
		FirebaseID:  input.FirebaseID,
	}

	if err := db.Save(&user).Error; err != nil {
		return nil, err
	}

	return &user, nil
}

// CreateHangout is the resolver for the createHangout field.
func (r *mutationResolver) CreateHangout(ctx context.Context, input model.CreateHangoutInput) (*model.Hangout, error) {
	db := database.DB()
	id := utils.GetUlid()
	hangout := model.Hangout{
		ID:     id,
		UserID: input.UserID,
		Name:   input.Name,
	}

	if err := db.Create(&hangout).Error; err != nil {
		return nil, err
	}

	return &hangout, nil
}

// UpdateHangout is the resolver for the updateHangout field.
func (r *mutationResolver) UpdateHangout(ctx context.Context, input model.UpdateHangoutInput) (*model.Hangout, error) {
	db := database.DB()
	hangout := model.Hangout{
		ID:     input.ID,
		UserID: input.UserID,
		Name:   input.Name,
	}

	if err := db.Save(&hangout).Error; err != nil {
		return nil, err
	}

	return &hangout, nil
}

// DeleteHangout is the resolver for the deleteHangout field.
func (r *mutationResolver) DeleteHangout(ctx context.Context, input model.DeleteHangoutInput) (*model.Hangout, error) {
	db := database.DB()
	hangout := model.Hangout{
		ID: input.ID,
	}

	if err := db.Delete(&hangout).Error; err != nil {
		return nil, err
	}

	return &hangout, nil
}

// CreateSchedule is the resolver for the createSchedule field.
func (r *mutationResolver) CreateSchedule(ctx context.Context, input model.CreateScheduleInput) (*model.Schedule, error) {
	db := database.DB()
	id := utils.GetUlid()
	schedule := model.Schedule{
		ID:     id,
		UserID: input.UserID,
		Date:   input.Date,
	}

	if err := db.Create(&schedule).Error; err != nil {
		return nil, err
	}

	return &schedule, nil
}

// UpdateSchedule is the resolver for the updateSchedule field.
func (r *mutationResolver) UpdateSchedule(ctx context.Context, input model.UpdateScheduleInput) (*model.Schedule, error) {
	db := database.DB()
	schedule := model.Schedule{
		ID:     input.ID,
		UserID: input.UserID,
		Date:   input.Date,
	}

	if err := db.Save(&schedule).Error; err != nil {
		return nil, err
	}

	return &schedule, nil
}

// DeleteSchedule is the resolver for the deleteSchedule field.
func (r *mutationResolver) DeleteSchedule(ctx context.Context, input model.DeleteScheduleInput) (*model.Schedule, error) {
	db := database.DB()
	schedule := model.Schedule{
		ID: input.ID,
	}

	if err := db.Delete(&schedule).Error; err != nil {
		return nil, err
	}

	return &schedule, nil
}

// CreateFriend is the resolver for the createFriend field.
func (r *mutationResolver) CreateFriend(ctx context.Context, input *model.CreateFriendInput) (*model.Friend, error) {
	db := database.DB()
	friend := model.Friend{
		UserID:   input.UserID,
		FriendID: input.FriendID,
	}

	if err := db.Create(&friend).Error; err != nil {
		return nil, err
	}

	return &friend, nil
}

// UpdateFriendAccept is the resolver for the updateFriendAccept field.
func (r *mutationResolver) UpdateFriendAccept(ctx context.Context, input *model.UpdateFriendAcceptInput) (*model.Friend, error) {
	db := database.DB()
	friend := model.Friend{
		ID:     input.ID,
		Accept: input.Accept,
	}

	if err := db.Save(&friend).Error; err != nil {
		return nil, err
	}

	return &friend, nil
}

// DeleteFriend is the resolver for the deleteFriend field.
func (r *mutationResolver) DeleteFriend(ctx context.Context, input *model.DeleteFriendInput) (*model.Friend, error) {
	db := database.DB()
	friend := model.Friend{
		ID: input.ID,
	}

	if err := db.Create(&friend).Error; err != nil {
		return nil, err
	}

	return &friend, nil
}

// GetUserByID is the resolver for the getUserById field.
func (r *queryResolver) GetUserByID(ctx context.Context, id string) (*model.User, error) {
	db := database.DB()
	user := model.User{}

	if err := db.Where("id = ?", id).Find(&user).Error; err != nil {
		return nil, err
	}

	return &user, nil
}

// GetHangoutsByUserID is the resolver for the getHangoutsByUserId field.
func (r *queryResolver) GetHangoutsByUserID(ctx context.Context, userID string) ([]*model.Hangout, error) {
	db := database.DB()
	hangouts := []*model.Hangout{}

	if err := db.Where("user_id = ?", userID).Find(&hangouts).Error; err != nil {
		return nil, err
	}

	return hangouts, nil
}

// GetSchedulesByUserID is the resolver for the getSchedulesByUserId field.
func (r *queryResolver) GetSchedulesByUserID(ctx context.Context, userID string) ([]*model.Schedule, error) {
	db := database.DB()
	schedules := []*model.Schedule{}

	if err := db.Where("user_id = ?", userID).Find(&schedules).Error; err != nil {
		return nil, err
	}

	return schedules, nil
}

// GetFriendsByUserID is the resolver for the getFriendsByUserId field.
func (r *queryResolver) GetFriendsByUserID(ctx context.Context, userID string) ([]*model.Friend, error) {
	db := database.DB()
	friends := []*model.Friend{}

	if err := db.Where("user_id = ?", userID).Find(&friends).Error; err != nil {
		return nil, err
	}

	return friends, nil
}

// Mutation returns MutationResolver implementation.
func (r *Resolver) Mutation() MutationResolver { return &mutationResolver{r} }

// Query returns QueryResolver implementation.
func (r *Resolver) Query() QueryResolver { return &queryResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
