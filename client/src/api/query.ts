import client from "@/apollo/apolloClient";
import { Query } from "@/apollo/generated/graphql";
import { QueryGetUserByIdArgs } from "@/apollo/generated/graphql";
import { GET_USER_BY_ID } from "@/apollo/query/getUserById";

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
