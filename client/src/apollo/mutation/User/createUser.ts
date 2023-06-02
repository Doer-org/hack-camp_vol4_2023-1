import { gql } from "graphql-tag";

//firebase_idを削除

export const CREATE_USER = gql`
  mutation createUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      firebase_id
      name
      description
    }
  }
`;
