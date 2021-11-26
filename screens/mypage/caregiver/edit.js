import React from "react";
import { Alert, Text } from "react-native";
import SectionLayout from "../../../components/layout/SectionLayout";
import { ListGo } from "../../../components/form/ListStyle";
import FormLayout from "../../../components/form/FormLayout";
import DefaultLayout from "../../../components/layout/DefaultLayout";
import {
  StepNum,
  StepTxt,
  StepTxtBox,
} from "../../../components/join/JoinStyle";
export default function EditCaregiver() {
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
          onPress={() => Alert.alert("주소 변경 스크린으로 넘어갑니다.")}
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
        <ListGo
          title="사전질문 변경"
          value="사전질문 변경하기"
          onPress={() => Alert.alert("사전질문 변경 스크린으로 넘어갑니다.")}
          icon
          last
        />
      </SectionLayout>
    </DefaultLayout>
  );
}
