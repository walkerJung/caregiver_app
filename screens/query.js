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

export const CREATE_ACCOUNT_MUTATION = gql`
  mutation createAccount(
    $userId: String!
    $userType: String!
    $userName: String!
    $password: String!
    $sex: String!
    $phone: String!
  ) {
    createAccount(
      userId: $userId
      userType: $userType
      userName: $userName
      password: $password
      sex: $sex
      phone: $phone
    ) {
      ok
      error
    }
  }
`;
