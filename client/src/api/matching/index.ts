import { AxiosError, AxiosResponse } from "axios";
import { GetMatchingByUserIdInput, resMatchings } from "./type";
import { Axios } from "@/api/core/axios";

export const getMatchingByUserId = async (input: GetMatchingByUserIdInput) => {
  let matchingsData: resMatchings | null = null;
  let error: Error | null = null;
  await Axios.get(`/matching/${input.user_id}`)
    .then((res: AxiosResponse<resMatchings>) => {
      const { data } = res;
      matchingsData = data;
    })
    .catch((err: AxiosError<{ error: string }>) => {
      error = err;
    });
  return { matchingsData, error };
};
