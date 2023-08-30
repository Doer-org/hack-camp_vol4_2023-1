export type Friend = {
  __typename?: "Friend";
  accept: Boolean;
  friend_id: string;
  friend_name: string;
  friend_image: string;
  id: string;
  user_id: string;
};

export type resFriend = {
  data: Friend;
};

export type resFriends = {
  data: Friend[];
};

export type GetFriendsByUserIdInput = {
  user_id: string;
};

export type GetRequestsByUserIdInput = {
  user_id: string;
};

export type CreateFriendInput = {
  accept: Boolean;
  friend_id: string;
  user_id: string;
};

export type UpdateFriendInput = {
  accept: Boolean;
  friend_id: string;
  id: string;
  user_id: string;
};

export type DeleteFriendInput = {
  id: string;
};
