import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";
import CaregiverMain from "../screens/main/MainCaregiver";
import Icon from "react-native-fontawesome-pro";

import TabBar from "./TabBar";

// 간병인 - 간병인 전용(간병인 지원)
import ApplyListCaregiver from "../screens/apply/caregiver/ApplyList";
import ApplyViewCaregiver from "../screens/apply/caregiver/ApplyView";

// 간병인 - 간병 내역
import ProgressHistoryCaregiver from "../screens/history/caregiver/ProgressHistory";
import CompleteHistoryCaregiver from "../screens/history/caregiver/CompleteHistory";
import FaliHistoryCaregiver from "../screens/history/caregiver/FailHistory";

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
const Tab = createBottomTabNavigator();

const ApplyStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Apply"
      headerMode="none"
      screenOptions={{
        gestureEnabled: false,
        cardStyle: { backgroundColor: "#fff" },
      }}
    >
      <Stack.Screen name="ApplyListCaregiver" component={ApplyListCaregiver} />
      <Stack.Screen name="ApplyViewCaregiver" component={ApplyViewCaregiver} />
    </Stack.Navigator>
  );
};
const HistoryStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="History"
      headerMode="none"
      screenOptions={{
        gestureEnabled: false,
        cardStyle: { backgroundColor: "#fff" },
      }}
    >
      <Stack.Screen
        name="ProgressHistoryCaregiver"
        component={ProgressHistoryCaregiver}
      />
      <Stack.Screen
        name="CompleteHistoryCaregiver"
        component={CompleteHistoryCaregiver}
      />
      <Stack.Screen
        name="FaliHistoryCaregiver"
        component={FaliHistoryCaregiver}
      />
    </Stack.Navigator>
  );
};
const CaregiverStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Caregiver"
      headerMode="none"
      screenOptions={{
        gestureEnabled: false,
        cardStyle: { backgroundColor: "#fff" },
      }}
    >
      <Stack.Screen name="MypageCaregiver" component={MypageCaregiver} />
      <Stack.Screen name="EditCaregiver" component={EditCaregiver} />
      <Stack.Screen
        name="EditPasswordCaregiver"
        component={EditPasswordCaregiver}
      />
      <Stack.Screen
        name="EditRRNnumberCaregiver"
        component={EditRRNnumberCaregiver}
      />
      <Stack.Screen
        name="EditAddressCaregiver"
        component={EditAddressCaregiver}
      />
      <Stack.Screen name="EditPhoneCaregiver" component={EditPhoneCaregiver} />
      <Stack.Screen
        name="EditDetailCaregiver"
        component={EditDetailCaregiver}
      />
      <Stack.Screen
        name="EditGenderCaregiver"
        component={EditGenderCaregiver}
      />
    </Stack.Navigator>
  );
};
const TabStack = () => {
  return (
    <Tab.Navigator
      headerMode="none"
      tabBarOptions={{
        showIcon: true,
        showLabel: false,
        tintColor: "#333",
        activeTintColor: "#aaa",
      }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tab.Screen name="홈" component={CaregiverMain} />
      <Tab.Screen name="간병인지원" component={HistoryStack} />
      <Tab.Screen name="간병내역" component={ApplyStack} />
      <Tab.Screen
        name="마이페이지"
        component={CaregiverStack}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View>
              <Icon name="chevron-right" color="blue" type="solid" size={24} />
              <Text style={{ marginTop: 5 }} center color={color} size={13}>
                홈
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default () => {
  return (
    <Stack.Navigator
      initialRouteName="TabStack"
      headerMode="none"
      screenOptions={{ gestureEnabled: false }}
      cardStyle={{ backgroundColor: "transparent" }}
    >
      <Stack.Screen name="TabStack" component={TabStack} />
      <Stack.Screen name="CaregiverMain" component={CaregiverMain} />
      <Stack.Screen name="ApplyStack" component={ApplyStack} />
      <Stack.Screen name="HistoryStack" component={HistoryStack} />
      <Stack.Screen name="CaregiverStack" component={CaregiverStack} />
    </Stack.Navigator>
  );
};
