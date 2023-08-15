export type Schedule = {
  __typename?: "Schedule";
  date: string;
  id: string;
  user_id: string;
};

export type GetSchedulesByUserId = {
  user_id: string;
};

export type CreateScheduleInput = {
  date: string;
  user_id: string;
};

export type UpdateScheduleInput = {
  date: string;
  id: string;
  user_id: string;
};

export type DeleteScheduleInput = {
  id: string;
};
