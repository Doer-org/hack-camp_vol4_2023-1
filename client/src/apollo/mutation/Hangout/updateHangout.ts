import { gql } from "graphql-tag";

export const UPDATE_HANGOUT = gql`
  mutation updateHangout($input: UpdateHangoutInput!) {
    updateHangout(input: $input) {
      id
      user_id
      name
    }
  }
`;