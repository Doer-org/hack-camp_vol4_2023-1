import { gql } from "graphql-tag";

export const GET_HANGOUT_BY_USERID = gql`
  query getHangoutsByUserId($user_id: ID!) {
    getHangoutsByUserId(user_id: $user_id) {
      id
      user_id
      name
    }
  }
`;