import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MypageUser from "../screens/mypage/user";
import PatientMypageProfileStack from "./patientMypageProfileStack";
import PatientMypageNoticeStack from "./patientMypageNoticeStack";
// import EditUser from "../screens/mypage/user/edit";
// import EditPasswordUser from "../screens/mypage/user/passwordEdit";
// import EditNameUser from "../screens/mypage/user/nameEdit";
// import EditPhoneUser from "../screens/mypage/user/phoneEdit";
// import EditGenderUser from "../screens/mypage/user/genderEdit";

const Stack = createStackNavigator();

export default function PatientMypageStack() {
  return (
    <Stack.Navigator
      initialRouteName="MypageUser"
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        cardStyle: { backgroundColor: "#fff" },
        headerBackTitleVisible: false,
        headerTitleStyle: { color: "black" },
        headerTintColor: "#414141",
        headerHideShadow: true,
        headerStyle: {
          borderBottomWidth: 1,
          borderBottomColor: "#F0F0F0",
          elevation: 0, //for android
          shadowOpacity: 0, // for ios
        },
      }}
      cardStyle={{ backgroundColor: "transparent" }}
    >
      {/* 마이페이지 탭 클릭시 화면 */}
      <Stack.Screen
        name="환자 마이페이지"
        component={MypageUser}
        options={{
          headerShown: false,
        }}
      />
      {/* 내 정보 수정 Stack */}
      <Stack.Screen
        name="PatientMypageProfileStack"
        component={PatientMypageProfileStack}
        options={{
          headerShown: false,
        }}
      />
      {/* 공지사항 Stack */}
      <Stack.Screen
        name="PatientMypageNoticeStack"
        component={PatientMypageNoticeStack}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
