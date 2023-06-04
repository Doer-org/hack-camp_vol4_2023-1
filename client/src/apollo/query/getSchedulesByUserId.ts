import { gql } from "graphql-tag";

export const GET_SCHEDULES_BY_USERID = gql`
  query getSchedulesByUserId($user_id: String!) {
    getSchedulesByUserId(user_id: $user_id) {
      id
      user_id
      date
    }
  }
`;