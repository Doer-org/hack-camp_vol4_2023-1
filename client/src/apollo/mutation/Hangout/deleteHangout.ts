import gql from "graphql-tag";

export const DELETE_HANGOUT = gql`
  mutation deleteHangout($input: DeleteHangoutInput!) {
    deleteHangout(input: $input) {
      id
      user_id
      name
    }
  }
`;
