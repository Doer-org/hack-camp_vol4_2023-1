import { gql } from "graphql-tag";

export const GET_FRIENDS_BY_USERID = gql`
  query getFriendsByUserId($user_id: String!) {
    getFriendsByUserId(user_id: $user_id) {
      id
      user_id
      friend_id
      accept
    }
  }
`;