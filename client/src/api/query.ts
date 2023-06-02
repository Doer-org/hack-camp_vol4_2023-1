import client from "@/apollo/apolloClient";
import {
  Query,
  QueryGetFriendsByUserIdArgs,
  QueryGetHangoutsByUserIdArgs,
  QueryGetSchedulesByUserIdArgs,
  User,
} from "@/apollo/generated/graphql";
import { QueryGetUserByIdArgs } from "@/apollo/generated/graphql";
import { GET_USER_BY_ID } from "@/apollo/query/getUserById";
import { GET_SCHEDULES_BY_USERID } from "@/apollo/query/getSchedulesByUserId";
import { GET_HANGOUTS_BY_USERID } from "@/apollo/query/getHangoutsByUserId";
import { GET_FRIENDS_BY_USERID } from "@/apollo/query/getFriendsByUserId";

export const GetUserById = async (input: QueryGetUserByIdArgs) => {
  let data, err;
  await client
    .query<Query["getUserById"], QueryGetUserByIdArgs>({
      query: GET_USER_BY_ID,
      variables: {
        id: input.id,
      },
    })
    .then((res) => {
      data = res.data;
    })
    .catch((error) => {
      err = error;
    });
  return { data, err };
};

export const GetHangoutsByUserId = async (
  input: QueryGetHangoutsByUserIdArgs
) => {
  let data, err;
  await client
    .query<Query["getHangoutsByUserId"], QueryGetHangoutsByUserIdArgs>({
      query: GET_HANGOUTS_BY_USERID,
      variables: {
        user_id: input.user_id,
      },
    })
    .then((res) => {
      data = res.data;
    })
    .catch((error) => {
      err = error;
    });
  return { data, err };
};

export const GetSchedulesByUserId = async (
  input: QueryGetSchedulesByUserIdArgs
) => {
  let data, err;
  await client
    .query<Query["getSchedulesByUserId"], QueryGetSchedulesByUserIdArgs>({
      query: GET_SCHEDULES_BY_USERID,
      variables: {
        user_id: input.user_id,
      },
    })
    .then((res) => {
      data = res.data;
    })
    .catch((error) => {
      err = error;
    });
  return { data, err };
};

export const GetFriendssByUserId = async (
  input: QueryGetFriendsByUserIdArgs
) => {
  let data, err;
  await client
    .query<Query["getSchedulesByUserId"], QueryGetFriendsByUserIdArgs>({
      query: GET_FRIENDS_BY_USERID,
      variables: {
        user_id: input.user_id,
      },
    })
    .then((res) => {
      data = res.data;
    })
    .catch((error) => {
      err = error;
    });
  return { data, err };
};
