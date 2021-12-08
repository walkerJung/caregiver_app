import React from "react";
import { Alert } from "react-native";
import DefulatLayout from "../../../components/layout/DefaultLayout";
import {
  Container,
  MypageHeader,
  MypageHeaderTit,
  MypageList,
  Tell,
} from "../../../components/mypage/mypageStyle";

export default function MypageCaregiver({ navigation }) {
  return (
    <DefulatLayout>
      <Container>
        <MypageHeader>
          <MypageHeaderTit>김케어님,{"\n"}반갑습니다!</MypageHeaderTit>
        </MypageHeader>

        <>
          <MypageList
            title="내 정보 수정"
            onPress={() => {
              navigation.navigate("EditCaregiver");
            }}
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
