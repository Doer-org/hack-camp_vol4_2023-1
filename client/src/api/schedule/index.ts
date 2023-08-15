import { Axios } from "@/api/core/axios";
import { AxiosError, AxiosResponse } from "axios";
import { DeleteScheduleInput } from "./type";
import {
  CreateScheduleInput,
  GetSchedulesByUserId,
  Schedule,
  UpdateScheduleInput,
} from "./type";

export const getSchedulesByUserId = async (input: GetSchedulesByUserId) => {
  let schedulesData: Schedule[] | null = null;
  let error: Error | null = null;
  await Axios.get(`/schedule/${input.user_id}`)
    .then((res: AxiosResponse<Schedule[]>) => {
      const { data } = res;
      schedulesData = data;
    })
    .catch((err: AxiosError<{ error: string }>) => {
      error = err;
    });
  return { schedulesData, error };
};

export const createSchedule = async (input: CreateScheduleInput) => {
  let scheduleData: Schedule | null = null;
  let error: Error | null = null;
  await Axios.post(`/schedule`, input)
    .then((res: AxiosResponse<Schedule>) => {
      const { data } = res;
      scheduleData = data;
    })
    .catch((err: AxiosError<{ error: string }>) => {
      error = err;
    });
  return { scheduleData, error };
};

export const updateSchedule = async (input: UpdateScheduleInput) => {
  let scheduleData: Schedule | null = null;
  let error: Error | null = null;
  await Axios.put(`/schedule/${input.id}`, input)
    .then((res: AxiosResponse<Schedule>) => {
      const { data } = res;
      scheduleData = data;
    })
    .catch((err: AxiosError<{ error: string }>) => {
      error = err;
    });
  return { scheduleData, error };
};

export const deleteSchedule = async (input: DeleteScheduleInput) => {
  let scheduleData: Schedule | null = null;
  let error: Error | null = null;
  await Axios.delete(`/schedule/${input.id}`)
    .then((res: AxiosResponse<Schedule>) => {
      const { data } = res;
      scheduleData = data;
    })
    .catch((err: AxiosError<{ error: string }>) => {
      error = err;
    });
  return { scheduleData, error };
};
