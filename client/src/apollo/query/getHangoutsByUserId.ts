import { gql } from "graphql-tag";

export const GET_HANGOUTS_BY_USERID = gql`
  query getHangoutsByUserId($user_id: String!) {
    getHangoutsByUserId(user_id: $user_id) {
      id
      user_id
      name
    }
  }
`;