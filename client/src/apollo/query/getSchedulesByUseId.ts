import { gql } from "graphql-tag";

export const GET_SCHEDULES_BY_USERID = gql`
  query getScheduleByUserId($user_id: ID!) {
    getScheduleByUserId(user_id: $id) {
      id
      user_id
      date
    }
  }
`;