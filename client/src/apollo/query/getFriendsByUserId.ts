import { gql } from "graphql-tag";

export const GET_FRIENDS_BY_USERID = gql`
  query getFriendsByUserId($user_id: ID!) {
    getFriendsByUserId(user_id: $id) {
      id
      user_id
      friend_id
      accept
    }
  }
`;