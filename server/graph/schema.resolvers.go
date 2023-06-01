package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.
// Code generated by github.com/99designs/gqlgen version v0.17.31

import (
	"context"
	"fmt"

	"github.com/Doer-org/hack-camp_vol4_2023-1/graph/database"
	"github.com/Doer-org/hack-camp_vol4_2023-1/graph/model"
)

// CreateUser is the resolver for the createUser field.
func (r *mutationResolver) CreateUser(ctx context.Context, input model.CreateUserInput) (*model.User, error) {
	// user, err := r.CreateUser.Create(ctx, input)
	// if err != nil {
	// 	return nil, err
	// }
	// return user, nil
	db := database.DB()

	user := model.User{
		Name:        input.Name,
		Description: input.Description,
		FirebaseID:  input.FirebaseID,
	}

	if err := db.Create(&user).Error; err != nil {
		return nil, err
	}

	return &user, nil
}

// CreateHangout is the resolver for the createHangout field.
func (r *mutationResolver) CreateHangout(ctx context.Context, input model.CreateHangoutInput) (*model.Hangout, error) {
	panic(fmt.Errorf("not implemented: CreateHangout - createHangout"))
}

// UpdateHangout is the resolver for the updateHangout field.
func (r *mutationResolver) UpdateHangout(ctx context.Context, input model.UpdateHangoutInput) (*model.Hangout, error) {
	panic(fmt.Errorf("not implemented: UpdateHangout - updateHangout"))
}

// DeleteHangout is the resolver for the deleteHangout field.
func (r *mutationResolver) DeleteHangout(ctx context.Context, input model.DeleteHangoutInput) (*model.Hangout, error) {
	panic(fmt.Errorf("not implemented: DeleteHangout - deleteHangout"))
}

// CreateSchedule is the resolver for the createSchedule field.
func (r *mutationResolver) CreateSchedule(ctx context.Context, input model.CreateScheduleInput) (*model.Schedule, error) {
	panic(fmt.Errorf("not implemented: CreateSchedule - createSchedule"))
}

// UpdateSchedule is the resolver for the updateSchedule field.
func (r *mutationResolver) UpdateSchedule(ctx context.Context, input model.UpdateScheduleInput) (*model.Schedule, error) {
	panic(fmt.Errorf("not implemented: UpdateSchedule - updateSchedule"))
}

// DeleteSchedule is the resolver for the deleteSchedule field.
func (r *mutationResolver) DeleteSchedule(ctx context.Context, input model.DeleteScheduleInput) (*model.Schedule, error) {
	panic(fmt.Errorf("not implemented: DeleteSchedule - deleteSchedule"))
}

// CreateFriend is the resolver for the createFriend field.
func (r *mutationResolver) CreateFriend(ctx context.Context, input *model.CreateFriendInput) (*model.Friend, error) {
	panic(fmt.Errorf("not implemented: CreateFriend - createFriend"))
}

// UpdateFriendAccept is the resolver for the updateFriendAccept field.
func (r *mutationResolver) UpdateFriendAccept(ctx context.Context, input *model.UpdateFriendAcceptInput) (*model.Friend, error) {
	panic(fmt.Errorf("not implemented: UpdateFriendAccept - updateFriendAccept"))
}

// DeleteFriend is the resolver for the deleteFriend field.
func (r *mutationResolver) DeleteFriend(ctx context.Context, input *model.DeleteFriendInput) (*model.Friend, error) {
	panic(fmt.Errorf("not implemented: DeleteFriend - deleteFriend"))
}

// GetUserByID is the resolver for the getUserById field.
func (r *queryResolver) GetUserByID(ctx context.Context, id string) (*model.User, error) {
	panic(fmt.Errorf("not implemented: GetUserByID - getUserById"))
}

// GetHangoutsByuserID is the resolver for the getHangoutsByuserId field.
func (r *queryResolver) GetHangoutsByuserID(ctx context.Context, userID string) ([]*model.Hangout, error) {
	panic(fmt.Errorf("not implemented: GetHangoutsByuserID - getHangoutsByuserId"))
}

// GetSchedulesByUserID is the resolver for the getSchedulesByUserId field.
func (r *queryResolver) GetSchedulesByUserID(ctx context.Context, userID string) ([]*model.Schedule, error) {
	panic(fmt.Errorf("not implemented: GetSchedulesByUserID - getSchedulesByUserId"))
}

// GetFriendsByUserID is the resolver for the getFriendsByUserId field.
func (r *queryResolver) GetFriendsByUserID(ctx context.Context, userID string) ([]*model.Friend, error) {
	panic(fmt.Errorf("not implemented: GetFriendsByUserID - getFriendsByUserId"))
}

// Mutation returns MutationResolver implementation.
func (r *Resolver) Mutation() MutationResolver { return &mutationResolver{r} }

// Query returns QueryResolver implementation.
func (r *Resolver) Query() QueryResolver { return &queryResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
