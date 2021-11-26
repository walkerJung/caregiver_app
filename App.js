import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";
import { ApolloProvider, useReactiveVar } from "@apollo/client";

// 인트로
import Intro from "./screens/intro";

// 회원가입
import UserRegister from "./screens/join/user/Register";
import CaregiverRegister from "./screens/join/caregiver/Register";

// 로그인
import Login from "./screens/login/login";

// 메인
import MainUser from "./screens/main/Main"; //유저
import MainCaregiver from "./screens/main/MainCaregiver"; //간병인

// 공지사항
import NoticeList from "./screens/board/NoticeList";
import NoticeView from "./screens/board/NoticeView";

// 유저 - 간병인 신청
import ApplyForm from "./screens/apply/user/ApplyForm";
import ApplyFormDetail from "./screens/apply/user/ApplyFormDetail";
import ApplyCompleteUser from "./screens/apply/user/ApplyComplete";

// 간병인 - 간병인 전용(간병인 지원)
import ApplyListCaregiver from "./screens/apply/caregiver/ApplyList";
import ApplyViewCaregiver from "./screens/apply/caregiver/ApplyView";

// 유저 - 간병 내역
import HistoryStackUser from "./navigation/HistoryStackUser"; // 간병내역 흐름
import ApplicantList from "./screens/applicant/List"; //(간병인 선택 리스트입니다. 간병인이 희망간병비를 입력하면 유저에게 보여집니다.  )
import ApplicantComplete from "./screens/applicant/Complete"; // 입금확인 화면

// 간병인 - 간병 내역
import HistoryStackCaregiver from "./navigation/HistoryStackCaregiver";

// 유저 - 마이페이지
import MypageUser from "./screens/mypage/user";
import EditUser from "./screens/mypage/user/edit";
import EditPasswordUser from "./screens/mypage/user/passwordEdit";
import EditNameUser from "./screens/mypage/user/nameEdit";
import EditPhoneUser from "./screens/mypage/user/phoneEdit";
import EditGenderUser from "./screens/mypage/user/genderEdit";

// 유저 - 공고
import RecruitHome from "./screens/recruit"; //공고 자세히보기

// 간병인 - 마이페이지
import MypageCaregiver from "./screens/mypage/caregiver"; // 마이페이지 index
import EditCaregiver from "./screens/mypage/caregiver/edit"; //수정 페이지
import EditPasswordCaregiver from "./screens/mypage/caregiver/passwordEdit"; //비밀번호 변경
import EditRRNnumberCaregiver from "./screens/mypage/caregiver/RRNnumberEdit"; //주민등록번호 변경
import EditAddressCaregiver from "./screens/mypage/caregiver/addressEdit"; //주소변경
import EditPhoneCaregiver from "./screens/mypage/caregiver/phoneEdit"; //핸드폰번호 변경
import EditDetailCaregiver from "./screens/mypage/caregiver/editDetail"; //상세정보 변경
import EditGenderCaregiver from "./screens/mypage/caregiver/genderEdit"; // 성별변경

// 등록된 내용이 없을 시 나오는 화면
import NoneLayout from "./components/layout/NoneLayout";

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f5f5f5;
`;

export default function App() {
  return (
    <Container>
      <UserRegister />
      <StatusBar barStyle="dark-content" backgroundColor={"#fff"} />
    </Container>
  );
}
