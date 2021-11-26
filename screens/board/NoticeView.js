import React from "react";
import { Text, View } from "react-native";
import {
  NotiContainer,
  NotiViewHeader,
  NotiViewHeaderTit,
  NotiViewHeaderDate,
  NotiViewBody,
} from "../../components/form/ListStyle";
import NotiLayout from "../../components/layout/NotiLayout";

export default function NoticeView() {
  return (
    <NotiLayout>
      <NotiContainer>
        <NotiViewHeader>
          <NotiViewHeaderTit>공지사항이 들어갑니다.</NotiViewHeaderTit>
          <NotiViewHeaderDate>2021.11.19</NotiViewHeaderDate>
        </NotiViewHeader>
        <NotiViewBody>
          <Text>
            안녕하세요! 여기는 공지사항입니다.{"\n"}내용이 여기에 들어갑니다!!
            {"\n"}
            이게 마지막 작업입니다......
            {"\n"}
          </Text>
        </NotiViewBody>
      </NotiContainer>
    </NotiLayout>
  );
}
