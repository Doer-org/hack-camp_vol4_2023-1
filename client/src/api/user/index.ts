import { AxiosError, AxiosResponse } from "axios";
import { resUser, User, CreateUserInput, GetUserByIdInput, UpdateUserInput } from "./type";
import { Axios } from "@/api/core/axios";

export const getUserById = async (input: GetUserByIdInput) => {
  let userData: resUser | null = null;
  let error: Error | null = null;
  await Axios.get(`/user/${input.id}`)
    .then((res: AxiosResponse<resUser>) => {
      const { data } = res;
      userData = data;
    })
    .catch((err: AxiosError<{ error: string }>) => {
      error = err;
    });
  return { userData, error };
};

export const createUser = async (input: CreateUserInput) => {
  let userData: resUser | null = null;
  let error: Error | null = null;
  await Axios.post(`/user`, input)
    .then((res: AxiosResponse<resUser>) => {
      const { data } = res;
      userData = data;
    })
    .catch((err: AxiosError<{ error: string }>) => {
      error = err;
    });
  return { userData, error };
};

export const updateUser = async (input: UpdateUserInput) => {
  let userData: resUser | null = null;
  let error: Error | null = null;
  await Axios.put(`/user/${input.id}`, input)
    .then((res: AxiosResponse<resUser>) => {
      const { data } = res;
      userData = data;
    })
    .catch((err: AxiosError<{ error: string }>) => {
      error = err;
    });
  return { userData, error };
};
