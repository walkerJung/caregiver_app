import React, { useState, useCallback, useRef } from "react";
import { View, Text, Alert, Clipboard, TouchableHighlight } from "react-native";
import {
  ScrollView,
  Container,
} from "../../../components/history/HistoryStyle";
import Item from "../../../components/history/user/ProgressHistoryItem";
import Toast from "react-native-easy-toast";
import NoneLayout from "../../../components/layout/NoneLayout";
import { useReactiveVar } from "@apollo/client";
import { memberVar } from "../../../apollo";
import { useQuery } from "@apollo/client";
import { ANNOUNCEMENT_LIST_QUERY } from "../../query";
import moment from "moment";
import { NavigationContainer } from "@react-navigation/native";

export default function ProgressHistoryUser({ navigation }) {
  //timeout의 시간만큼 함수를 지연하고 처리하는 함수 생성
  const wait = (timeout) => {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  };

  // Toast 메세지 출력
  const toastRef = useRef();
  const showCopyToast = useCallback(() => {
    console.log("showCopyToast");
    toastRef.current.show("계좌번호가 복사되었습니다.");
  }, []);
  // 클립보드
  const copyToClipboard = (text) => {
    Clipboard.setString(text);
    showCopyToast();
  };
  const userInfo = JSON.parse(useReactiveVar(memberVar));
  const { data, loading } = useQuery(ANNOUNCEMENT_LIST_QUERY, {
    fetchPolicy: "network-only",
    variables: {
      userCode: userInfo.code,
    },
    pollInterval: 500,
  });

  return (
    <>
      <ScrollView>
        <Container>
          {!loading && data?.listAnnouncement?.announcements.length > 0 ? (
            data?.listAnnouncement?.announcements?.map((item, index) => {
              return (
                <Item
                  key={index}
                  item={item}
                  onPress={() =>
                    navigation.navigate("RecruitHome", {
                      code: item.code,
                    })
                  }
                  navigation={navigation}
                  copyToClipboard={copyToClipboard}
                />
              );
            })
          ) : (
            <NoneLayout />
          )}
        </Container>
      </ScrollView>
      <Toast
        ref={toastRef}
        textStyle={{ color: "white" }}
        positionValue={140}
        fadeInDuration={200}
        fadeOutDuration={1000}
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          borderRadius: 99,
          paddingHorizontal: 10,
        }}
      />
    </>
  );
}
