import { gql } from "graphql-tag";

export const CREATE_FRIEND = gql`
  mutation createFriend($input: CreateFriendInput!) {
    createFriend(input: $input) {
      id
      user_id
      friend_id
      accept
    }
  }
`;