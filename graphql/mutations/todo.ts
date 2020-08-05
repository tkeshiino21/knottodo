import { gql } from "@apollo/client";

export const GET_TODOS = gql`
  query getTodos($isToday: boolean) {
    todo(where: { isToday: { _eq: $isToday } }) {
      id
      isToday
      title
    }
  }
`;

export const GET_ALL_TODOS = gql`
  query getTodos {
    todo {
      id
      isToday
      title
    }
  }
`;
