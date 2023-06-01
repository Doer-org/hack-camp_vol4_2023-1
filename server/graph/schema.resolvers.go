package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.
// Code generated by github.com/99designs/gqlgen version v0.17.31

import (
	"context"

	"github.com/Doer-org/hack-camp_vol4_2023-1/graph/model"
)

// CreateUser is the resolver for the createUser field.
func (r *mutationResolver) CreateUser(ctx context.Context, input model.CreateUserInput) (*model.User, error) {
	user, err := r.CreateUser.Create(ctx, input)
	if err != nil {
		return nil, err
	}
	return user, nil
}

// UpdateUser is the resolver for the updateUser field.
func (r *mutationResolver) UpdateUser(ctx context.Context, input model.UpdateUserInput) (*model.User, error) {
	user, err := r.CreateUser.Update(ctx, input)
	if err != nil {
		return nil, err
	}
	return user, nil
}

// CreateHangout is the resolver for the createHangout field.
func (r *mutationResolver) CreateHangout(ctx context.Context, input model.CreateHangoutInput) (*model.Hangout, error) {
	hangout, err := r.CreateHangout.Create(ctx, input)
	if err != nil {
		return nil, err
	}
	return hangout, nil
}

// UpdateHangout is the resolver for the updateHangout field.
func (r *mutationResolver) UpdateHangout(ctx context.Context, input model.UpdateHangoutInput) (*model.Hangout, error) {
	hangout, err := r.UpdateHangout.Update(ctx, input)
	if err != nil {
		return nil, err
	}
	return hangout, nil
}

// DeleteHangout is the resolver for the deleteHangout field.
func (r *mutationResolver) DeleteHangout(ctx context.Context, input model.DeleteHangoutInput) (*model.Hangout, error) {
	hangout, err := r.DeleteHangout.Delete(ctx, input)
	if err != nil {
		return nil, err
	}
	return hangout, nil
}

// CreateSchedule is the resolver for the createSchedule field.
func (r *mutationResolver) CreateSchedule(ctx context.Context, input model.CreateScheduleInput) (*model.Schedule, error) {
	schedule, err := r.CreateSchedule.Create(ctx, input)
	if err != nil {
		return nil, err
	}
	return schedule, nil
}

// UpdateSchedule is the resolver for the updateSchedule field.
func (r *mutationResolver) UpdateSchedule(ctx context.Context, input model.UpdateScheduleInput) (*model.Schedule, error) {
	schedule, err := r.UpdateSchedule.Update(ctx, input)
	if err != nil {
		return nil, err
	}
	return schedule, nil
}

// DeleteSchedule is the resolver for the deleteSchedule field.
func (r *mutationResolver) DeleteSchedule(ctx context.Context, input model.DeleteScheduleInput) (*model.Schedule, error) {
	schedule, err := r.DeleteSchedule.Delete(ctx, input)
	if err != nil {
		return nil, err
	}
	return schedule, nil
}

// CreateFriend is the resolver for the createFriend field.
func (r *mutationResolver) CreateFriend(ctx context.Context, input *model.CreateFriendInput) (*model.Friend, error) {
	friend, err := r.CreateFriend.Create(ctx, input)
	if err != nil {
		return nil, err
	}
	return friend, nil
}

// UpdateFriendAccept is the resolver for the updateFriendAccept field.
func (r *mutationResolver) UpdateFriendAccept(ctx context.Context, input *model.UpdateFriendAcceptInput) (*model.Friend, error) {
	friend, err := r.UpdateFriendAccept.Update(ctx, input)
	if err != nil {
		return nil, err
	}
	return friend, nil
}

// DeleteFriend is the resolver for the deleteFriend field.
func (r *mutationResolver) DeleteFriend(ctx context.Context, input *model.DeleteFriendInput) (*model.Friend, error) {
	friend, err := r.DeleteFriend.Delete(ctx, input)
	if err != nil {
		return nil, err
	}
	return friend, nil
}

// GetUserByID is the resolver for the getUserById field.
func (r *queryResolver) GetUserByID(ctx context.Context, id string) (*model.User, error) {
	user, err := r.GetUserByID.Get(ctx, id)
	if err != nil {
		return nil, err
	}
	return user, nil
}

// GetHangoutsByUserID is the resolver for the getHangoutsByUserId field.
func (r *queryResolver) GetHangoutsByUserID(ctx context.Context, userID string) ([]*model.Hangout, error) {
	hangouts, err := r.GetHangoutsByUserID.Get(ctx, userID)
	if err != nil {
		return nil, err
	}
	return hangouts, nil
}

// GetSchedulesByUserID is the resolver for the getSchedulesByUserId field.
func (r *queryResolver) GetSchedulesByUserID(ctx context.Context, userID string) ([]*model.Schedule, error) {
	schedules, err := r.GetSchedulesByUserID.Get(ctx, userID)
	if err != nil {
		return nil, err
	}
	return schedules, nil
}

// GetFriendsByUserID is the resolver for the getFriendsByUserId field.
func (r *queryResolver) GetFriendsByUserID(ctx context.Context, userID string) ([]*model.Friend, error) {
	friends, err := r.GetFriendsByUserID.Get(ctx, userID)
	if err != nil {
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
