import React, { useState, useCallback, useRef } from "react";
import {
  View,
  Text,
  RefreshControl,
  Alert,
  Clipboard,
  TouchableHighlight,
} from "react-native";
import {
  ScrollView,
  Container,
} from "../../../components/history/HistoryStyle";
import Item from "../../../components/history/caregiver/ProgressHistoryItem";
import Toast from "react-native-easy-toast";
import NoneLayout from "../../../components/layout/NoneLayout";

//timeout의 시간만큼 함수를 지연하고 처리하는 함수 생성
const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};
export default function ProgressHistoryCaregiver() {
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

  // 새로고침 시작
  const [refreshing, setRefreshing] = useState(false);

  //refreshcontrol을 호출할 때 실행되는 callback함수
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);

  const data = [{ key: 0, status: 0 }];
  return (
    <>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Container>
          {data.map((item) => (
            <Item
              key="item.key"
              item={item}
              onPress={() => Alert.alert("각 공고로 이동합니다.")}
              copyToClipboard={copyToClipboard}
            />
          ))}

          {/* 등록된 내역이 없으면 nonelayout이 나옵니다. */}
          {/* <NoneLayout /> */}
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
