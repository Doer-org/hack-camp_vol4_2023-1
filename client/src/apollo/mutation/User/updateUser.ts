import { gql } from "graphql-tag";

//firebase_idを削除

export const UPDATE_USER = gql`
  mutation updateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
      id
      firebase_id
      name
      description
    }
  }
`;