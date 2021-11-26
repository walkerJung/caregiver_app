import React, { useRef } from "react";
import WriteLayout from "../../../components/layout/WriteLayout";
import {
  FormBox,
  FormLabelBox,
  FormLabel,
  FormInput,
} from "../../../components/join/JoinStyle";
import { SubmitBtn } from "../../../components/form/CareFormStyle";

export default function EditNameUser() {
  const nameRef = useRef();

  return (
    <WriteLayout>
      <FormBox>
        <FormLabelBox>
          <FormLabel>이름 변경</FormLabel>
        </FormLabelBox>
        {/* 기존 이름이 값에 넣어져 있습니다. */}
        <FormInput
          ref={nameRef}
          placeholder="이름"
          retunKeyType="next"
          blurOnSubmit={true}
          value="기존이름"
        />
      </FormBox>

      <SubmitBtn text="수정하기" onPress={() => Alert.alert("수정하기")} />
    </WriteLayout>
  );
}
