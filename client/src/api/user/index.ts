import { Axios } from "@/api/core/axios";
import { User, CreateUserInput, GetUserByIdInput, UpdateUserInput } from "./type";
import { AxiosError, AxiosResponse } from "axios";

export const getUserById = async (input: GetUserByIdInput) => {
  let userData: User | null = null;
  let error: Error | null = null;
  await Axios.get(`/user/${input.id}`)
    .then((res: AxiosResponse<User>) => {
      const { data } = res;
      userData = data;
    })
    .catch((err: AxiosError<{ error: string }>) => {
      error = err;
    });
  return { userData, error };
};

export const createUser = async (input: CreateUserInput) => {
  let userData: User | null = null;
  let error: Error | null = null;
  await Axios.post(`/user`, input)
    .then((res: AxiosResponse<User>) => {
      const { data } = res;
      userData = data;
    })
    .catch((err: AxiosError<{ error: string }>) => {
      error = err;
    });
  return { userData, error };
};

export const updateUser = async (input: UpdateUserInput) => {
  let userData: User | null = null;
  let error: Error | null = null;
  await Axios.put(`/user/${input.id}`, input)
    .then((res: AxiosResponse<User>) => {
      const { data } = res;
      userData = data;
    })
    .catch((err: AxiosError<{ error: string }>) => {
      error = err;
    });
  return { userData, error };
};