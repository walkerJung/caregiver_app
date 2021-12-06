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
    $residentNumber: String
    $smoke: String
    $drink: String
    $mealCare: String
    $urineCare: String
    $suctionCare: String
    $moveCare: String
    $bedCare: String
    $address: String
    $addressDetail: String
  ) {
    createAccount(
      userId: $userId
      userType: $userType
      userName: $userName
      password: $password
      sex: $sex
      phone: $phone
      residentNumber: $residentNumber
      smoke: $smoke
      drink: $drink
      mealCare: $mealCare
      urineCare: $urineCare
      suctionCare: $suctionCare
      moveCare: $moveCare
      bedCare: $bedCare
      address: $address
      addressDetail: $addressDetail
    ) {
      ok
      error
    }
  }
`;

export const LOGIN_MUTATION = gql`
  mutation login($userId: String!, $password: String!) {
    login(userId: $userId, password: $password) {
      ok
      token
      error
      user {
        code
        userId
        userType
        userName
        CaregiverInfo {
          bankInfo
          idCard
        }
      }
    }
  }
`;
