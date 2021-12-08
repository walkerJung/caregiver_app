import React, { useState } from "react";
import SectionLayout from "../../../components/layout/SectionLayout";
import Modal from "react-native-modal";
import FormLayout from "../../../components/form/FormLayout";
import DefaultLayout from "../../../components/layout/DefaultLayout";

import { View, Alert, Text, TouchableOpacity, Dimensions } from "react-native";
import { ListGo } from "../../../components/form/ListStyle";
import { ListUpload } from "../../../components/form/UploadStyle";

import {
  StepNum,
  StepTxt,
  StepTxtBox,
} from "../../../components/join/JoinStyle";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

const { width, height } = Dimensions.get("screen");

export const GoModal = styled(Modal)`
  display: flex;
  flex: 1 0 auto;
  justify-content: flex-end;
  margin: 0;
`;
export const ModalPanel = styled.View`
  display: flex;
  background-color: #fff;
`;
export const ModalHeader = styled.View`
  display: flex;
  height: 50px;
  justify-content: center;
  background-color: #fff;
`;
export const ModalBody = styled.View`
  display: flex;
  background-color: #fff;
`;
export default function EditCaregiver({ navigation }) {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <DefaultLayout>
      <SectionLayout>
        <StepTxtBox>
          <StepNum>기본정보</StepNum>
        </StepTxtBox>
        <ListGo
          title="아이디(이메일)"
          value="care@naver.com"
          disabled
          error="이메일 아이디(ID)는 고유값이기 때문에 변경할 수 없습니다."
        />
        <ListGo
          title="비밀번호"
          placeholder="비밀번호 변경"
          value="abcdefgpassword"
          onPress={() => {
            navigation.navigate("EditPasswordCaregiver");
          }}
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
          onPress={() => {
            navigation.navigate("EditGenderCaregiver");
          }}
          icon
          last
        />
      </SectionLayout>

      <SectionLayout>
        <StepTxtBox>
          <StepNum>상세정보</StepNum>
        </StepTxtBox>
        <ListGo
          title="실거주주소"
          value="부산광역시 강서구 녹산산단382로14번가길 10~29번지"
          onPress={() => {
            navigation.navigate("EditAddressCaregiver");
          }}
          icon
          multiline
        />
        <ListGo
          title="주민등록번호"
          value="800918-1400000"
          icon
          disabled
          error="주민등록번호는 수정이 필요한 경우, 케어코리아에 문의주세요."
        />
        <ListUpload title="주민등록증" icon text="파일첨부" />
        <ListUpload title="통장사본 첨부" icon text="파일첨부" />
        <ListGo
          title="통장사본"
          value="사진 업로드"
          onPress={() => Alert.alert("사전질문 변경 스크린으로 넘어갑니다.")}
          icon
          last
        />
      </SectionLayout>
    </DefaultLayout>
  );
}
