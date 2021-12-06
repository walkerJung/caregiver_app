import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CaregiverMainScreen from "../screens/main/MainCaregiver";

const Stack = createStackNavigator();

export default function CaregiverMainStack() {
  return (
    <Stack.Navigator
      initialRouteName="CaregiverMainScreen"
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
        name="간병인 메인"
        component={CaregiverMainScreen}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
}
