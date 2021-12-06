import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import CareApplyIndex from "../screens/CareApply/CareApplyIndex";
import CareApplyForm from "../screens/CareApply/CareApplyForm";
import Main from "../screens/Main";
import CareList from "../screens/CareList";
import MyPageIndex from "../screens/MyPageIndex";
import Icon from "react-native-vector-icons/Ionicon";

const MainNav = createStackNavigator();
const MainStack = createStackNavigator();
const CareApplyStack = createStackNavigator();
const CareListStack = createStackNavigator();
const MypageStack = createStackNavigator();

const Tab = createBottomTabNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Main"
        component={Main}
        options={{ headerShown: false }}
      />
      <MainStack.Screen name="간병 서비스 신청" component={CareApplyIndex} />
    </MainStack.Navigator>
  );
};
const CareApplyScreen = () => {
  return (
    <CareApplyStack.Navigator>
      <CareApplyStack.Screen
        name="CareApplyIndex"
        component={CareApplyIndex}
        options={{ title: "간병인 신청" }}
      />
    </CareApplyStack.Navigator>
  );
};
const CareListScreen = () => {
  return (
    <CareListStack.Navigator>
      <CareListStack.Screen
        name="CareList"
        component={CareList}
        options={{ title: "간병내역" }}
      />
    </CareListStack.Navigator>
  );
};
const MypageScreen = () => {
  return (
    <MypageStack.Navigator>
      <MypageStack.Screen
        name="MyPageIndex"
        component={MyPageIndex}
        options={{ title: "마이페이지" }}
      />
    </MypageStack.Navigator>
  );
};

const TabStack = ({}) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="MainStackScreen"
        component={MainStackScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon icon="home-outline" color={color} size={23} />
          ),
          title: "메인",
        }}
      />
      <Tab.Screen
        name="CareApplyScreen"
        component={CareApplyScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon icon="heart-outline" color={color} size={20} />
          ),
          title: "간병인 신청",
        }}
      />
      <Tab.Screen
        name="CareListScreen"
        component={CareListScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon icon="reader-outline" color={color} size={20} />
          ),
          title: "간병내역",
        }}
      />
      <Tab.Screen
        name="MypageScreen"
        component={MypageScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon icon="person-outline" color={color} size={20} />
          ),
          title: "마이페이지",
        }}
      />
    </Tab.Navigator>
  );
};

const NavigationStack = () => {
  return (
    <MainNav.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainNav.Screen name="TabStack" component={TabStack} />
      <MainNav.Screen
        name="CareApplyForm"
        component={CareApplyForm}
        options={{ headerShown: true, title: false }}
      />
    </MainNav.Navigator>
  );
};

export default NavigationStack;
