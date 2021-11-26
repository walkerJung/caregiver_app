import React from "react";
import { Alert } from "react-native";
import DefulatLayout from "../../../components/layout/DefaultLayout";
import SectionLayout from "../../../components/layout/SectionLayout";
import {
  StepTxtBox,
  StepTxt,
  FormBox,
  FormLabelBox,
  FormLabel,
  FormInput,
} from "../../../components/join/JoinStyle";
import JoinRadio from "../../../components/join/JoinRadio";
import { SubmitBtn } from "../../../components/form/CareFormStyle";

export default function UserRegister() {
  return (
    <DefulatLayout>
      <SectionLayout last>
        <StepTxtBox>
          <StepTxt>기본 정보 입력</StepTxt>
        </StepTxtBox>

        <FormBox>
          <FormLabelBox>
            <FormLabel>아이디(이메일)</FormLabel>
          </FormLabelBox>

          <FormInput
            placeholder="아이디) example@naver.com"
            placeholderTextColor={"#979797"}
            autoCapitalize="none"
            returnKeyType="next"
          />
        </FormBox>

        <FormBox>
          <FormLabelBox>
            <FormLabel>비밀번호</FormLabel>
          </FormLabelBox>
          <FormInput
            placeholder="비밀번호"
            placeholderTextColor={"#979797"}
            secureTextEntry
            returnKeyType="next"
          />
        </FormBox>

        <FormBox>
          <FormLabelBox>
            <FormLabel>비밀번호 확인</FormLabel>
          </FormLabelBox>
          <FormInput
            placeholder="비밀번호 확인"
            placeholderTextColor={"#979797"}
            secureTextEntry
            returnKeyType="next"
          />
        </FormBox>

        <FormBox>
          <FormLabelBox>
            <FormLabel>이름</FormLabel>
          </FormLabelBox>
          <FormInput
            placeholder="이름"
            placeholderTextColor={"#979797"}
            autoCapitalize="none"
            returnKeyType="next"
          />
        </FormBox>

        <FormBox>
          <FormLabelBox>
            <FormLabel>연락처</FormLabel>
          </FormLabelBox>
          <FormInput
            placeholder="연락처"
            placeholderTextColor={"#979797"}
            autoCapitalize="none"
            returnKeyType="next"
          />
        </FormBox>

        <FormBox>
          <FormLabelBox>
            <FormLabel>성별</FormLabel>
          </FormLabelBox>
          <JoinRadio
            lineover={true}
            options={[
              { key: 1, text: "남성" },
              { key: 2, text: "여성" },
            ]}
          />
        </FormBox>

        <SubmitBtn text="회원가입" onPress={() => Alert.alert("회원가입")} />
      </SectionLayout>
    </DefulatLayout>
  );
}
