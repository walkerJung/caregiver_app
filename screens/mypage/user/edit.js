import React from "react";
import SectionLayout from "../../../components/layout/SectionLayout";
import { ListGo } from "../../../components/form/ListStyle";
import { useReactiveVar } from "@apollo/client";
import { memberVar } from "../../../apollo";

export default function EditUser({ navigation }) {
  const userInfo = JSON.parse(useReactiveVar(memberVar));
  return (
    <SectionLayout>
      <ListGo
        title="아이디"
        value={userInfo.userId}
        disabled
        error="아이디(ID)는 변경할 수 없습니다."
      />
      <ListGo
        title="이름"
        value={userInfo.userName}
        onPress={() => navigation.navigate("EditNameUser")}
        icon
      />
      <ListGo
        title="비밀번호"
        placeholder="비밀번호 변경"
        value=""
        onPress={() => navigation.navigate("EditPasswordUser")}
        icon
        secureTextEntry
        password
      />
    </SectionLayout>
  );
}
