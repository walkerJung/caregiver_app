import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PatientMainScreen from "../screens/main/Main";
import Icon from "react-native-fontawesome-pro";

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();
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
export default function PatientMainStack() {
  return (
    <NavigationContainer>
      <Tab.Navigator
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
        <Tab.Screen name="환자 메인" component={PatientMainScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
