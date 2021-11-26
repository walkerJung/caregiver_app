import React, { useRef } from "react";
import WriteLayout from "../../../components/layout/WriteLayout";
import {
  FormBox,
  FormLabelBox,
  FormLabel,
  FormInput,
} from "../../../components/join/JoinStyle";
import { SubmitBtn } from "../../../components/form/CareFormStyle";

export default function EditPasswordUser() {
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const onNext = (nextOne) => {
    nextOne?.current?.focus();
  };

  return (
    <WriteLayout>
      <FormBox>
        <FormLabelBox>
          <FormLabel>비밀번호</FormLabel>
        </FormLabelBox>
        <FormInput
          ref={passwordRef}
          placeholder="비밀번호"
          secureTextEntry={true}
          password={true}
          retunKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => onNext(confirmPasswordRef)}
        />
      </FormBox>
      <FormBox>
        <FormLabelBox>
          <FormLabel>비밀번호 확인</FormLabel>
        </FormLabelBox>
        <FormInput
          ref={confirmPasswordRef}
          placeholder="비밀번호 확인"
          secureTextEntry={true}
          password={true}
          retunKeyType="next"
          blurOnSubmit={true}
        />
      </FormBox>

      <SubmitBtn text="수정하기" onPress={() => Alert.alert("수정하기")} />
    </WriteLayout>
  );
}
