import { gql } from "@apollo/client";

// 로그인 및 회원가입
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
        phone
        CaregiverInfo {
          bankInfo
          idCard
        }
      }
    }
  }
`;

// 환자 간병서비스 신청
export const WRITE_ANNOUNCEMENT_MUTATION = gql`
  mutation writeAnnouncement(
    $userCode: Int!
    $needMealCare: String!
    $needUrineCare: String!
    $needSuctionCare: String!
    $needMoveCare: String!
    $needBedCare: String!
    $needHygieneCare: String!
    $caregiverMeal: String!
    $infectiousDisease: String!
    $title: String!
    $startDate: String!
    $endDate: String!
    $startTime: String!
    $endTime: String!
    $protectorName: String!
    $protectorPhone: String!
    $patientName: String!
    $patientAge: Int!
    $patientWeight: Int!
    $address: String!
    $addressDetail: String!
    $nursingGrade: String!
    $disease: String!
    $isolation: String!
  ) {
    writeAnnouncement(
      userCode: $userCode
      needMealCare: $needMealCare
      needUrineCare: $needUrineCare
      needSuctionCare: $needSuctionCare
      needMoveCare: $needMoveCare
      needBedCare: $needBedCare
      needHygieneCare: $needHygieneCare
      caregiverMeal: $caregiverMeal
      infectiousDisease: $infectiousDisease
      title: $title
      startDate: $startDate
      endDate: $endDate
      startTime: $startTime
      endTime: $endTime
      protectorName: $protectorName
      protectorPhone: $protectorPhone
      patientName: $patientName
      patientAge: $patientAge
      patientWeight: $patientWeight
      address: $address
      addressDetail: $addressDetail
      nursingGrade: $nursingGrade
      disease: $disease
      isolation: $isolation
    ) {
      ok
      error
    }
  }
`;

// 환자 간병 서비스
export const ANNOUNCEMENT_LIST_QUERY = gql`
  query listAnnouncement($userCode: Int!) {
    listAnnouncement(userCode: $userCode) {
      result
      announcements {
        code
        title
        status
        patientName
        startDate
        endDate
        address
        addressDetail
      }
      announcementApplication {
        code
      }
    }
  }
`;

export const ANNOUNCEMENT_DETAIL_QUERY = gql`
  query viewAnnouncement($code: Int!) {
    viewAnnouncement(code: $code) {
      code
      status
      userCode
      needMealCare
      needUrineCare
      needSuctionCare
      needMoveCare
      needBedCare
      needHygieneCare
      caregiverMeal
      infectiousDisease
      title
      startDate
      endDate
      expectedCost
      hopeCost
      protectorName
      protectorPhone
      patientName
      patientAge
      patientWeight
      address
      addressDetail
      nursingGrade
      disease
      isolation
      createdAt
      user {
        userId
        userName
        sex
        phone
      }
      announcementApplication {
        userCode
        caregiverCost
        confirm
        user {
          userId
          userName
          sex
          phone
        }
      }
    }
  }
`;

// 환자 마이페이지
export const USER_DETAIL_QUERY = gql`
  query viewProfile($code: Int!) {
    viewProfile(code: $code) {
      userId
      userType
      userName
      sex
      phone
      createdAt
      CaregiverInfo {
        userCode
        address
        addressDetail
        residentNumber
        idCard
        bankInfo
        smoke
        drink
        mealCare
        urineCare
        suctionCare
        moveCare
        bedCare
      }
    }
  }
`;

export const EDIT_USER_MUTATION = gql`
  mutation editAccount(
    $userCode: Int!
    $phone: String
    $userName: String
    $password: String
  ) {
    editAccount(
      userCode: $userCode
      phone: $phone
      userName: $userName
      password: $password
    ) {
      ok
      error
    }
  }
`;

// 공지사항
export const NOTICE_LIST_QUERY = gql`
  query listNotice($take: Int, $skip: Int) {
    listNotice(take: $take, skip: $skip) {
      notices {
        code
        title
        content
        createdAt
      }
      count
    }
  }
`;

export const NOTICE_DETAIL_QUERY = gql`
  query viewNotice($code: Int!) {
    viewNotice(code: $code) {
      code
      title
      content
      createdAt
    }
  }
`;
