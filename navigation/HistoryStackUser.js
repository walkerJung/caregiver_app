import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import ProgressHistoryUser from "../screens/history/user/ProgressHistory";
import CompleteHistoryUser from "../screens/history/user/CompleteHistory";
import TabBar from "./TabBar";
const Tab = createMaterialTopTabNavigator();

export default function HistoryStackUser() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
        <Tab.Screen
          name="진행 내역"
          component={ProgressHistoryUser}
          options={{ tabBarLabel: "진행 내역" }}
        />
        <Tab.Screen
          name="완료 내역"
          component={CompleteHistoryUser}
          options={{ tabBarLabel: "완료 내역" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
