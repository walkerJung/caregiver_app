import React, { useState } from "react";
import {
  FormBox,
  FormLabelBox,
  FormLabel,
  FormInput,
} from "../../components/join/JoinStyle";
import { SubmitBtn } from "../../components/form/CareFormStyle";
import WriteLayout from "../../components/layout/WriteLayout";
import { Alert } from "react-native";
import { useQuery } from "@apollo/client";
import { FIND_PASSWORD_QUERY } from "../query";

export default function PasswordFind() {
  const [userId, setUserId] = useState();
  const [userName, setUserName] = useState();
  const [phone, setPhone] = useState();
  const { data, loading } = useQuery(FIND_PASSWORD_QUERY, {
    fetchPolicy: "network-only",
    variables: {
      userId,
      userName,
      phone,
    },
  });
  return (
    <WriteLayout>
      <FormBox>
        <FormLabelBox>
          <FormLabel>아이디</FormLabel>
        </FormLabelBox>
        <FormInput
          placeholder="아이디를 입력해주세요."
          retunKeyType="next"
          value={userId}
          onChangeText={(text) => {
            setUserId(text);
          }}
        />
      </FormBox>
      <FormBox>
        <FormLabelBox>
          <FormLabel>이름</FormLabel>
        </FormLabelBox>
        <FormInput
          placeholder="이름을 입력해주세요."
          retunKeyType="next"
          value={userName}
          onChangeText={(text) => {
            setUserName(text);
          }}
        />
      </FormBox>
      <FormBox>
        <FormLabelBox>
          <FormLabel>핸드폰 번호</FormLabel>
        </FormLabelBox>
        <FormInput
          placeholder="핸드폰 번호를 입력해주세요."
          keyboardType="numeric"
          blurOnSubmit={true}
          value={phone}
          onChangeText={(text) => {
            setPhone(text);
          }}
        />
      </FormBox>

      <SubmitBtn
        text="비밀번호 찾기"
        onPress={() => {
          !loading && data
            ? Alert.alert(
                "회원님의 비밀번호를 'password' 로 초기화 하였습니다. 로그인 후 비밀번호를 변경해주세요."
              )
            : Alert.alert(
                "입력하신 정보와 일치하는 회원정보가 없습니다. 다시 확인해주세요."
              );
        }}
      />
    </WriteLayout>
  );
}
