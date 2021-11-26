import React from "react";
import { Alert, Text } from "react-native";
import SectionLayout from "../../../components/layout/SectionLayout";
import { ListGo } from "../../../components/form/ListStyle";
export default function EditUser() {
  return (
    <SectionLayout>
      <ListGo
        title="아이디(이메일)"
        value="care@naver.com"
        onPress={() => Alert.alert("이름 변경 스크린으로 넘어갑니다.")}
        disabled
        error="이메일 아이디(ID)는 고유값이기 때문에 변경할 수 없습니다."
      />
      <ListGo
        title="비밀번호"
        placeholder="비밀번호 변경"
        value="abcdefgpassword"
        onPress={() => Alert.alert("비밀번호 변경 스크린으로 넘어갑니다.")}
        icon
        secureTextEntry
        password
      />
      <ListGo
        title="이름"
        value="김유저"
        onPress={() => Alert.alert("이름 변경 스크린으로 넘어갑니다.")}
        icon
      />
      <ListGo
        title="성별"
        value="남성"
        onPress={() => Alert.alert("성별 변경 스크린으로 넘어갑니다.")}
        icon
      />
    </SectionLayout>
  );
}
