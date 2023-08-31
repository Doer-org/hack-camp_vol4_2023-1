export type User = {
  __typename?: "User";
  description: string;
  id: string;
  image: string;
  name: string;
};

export type resUser = {
  data: User;
};

export type GetUserByIdInput = {
  id: string;
};

export type CreateUserInput = {
  description: string;
  image: string;
  name: string;
  id: string;
};

export type UpdateUserInput = {
  description: string;
  id: string;
  image: string;
  name: string;
};
