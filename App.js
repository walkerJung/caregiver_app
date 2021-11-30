import AppLoading from "expo-app-loading";
import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { ApolloProvider, useReactiveVar } from "@apollo/client";
import client, {
  isLoggedInVar,
  tokenVar,
  memberVar,
  checkFirstLaunch,
} from "./apollo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NavController from "./navigation/navController";

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f5f5f5;
`;

export default function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const isMember = useReactiveVar(memberVar);
  const [loaded, setLoaded] = useState(false);

  const [ModalVisible, setModalVisible] = useState(false);
  const ModalVisibleToggleModal = () => {
    setModalVisible(!ModalVisible);
  };

  const preLoad = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      const member = await AsyncStorage.getItem("member");
      if (token) {
        isLoggedInVar(true);
        tokenVar(token);
        memberVar(member);
      }

      const isFirstLaunch = await checkFirstLaunch();
      if (isFirstLaunch) {
        ModalVisibleToggleModal();
      }

      setLoaded(true);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    preLoad();
  }, []);

  return loaded ? (
    <ApolloProvider client={client}>
      {/* <Container> */}
      <NavController />
      {/* </Container> */}
    </ApolloProvider>
  ) : (
    <AppLoading />
  );
}
