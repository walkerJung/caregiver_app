import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faBallot,
  faHeart,
  faHome,
  faUser,
} from "@fortawesome/pro-light-svg-icons";
import AuthStack from "./authStack";
import PatientMypageStack from "./patientMypageStack";
import PatientMainStack from "./patientMainStack";
import PatientCaregiveServiceStack from "./patientCaregiveServiceStack";
import CaregiverMainStack from "./caregiverMainStack";
import CaregiverApplyStack from "./caregiverApplyStack";
import Intro from "../screens/intro";
import HistoryStackCaregiver from "../navigation/HistoryStackCaregiver";
import careglverMypageStack from "../navigation/careglverMypageStack";
import { careTheme } from "../contents";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function MainNavigation({ isLoggedIn, userInfo }) {
  return (
    <NavigationContainer>
      {isLoggedIn && userInfo ? (
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: "600",
              marginTop: -5,
            },
            tabBarBadgeStyle: {
              fontSize: 11,
            },
            tabBarActiveTintColor: careTheme.COLORS.PRIMARY,
            tabBarInactiveTintColor: "#212121",
            // headerStyle: {
            //   backgroundColor: careTheme.COLORS.PRIMARY,
            // },
            // headerTitleStyle: {
            //   color: careTheme.COLORS.PRIMARY,
            // },
          }}
          // options={{
          //   tabBarShowLabel: false,
          // }}
          tabBarOptions={{
            activeTintColor: careTheme.COLORS.PRIMARY,
            inactiveTintColor: "#212121",
          }}
        >
          {JSON.parse(userInfo).userType === "환자" ? (
            <>
              <Tab.Screen
                name="메인"
                component={PatientMainStack}
                options={{
                  headerShown: false,
                  tabBarIcon: ({ color, size }) => (
                    <View>
                      <FontAwesomeIcon icon={faHome} color={color} size={23} />
                    </View>
                  ),
                }}
              />
              <Tab.Screen
                name="간병 서비스"
                component={PatientCaregiveServiceStack}
                options={{
                  headerShown: false,
                  tabBarIcon: ({ color, size, focused }) => (
                    <View>
                      <FontAwesomeIcon icon={faHeart} color={color} size={20} />
                    </View>
                  ),
                }}
              />
              <Tab.Screen
                name="마이페이지"
                component={PatientMypageStack}
                options={{
                  headerShown: false,
                  tabBarIcon: ({ color, size, focus }) => (
                    <View>
                      <FontAwesomeIcon
                        icon={faUser}
                        color={color}
                        focus={"#333"}
                        size={20}
                      />
                    </View>
                  ),
                }}
              />
            </>
          ) : (
            <>
              <Tab.Screen
                name="메인"
                component={CaregiverMainStack}
                options={{
                  headerShown: false,
                  tabBarIcon: ({ color, size }) => (
                    <View>
                      <FontAwesomeIcon icon={faHome} color={color} size={23} />
                    </View>
                  ),
                }}
              />
              <Tab.Screen
                name="신청 내역"
                component={HistoryStackCaregiver}
                options={{
                  headerShown: false,
                  tabBarIcon: ({ color, size }) => (
                    <View>
                      <FontAwesomeIcon
                        icon={faBallot}
                        color={color}
                        size={20}
                      />
                    </View>
                  ),
                }}
              />
              <Tab.Screen
                name="마이페이지"
                component={careglverMypageStack}
                options={{
                  headerShown: false,
                  tabBarIcon: ({ color, size }) => (
                    <View>
                      <FontAwesomeIcon icon={faUser} color={color} size={20} />
                    </View>
                  ),
                }}
              />
            </>
          )}
        </Tab.Navigator>
      ) : (
        <>
          <Stack.Navigator
            initialRouteName="IntroScreen"
            screenOptions={{
              headerShown: false,
              gestureEnabled: false,
              headerTintColor: "white",
              headerBackTitleVisible: false,
              headerStyle: {
                borderBottomWidth: 1,
                borderBottomColor: "#F0F0F0",
                elevation: 0, //for android
                shadowOpacity: 0, // for ios
              },
            }}
            cardStyle={{ backgroundColor: "transparent" }}
          >
            <Stack.Screen name="IntroScreen" component={Intro} />
            <Stack.Screen name="LoginScreen" component={AuthStack} />
          </Stack.Navigator>
        </>
      )}
    </NavigationContainer>
  );
}
