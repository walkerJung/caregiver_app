import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import ProgressHistoryCaregiver from "../screens/history/caregiver/ProgressHistory";
import CompleteHistoryCaregiver from "../screens/history/caregiver/CompleteHistory";
import FaliHistoryCaregiver from "../screens/history/caregiver/FailHistory";

import TabBar from "./TabBar";
const Tab = createMaterialTopTabNavigator();

export default function HistoryStackCaregiver() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
        <Tab.Screen
          name="진행 내역"
          component={ProgressHistoryCaregiver}
          options={{ tabBarLabel: "진행 내역" }}
        />
        <Tab.Screen
          name="완료 내역"
          component={CompleteHistoryCaregiver}
          options={{ tabBarLabel: "완료 내역" }}
        />
        <Tab.Screen
          name="매칭 실패"
          component={FaliHistoryCaregiver}
          options={{ tabBarLabel: "매칭 실패" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
