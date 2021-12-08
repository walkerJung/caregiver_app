import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

import ProgressHistoryCaregiver from "../screens/history/caregiver/ProgressHistory";
import CompleteHistoryCaregiver from "../screens/history/caregiver/CompleteHistory";
import FaliHistoryCaregiver from "../screens/history/caregiver/FailHistory";

import TabBar from "./TabBar";

export default function HistoryStackCaregiver() {
  return (
    <Stack.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Stack.Screen
        name="진행 내역"
        component={ProgressHistoryCaregiver}
        options={{ tabBarLabel: "진행 내역" }}
      />
      <Stack.Screen
        name="완료 내역"
        component={CompleteHistoryCaregiver}
        options={{ tabBarLabel: "완료 내역" }}
      />
      <Stack.Screen
        name="매칭 실패"
        component={FaliHistoryCaregiver}
        options={{ tabBarLabel: "매칭 실패" }}
      />
    </Stack.Navigator>
  );
}
