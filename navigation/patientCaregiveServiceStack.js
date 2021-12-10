import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProgressHistoryUser from "../screens/history/user/ProgressHistory";
import CompleteHistoryUser from "../screens/history/user/CompleteHistory";
import RecruitHome from "../screens/recruit";

const Stack = createStackNavigator();

export default function PatientCaregiveServiceStack() {
  return (
    <Stack.Navigator
      initialRouteName="ProgressHistoryUser"
      screenOptions={{
        headerShown: true,
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
      <Stack.Screen
        name="ProgressHistoryUser"
        component={ProgressHistoryUser}
        options={{
          headerShown: true,
          title: "간병 서비스",
        }}
      />

      <Stack.Screen
        name="CompleteHistoryUser"
        component={CompleteHistoryUser}
        options={{
          headerShown: false,
          title: "간병 서비스 완료 목록",
        }}
      />

      <Stack.Screen
        name="RecruitHome"
        component={RecruitHome}
        options={{
          headerShown: true,
          title: "공고 확인",
        }}
      />
    </Stack.Navigator>
  );
}
