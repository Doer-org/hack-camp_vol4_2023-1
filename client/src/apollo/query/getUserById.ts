import { gql } from "graphql-tag";

// firebase_idを削除

export const GET_USER_BY_ID = gql`
  query getUserById($id: ID!) {
    getUserById(id: $id) {
      id
      firebase_id
      name
      description
    }
  }
`;