import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faBallot,
  faCoffee,
  faHome,
  faUser,
} from "@fortawesome/pro-regular-svg-icons";
import AuthStack from "./authStack";
import PatientMypageStack from "./patientMypageStack";
import PatientMainStack from "./patientMainStack";
import PatientCaregiveServiceStack from "./patientCaregiveServiceStack";
// import CaregiverMainStack from "./caregiverMainStack";

// 인트로
import Intro from "../screens/intro";

// 로그인
import Login from "../screens/login/login";

// 회원가입
import UserRegister from "../screens/join/user/Register";
import CaregiverRegister from "../screens/join/caregiver/Register";

// 메인
import MainUser from "../screens/main/Main"; //유저
import MainCaregiver from "../screens/main/MainCaregiver"; //간병인

// 공지사항
import NoticeList from "../screens/board/NoticeList";
import NoticeView from "../screens/board/NoticeView";

// 유저 - 간병인 신청
import ApplyForm from "../screens/apply/user/ApplyForm";
import ApplyFormDetail from "../screens/apply/user/ApplyFormDetail";
import ApplyCompleteUser from "../screens/apply/user/ApplyComplete";

// 간병인 - 간병인 전용(간병인 지원)
import ApplyListCaregiver from "../screens/apply/caregiver/ApplyList";
import ApplyViewCaregiver from "../screens/apply/caregiver/ApplyView";

// 유저 - 간병 내역
import ProgressHistoryUser from "../screens/history/user/ProgressHistory";
import CompleteHistoryUser from "../screens/history/user/CompleteHistory";
import ApplicantList from "../screens/applicant/List"; //(간병인 선택 리스트입니다. 간병인이 희망간병비를 입력하면 유저에게 보여집니다.  )
import ApplicantComplete from "../screens/applicant/Complete"; // 입금확인 화면

// 간병인 - 간병 내역
import HistoryStackCaregiver from "../navigation/HistoryStackCaregiver";

// 유저 - 마이페이지
import MypageUser from "../screens/mypage/user";
import EditUser from "../screens/mypage/user/edit";
import EditPasswordUser from "../screens/mypage/user/passwordEdit";
import EditNameUser from "../screens/mypage/user/nameEdit";
import EditPhoneUser from "../screens/mypage/user/phoneEdit";
import EditGenderUser from "../screens/mypage/user/genderEdit";

// 유저 - 공고
import RecruitHome from "../screens/recruit"; //공고 자세히보기

// 간병인 - 마이페이지
import careglverMypageStack from "../navigation/careglverMypageStack"; // 마이페이지 stack
import MypageCaregiver from "../screens/mypage/caregiver"; // 마이페이지 index
import EditCaregiver from "../screens/mypage/caregiver/edit"; //수정 페이지
import EditPasswordCaregiver from "../screens/mypage/caregiver/passwordEdit"; //비밀번호 변경
import EditRRNnumberCaregiver from "../screens/mypage/caregiver/RRNnumberEdit"; //주민등록번호 변경
import EditAddressCaregiver from "../screens/mypage/caregiver/addressEdit"; //주소변경
import EditPhoneCaregiver from "../screens/mypage/caregiver/phoneEdit"; //핸드폰번호 변경
import EditDetailCaregiver from "../screens/mypage/caregiver/editDetail"; //상세정보 변경
import EditGenderCaregiver from "../screens/mypage/caregiver/genderEdit"; // 성별변경

// 등록된 내용이 없을 시 나오는 화면
import NoneLayout from "../components/layout/NoneLayout";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function MainNavigation({ isLoggedIn, userInfo }) {
  return (
    <NavigationContainer>
      {isLoggedIn && userInfo ? (
        <Tab.Navigator
          options={{
            tabBarShowLabel: false,
          }}
        >
          {JSON.parse(userInfo).userType === "환자" ? (
            <>
              <Tab.Screen
                name="메인"
                component={PatientMainStack}
                options={{ headerShown: false }}
              />
              {/* <Tab.Screen
                name="간병 신청"
                component={ApplyForm}
                options={{ headerShown: false }}
              /> */}
              <Tab.Screen
                name="간병 서비스"
                component={PatientCaregiveServiceStack}
                options={{ headerShown: false }}
              />
              <Tab.Screen
                name="마이페이지"
                component={PatientMypageStack}
                options={{ headerShown: false }}
              />
            </>
          ) : (
            <>
              <Tab.Screen
                name="메인"
                component={MainCaregiver}
                options={{
                  headerShown: false,
                  tabBarIcon: ({ color, size }) => (
                    <View>
                      <FontAwesomeIcon icon={faHome} />
                    </View>
                  ),
                }}
              />
              <Tab.Screen
                name="간병인 전용"
                component={ApplyForm}
                options={{
                  headerShown: false,
                  tabBarIcon: ({ color, size }) => (
                    <View>
                      <FontAwesomeIcon icon={faHome} />
                    </View>
                  ),
                }}
              />
              <Tab.Screen
                name="간병 내역"
                component={HistoryStackCaregiver}
                options={{
                  headerShown: false,
                  tabBarIcon: ({ color, size }) => (
                    <View>
                      <FontAwesomeIcon icon={faBallot} />
                    </View>
                  ),
                }}
              />
              <Tab.Screen
                name="마이페이지"
                component={careglverMypageStack}
                options={{
                  headerShown: false,
                  tabBarIcon: ({ color, size }) => (
                    <View>
                      <FontAwesomeIcon icon={faUser} />
                    </View>
                  ),
                }}
              />
            </>
          )}
        </Tab.Navigator>
      ) : (
        <>
          <Stack.Navigator
            initialRouteName="IntroScreen"
            screenOptions={{
              headerShown: false,
              gestureEnabled: false,
              headerTintColor: "white",
              headerBackTitleVisible: false,
              headerStyle: {
                borderBottomWidth: 1,
                borderBottomColor: "#F0F0F0",
                elevation: 0, //for android
                shadowOpacity: 0, // for ios
              },
            }}
            cardStyle={{ backgroundColor: "transparent" }}
          >
            <Stack.Screen name="IntroScreen" component={Intro} />
            <Stack.Screen name="LoginScreen" component={AuthStack} />
          </Stack.Navigator>
        </>
      )}
    </NavigationContainer>
  );
}
