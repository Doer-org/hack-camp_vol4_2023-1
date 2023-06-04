import { gql } from "graphql-tag";

export const DELETE_SCHEDULE = gql`
  mutation deleteSchedule($input: DeleteScheduleInput!) {
    deleteSchedule(input: $input) {
      id
      user_id
      date
    }
  }
`;