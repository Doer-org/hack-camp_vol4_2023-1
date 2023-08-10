import { Axios } from "@/api/core/axios";
import {
  CreateFriendInput,
  DeleteFriendInput,
  Friend,
  GetFriendsByUserIdInput,
  UpdateFriendInput,
} from "./type";
import { AxiosError, AxiosResponse } from "axios";

export const getFriendsbyUserId = async (input: GetFriendsByUserIdInput) => {
  let friendData: Friend | null = null;
  let error: Error | null = null;
  await Axios.get(`/friend/${input.user_id}`)
    .then((res: AxiosResponse<Friend>) => {
      const { data } = res;
      friendData = data;
    })
    .catch((err: AxiosError<{ error: string }>) => {
      error = err;
    });
  return { friendData, error };
};

export const createFriend = async (input: CreateFriendInput) => {
  let friendData: Friend | null = null;
  let error: Error | null = null;
  await Axios.post(`/friend`, input)
    .then((res: AxiosResponse<Friend>) => {
      const { data } = res;
      friendData = data;
    })
    .catch((err: AxiosError<{ error: string }>) => {
      error = err;
    });
  return { friendData, error };
};

export const updateFriend = async (input: UpdateFriendInput) => {
  let friendData: Friend | null = null;
  let error: Error | null = null;
  await Axios.put(`/friend/${input.id}`, input)
    .then((res: AxiosResponse<Friend>) => {
      const { data } = res;
      friendData = data;
    })
    .catch((err: AxiosError<{ error: string }>) => {
      error = err;
    });
  return { friendData, error };
};

export const deleteFriend = async (input: DeleteFriendInput) => {
  let friendData: Friend | null = null;
  let error: Error | null = null;
  await Axios.delete(`/friend/${input.id}`)
    .then((res: AxiosResponse<Friend>) => {
      const { data } = res;
      friendData = data;
    })
    .catch((err: AxiosError<{ error: string }>) => {
      error = err;
    });
  return { friendData, error };
};
