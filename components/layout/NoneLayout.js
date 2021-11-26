import React from "react";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/Ionicons";

export default function NoneLayout() {
  const NoneContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
  `;
  const NoneTxt = styled.Text`
    color: #333;
    font-size: 16px;
    margin-top: 10px;
  `;
  return (
    <NoneContainer>
      <Icon name="shapes-outline" color={"#676767"} size={24} />
      <NoneTxt>등록된 내용이 없습니다.</NoneTxt>
    </NoneContainer>
  );
}
