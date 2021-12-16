import React, { useState } from "react";
import { StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MainNavigation from "./mainNavigation";

export default function NavController({ isLoggedIn, userInfo }) {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" backgroundColor={"#fff"} />
        <MainNavigation isLoggedIn={isLoggedIn} userInfo={userInfo} />
      </SafeAreaView>
    </>
  );
}
