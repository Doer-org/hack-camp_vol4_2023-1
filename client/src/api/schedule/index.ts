import { AxiosError, AxiosResponse } from "axios";
import { DeleteScheduleInput } from "./type";
import { CreateScheduleInput, GetSchedulesByUserId, resSchedule, resSchedules, UpdateScheduleInput } from "./type";
import { Axios } from "@/api/core/axios";

export const getSchedulesByUserId = async (input: GetSchedulesByUserId) => {
  let schedulesData: resSchedules | null = null;
  let error: Error | null = null;
  await Axios.get(`/schedule/${input.user_id}`)
    .then((res: AxiosResponse<resSchedules>) => {
      const { data } = res;
      schedulesData = data;
    })
    .catch((err: AxiosError<{ error: string }>) => {
      error = err;
    });
  return { schedulesData, error };
};

export const createSchedule = async (input: CreateScheduleInput) => {
  let scheduleData: resSchedule | null = null;
  let error: Error | null = null;
  await Axios.post(`/schedule/`, input)
    .then((res: AxiosResponse<resSchedule>) => {
      const { data } = res;
      scheduleData = data;
    })
    .catch((err: AxiosError<{ error: string }>) => {
      error = err;
    });
  return { scheduleData, error };
};

export const updateSchedule = async (input: UpdateScheduleInput) => {
  let scheduleData: resSchedule | null = null;
  let error: Error | null = null;
  await Axios.put(`/schedule/${input.id}`, input)
    .then((res: AxiosResponse<resSchedule>) => {
      const { data } = res;
      scheduleData = data;
    })
    .catch((err: AxiosError<{ error: string }>) => {
      error = err;
    });
  return { scheduleData, error };
};

export const deleteSchedule = async (input: DeleteScheduleInput) => {
  let scheduleData: resSchedule | null = null;
  let error: Error | null = null;
  await Axios.delete(`/schedule/${input.id}`)
    .then((res: AxiosResponse<resSchedule>) => {
      const { data } = res;
      scheduleData = data;
    })
    .catch((err: AxiosError<{ error: string }>) => {
      error = err;
    });
  return { scheduleData, error };
};
