import React from "react";
import {
  FullContainer,
  MemberTitleBox,
  MemberTitle,
  MemberIcon,
  MemberBtn,
  MemberBtnTxt,
} from "../../components/join/JoinStyle";

export default function MemberChoose({ navigation }) {
  return (
    <FullContainer>
      <MemberTitleBox>
        <MemberTitle>회원가입 유형을</MemberTitle>
        <MemberTitle>선택해주세요.</MemberTitle>
      </MemberTitleBox>
      <MemberBtn
        activeOpacity={0.7}
        onPress={() => {
          navigation.navigate("PatientJoin");
        }}
      >
        <MemberBtnTxt>환자 회원</MemberBtnTxt>
      </MemberBtn>
      <MemberBtn
        activeOpacity={0.7}
        onPress={() => {
          navigation.navigate("CaregiverJoin");
        }}
      >
        <MemberBtnTxt>간병인 회원</MemberBtnTxt>
      </MemberBtn>
    </FullContainer>
  );
}
