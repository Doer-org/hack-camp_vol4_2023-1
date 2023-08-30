export type Hangout = {
  __typename?: "Hangout";
  id: string;
  name: string;
  user_id: string;
};

export type resHangout = {
  data: Hangout;
};

export type resHangouts = {
  data: Hangout[];
};

export type GetHangoutsByUserIdInput = {
  user_id: string;
};

export type CreateHangoutInput = {
  name: string;
  user_id: string;
};

export type UpdateHangoutInput = {
  id: string;
  name: string;
  user_id: string;
};

export type DeleteHangoutInput = {
  id: string;
};
