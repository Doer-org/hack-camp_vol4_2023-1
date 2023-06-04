import { gql } from "graphql-tag";

export const DELETE_FRIEND = gql`
  mutation deleteFriend($input: DeleteFriendInput!) {
    deleteFriend(input: $input) {
      id
      user_id
      friend_id
      accept
    }
  }
`;