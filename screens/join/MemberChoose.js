import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser } from "@fortawesome/pro-light-svg-icons";
import {
  FullContainer,
  MemberTitleBox,
  MemberTitle,
  MemberIcon,
  MemberBtn,
  MemberBtnTxt,
} from "../../components/join/JoinStyle";

export default function MemberChoose() {
  return (
    <FullContainer>
      <MemberTitleBox>
        <MemberIcon>
          <FontAwesomeIcon icon={faUser} size={16} style={{ color: "#fff" }} />
        </MemberIcon>
        <MemberTitle>회원가입 유형을</MemberTitle>
        <MemberTitle>선택해주세요.</MemberTitle>
      </MemberTitleBox>
      <MemberBtn activeOpacity={0.7}>
        <MemberBtnTxt>일반인</MemberBtnTxt>
      </MemberBtn>
      <MemberBtn activeOpacity={0.7}>
        <MemberBtnTxt>간병인</MemberBtnTxt>
      </MemberBtn>
    </FullContainer>
  );
}
