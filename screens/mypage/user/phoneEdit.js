import React, { useRef } from "react";
import WriteLayout from "../../../components/layout/WriteLayout";
import {
  FormBox,
  FormLabelBox,
  FormLabel,
  FormInput,
} from "../../../components/join/JoinStyle";
import { SubmitBtn } from "../../../components/form/CareFormStyle";
import { View, TextInput } from "react-native";

export default function EditPhoneUser() {
  const phoneRef = useRef();

  return (
    <WriteLayout>
      <FormBox>
        <FormLabelBox>
          <FormLabel>연락처 변경</FormLabel>
        </FormLabelBox>
        {/* 기존 이름이 값에 넣어져 있습니다. */}
        <FormInput
          ref={phoneRef}
          placeholder="연락처"
          keyboardType="numeric"
          blurOnSubmit={true}
          value="기존연락처"
        />
      </FormBox>

      <SubmitBtn text="수정하기" onPress={() => Alert.alert("수정하기")} />
    </WriteLayout>
  );
}
