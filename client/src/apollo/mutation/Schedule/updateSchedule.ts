import { gql } from "graphql-tag";

export const UPDATE_SCHEDULE = gql`
  mutation updateSchedule($input: UpdateScheduleInput!) {
    updateSchedule(input: $input) {
      id
      user_id
      date
    }
  }
`;
