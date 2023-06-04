import { gql } from "graphql-tag";

export const CREATE_HANGOUT = gql`
  mutation createHangout($input: CreateHangoutInput!) {
    createHangout(input: $input) {
      id
      user_id
      name
    }
  }
`;