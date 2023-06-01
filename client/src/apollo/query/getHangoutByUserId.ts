import { gql } from "graphql-tag";

export const GET_HANGOUT_BY_USERID = gql`
  query getHangoutByUserId($user_id: ID!) {
    getHangoutByUserId(user_id: $id) {
      id
      user_id
      name
    }
  }
`;