import { gql } from "@apollo/client";

export const FIND_ID_QUERY = gql`
  query findUserId($phone: String!) {
    findUserId(phone: $phone) {
      userId
    }
  }
`;

export const FIND_PASSWORD_QUERY = gql`
  query findUserPassword(
    $userId: String!
    $userName: String!
    $phone: String!
  ) {
    findUserPassword(userId: $userId, userName: $userName, phone: $phone) {
      password
    }
  }
`;
