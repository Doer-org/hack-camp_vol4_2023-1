export type User = {
  __typename?: "User";
  description: string;
  id: string;
  image: string;
  name: string;
};

export type GetUserByIdInput = {
  id: string;
};

export type CreateUserInput = {
  description: string;
  id: string;
  image: string;
  name: string;
};

export type UpdateUserInput = {
  description: string;
  id: string;
  image: string;
  name: string;
};
