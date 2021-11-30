import React, { useState } from "react";
import { StatusBar, Text, View } from "react-native";
import MainNavigation from "./mainNavigation";
import AppLoading from "expo-app-loading";

export default function NavController() {
  const [loading, setLoading] = useState(false);
  if (loading) {
    return <AppLoading />;
  } else {
    return (
      <>
        <StatusBar barStyle="dark-content" backgroundColor={"#fff"} />
        <MainNavigation />
      </>
    );
  }
}
