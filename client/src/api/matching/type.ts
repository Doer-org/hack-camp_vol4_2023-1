export type Matching = {
  __typename?: "Matching";
  friend_id: string;
  friend_name: string;
  friend_image: string;
};

export type resMatchings = {
  data: Matching[];
};

export type GetMatchingByUserIdInput = {
  user_id: string;
};
