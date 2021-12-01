import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MemberType from "../screens/join/MemberChoose";
import CaregiverJoin from "../screens/join/caregiver/Register";
import PatientJoin from "../screens/join/user/Register";

const Stack = createStackNavigator();

export default function AuthJoinStack() {
  return (
    <Stack.Navigator
      initialRouteName="MemberType"
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
        name="회원유형 선택"
        component={MemberType}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="CaregiverJoin"
        component={CaregiverJoin}
        options={{
          headerShown: true,
          title: "간병인회원 정보입력",
        }}
      />
      <Stack.Screen
        name="PatientJoin"
        component={PatientJoin}
        options={{
          headerShown: true,
          title: "환자회원 정보입력",
        }}
      />
    </Stack.Navigator>
  );
}
