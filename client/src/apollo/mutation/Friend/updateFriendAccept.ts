import { gql } from "graphql-tag";

export const UPDATE_FRIEND_ACCEPT = gql`
  mutation updateFriendAccept($input: UpdateFriendAcceptInput!) {
    updateFriendAccept(input: $input) {
      id
      user_id
      friend_id
      accept
    }
  }
`;