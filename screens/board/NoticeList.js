import React, { useState, useEffect } from "react";
import { FlatList, Alert } from "react-native";
import { NotiBox, NotiDate, NotiTitle } from "../../components/form/ListStyle";
import NotiLayout from "../../components/layout/NotiLayout";

const notiData = [
  {
    id: 1,
    notititle: "공지사항 타이틀1",
    notidate: "2021.11.10",
  },
  {
    id: 2,
    notititle: "공지사항 타이틀2",
    notidate: "2021.11.10",
  },
  {
    id: 3,
    notititle: "공지사항 타이틀3",
    notidate: "2021.11.10",
  },
  {
    id: 4,
    notititle: "공지사항 타이틀4",
    notidate: "2021.11.10",
  },
  {
    id: 5,
    notititle: "공지사항 타이틀5",
    notidate: "2021.11.10",
  },
  {
    id: 6,
    notititle: "공지사항 타이틀6",
    notidate: "2021.11.10",
  },
  {
    id: 7,
    notititle: "공지사항 타이틀7",
    notidate: "2021.11.10",
  },
  {
    id: 8,
    notititle: "공지사항 타이틀8",
    notidate: "2021.11.10",
  },
  {
    id: 9,
    notititle: "공지사항 타이틀9",
    notidate: "2021.11.10",
  },
  {
    id: 10,
    notititle: "공지사항 타이틀10",
    notidate: "2021.11.10",
  },
  {
    id: 11,
    notititle: "공지사항 타이틀11",
    notidate: "2021.11.10",
  },
  {
    id: 12,
    notititle: "공지사항 타이틀12",
    notidate: "2021.11.10",
  },
];

export default function NoticeList() {
  const renderNoti = ({ item, index }) => {
    if (index === 0) {
      return (
        <NotiBox
          style={{ borderTopWidth: 1 }}
          activeOpacity={0.7}
          onPress={() => Alert.alert("해당 공지사항으로 넘어갑니다.")}
        >
          <NotiTitle numberOfLines={1} ellipsizeMode="tail">
            {item.notititle}
          </NotiTitle>
          <NotiDate>{item.notidate}</NotiDate>
        </NotiBox>
      );
    } else {
      return (
        <NotiBox
          activeOpacity={0.7}
          onPress={() => Alert.alert("해당 공지사항으로 넘어갑니다.")}
        >
          <NotiTitle numberOfLines={1} ellipsizeMode="tail">
            {item.notititle}
          </NotiTitle>
          <NotiDate>{item.notidate}</NotiDate>
        </NotiBox>
      );
    }
  };

  return (
    <NotiLayout>
      <FlatList
        data={notiData}
        renderItem={renderNoti}
        keyExtractor={(item) => item.id}
      />
    </NotiLayout>
  );
}
