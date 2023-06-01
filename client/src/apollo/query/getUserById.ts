import { gql } from "graphql-tag";

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