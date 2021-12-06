import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PatientMainScreen from "../screens/main/Main";

const Stack = createStackNavigator();

export default function PatientMainStack() {
  return (
    <Stack.Navigator
      initialRouteName="PatientMainScreen"
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
      <Stack.Screen name="환자 메인" component={PatientMainScreen} />
    </Stack.Navigator>
  );
}
