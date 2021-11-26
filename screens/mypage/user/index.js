import React from "react";
import { Alert, Dimensions, Text, View } from "react-native";
import DefulatLayout from "../../../components/layout/DefaultLayout";
import {
  Container,
  MypageHeader,
  MypageHeaderTit,
  MypageList,
  Tell,
} from "../../../components/mypage/mypageStyle";

const { width, height } = Dimensions.get("screen");
export default function MypageUser() {
  return (
    <DefulatLayout>
      <Container>
        <MypageHeader>
          <MypageHeaderTit>김보호님,{"\n"}반갑습니다!</MypageHeaderTit>
        </MypageHeader>

        <>
          <MypageList
            title="내 정보 수정"
            onPress={() => Alert.alert("내 정보 수정으로 이동")}
          />
          <MypageList
            title="공지사항"
            onPress={() => Alert.alert("공지사항으로 이동")}
          />
        </>

        <Tell title="고객센터" number="1588-0000" />
      </Container>
    </DefulatLayout>
  );
}
