import React, { useState, useCallback, useRef } from "react";
import { View, Text, RefreshControl, Alert, Clipboard } from "react-native";
import {
  ScrollView,
  Container,
} from "../../../components/history/HistoryStyle";
import Item from "../../../components/history/caregiver/FailHistoryItem";

//timeout의 시간만큼 함수를 지연하고 처리하는 함수 생성
const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};
export default function FaliHistoryCaregiver() {
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
            />
          ))}
        </Container>
      </ScrollView>
    </>
  );
}
