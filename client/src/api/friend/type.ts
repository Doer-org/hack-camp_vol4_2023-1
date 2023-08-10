export type Friend = {
    __typename?: "Friend";
    accept: Boolean;
    friend_id: string;
    id: string;
    user_id: string;
}

export type GetFriendsByUserIdInput = {
    user_id: string;
}

export type CreateFriendInput = {
    accept: Boolean;
    friend_id: string;
    id: string;
    user_id: string;
}

export type UpdateFriendInput = {
    accept: Boolean;
    friend_id: string;
    id: string;
    user_id: string;
}

export type DeleteFriendInput = {
    id: string;
}