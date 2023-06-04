import { gql } from "graphql-tag";

export const CREATE_SCHEDULE = gql`
  mutation createSchedule($input: CreateScheduleInput!) {
    createSchedule(input: $input) {
      id
      user_id
      date
    }
  }
`;