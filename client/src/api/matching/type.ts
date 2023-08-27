export type Matching = {
  __typename?: "Matching";
  friend_id: string;
};

export type resMatchings = {
  data: Matching[];
};

export type GetMatchingByUserIdInput = {
  user_id: string;
};
