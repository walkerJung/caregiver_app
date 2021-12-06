import React, { useState } from "react";
import { StatusBar, Text, View } from "react-native";
import MainNavigation from "./mainNavigation";

export default function NavController({ isLoggedIn, userInfo }) {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={"#fff"} />
      <MainNavigation isLoggedIn={isLoggedIn} userInfo={userInfo} />
    </>
  );
}
