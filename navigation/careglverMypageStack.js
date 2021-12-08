import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MypageUser from "../screens/mypage/user";

// 간병인 - 마이페이지
import MypageCaregiver from "../screens/mypage/caregiver"; // 마이페이지 index
import EditCaregiver from "../screens/mypage/caregiver/edit"; //수정 페이지
import EditPasswordCaregiver from "../screens/mypage/caregiver/passwordEdit"; //비밀번호 변경
import EditRRNnumberCaregiver from "../screens/mypage/caregiver/RRNnumberEdit"; //주민등록번호 변경
import EditAddressCaregiver from "../screens/mypage/caregiver/addressEdit"; //주소변경
import EditPhoneCaregiver from "../screens/mypage/caregiver/phoneEdit"; //핸드폰번호 변경
import EditDetailCaregiver from "../screens/mypage/caregiver/editDetail"; //상세정보 변경
import EditGenderCaregiver from "../screens/mypage/caregiver/genderEdit"; // 성별변경

const Stack = createStackNavigator();

export default function careglverMypageStack() {
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
        name="마이페이지"
        component={MypageCaregiver}
        options={{
          headerShown: false,
        }}
      />
      {/* 내 정보 수정 Stack */}
      <Stack.Screen
        name="EditCaregiver"
        component={EditCaregiver}
        options={{
          headerShown: false,
        }}
      />
      {/* 비밀번호 수정 Stack */}
      <Stack.Screen
        name="EditRRNnumberCaregiver"
        component={EditRRNnumberCaregiver}
        options={{
          headerShown: false,
        }}
      />
      {/* 내 정보 수정 Stack */}
      <Stack.Screen
        name="EditAddressCaregiver"
        component={EditAddressCaregiver}
        options={{
          headerShown: false,
        }}
      />
      {/* 공지사항 Stack */}
      <Stack.Screen
        name="EditPasswordCaregiver"
        component={EditPasswordCaregiver}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
