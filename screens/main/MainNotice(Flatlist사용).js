import React from "react";
import { MainNotiItem, MainNotiTitle } from "../../components/form/ListStyle";
import { FlatList, Alert } from "react-native";

const notiData = [
  {
    id: 1,
    notititle: "[안내] 공지 안내드립니다.",
  },
  {
    id: 2,
    notititle:
      "[점검] 간병서비스 일시 중단 안내 오전7:00부터 오전 9:00까지 긴급점검을 합니다.",
  },
  {
    id: 3,
    notititle: "케어코리아 APP 출시 이벤트",
  },
  {
    id: 4,
    notititle: "케어코리아 사용설명서",
  },
];

export default function MainNotice() {
  const renderNoti = ({ item, index }) => {
    if (index === 3) {
      return (
        <MainNotiItem
          style={{ borderBottomWidth: 0 }}
          activeOpacity={0.7}
          onPress={() => Alert.alert("해당 공지사항으로 넘어갑니다.")}
        >
          <MainNotiTitle numberOfLines={1} ellipsizeMode="tail">
            {item.notititle}
          </MainNotiTitle>
        </MainNotiItem>
      );
    } else {
      return (
        <MainNotiItem
          activeOpacity={0.7}
          onPress={() => Alert.alert("해당 공지사항으로 넘어갑니다.")}
        >
          <MainNotiTitle numberOfLines={1} ellipsizeMode="tail">
            {item.notititle}
          </MainNotiTitle>
        </MainNotiItem>
      );
    }
  };

  return (
    <FlatList
      data={notiData}
      renderItem={renderNoti}
      keyExtractor={(item) => item.id}
    />
  );
}
