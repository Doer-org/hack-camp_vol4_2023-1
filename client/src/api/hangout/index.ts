import { AxiosError, AxiosResponse } from "axios";
import {
  CreateHangoutInput,
  DeleteHangoutInput,
  GetHangoutsByUserIdInput,
  resHangout,
  resHangouts,
  UpdateHangoutInput,
} from "./type";
import { Axios } from "@/api/core/axios";

export const getHangoutsByUserId = async (input: GetHangoutsByUserIdInput) => {
  let hangoutsData: resHangouts | null = null;
  let error: Error | null = null;
  await Axios.get(`/hangout/${input.user_id}`)
    .then((res: AxiosResponse<resHangouts>) => {
      const { data } = res;
      hangoutsData = data;
    })
    .catch((err: AxiosError<{ error: string }>) => {
      error = err;
    });
  return { hangoutsData, error };
};

export const createHangout = async (input: CreateHangoutInput) => {
  let hangoutsData: resHangout | null = null;
  let error: Error | null = null;
  await Axios.post(`/hangout`, input)
    .then((res: AxiosResponse<resHangout>) => {
      const { data } = res;
      hangoutsData = data;
    })
    .catch((err: AxiosError<{ error: string }>) => {
      error = err;
    });
  return { hangoutsData, error };
};

export const updateHangout = async (input: UpdateHangoutInput) => {
  let hangoutsData: resHangout | null = null;
  let error: Error | null = null;
  await Axios.put(`/hangout/${input.id}`, input)
    .then((res: AxiosResponse<resHangout>) => {
      const { data } = res;
      hangoutsData = data;
    })
    .catch((err: AxiosError<{ error: string }>) => {
      error = err;
    });
  return { hangoutsData, error };
};

export const deleteHangout = async (input: DeleteHangoutInput) => {
  let hangoutsData: resHangout | null = null;
  let error: Error | null = null;
  await Axios.delete(`/hangout/${input.id}`)
    .then((res: AxiosResponse<resHangout>) => {
      const { data } = res;
      hangoutsData = data;
    })
    .catch((err: AxiosError<{ error: string }>) => {
      error = err;
    });
  return { hangoutsData, error };
};
