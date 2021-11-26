import React, { useRef } from "react";
import WriteLayout from "../../../components/layout/WriteLayout";
import {
  FormBox,
  FormLabelBox,
  FormLabel,
  FormInput,
} from "../../../components/join/JoinStyle";
import {
  FlexRow,
  LeftBtnBox,
  RightBtnBox,
  SearchBtn,
  SearchInput,
  SubmitBtn,
} from "../../../components/form/CareFormStyle";
import { TouchableOpacity, Text } from "react-native";
import { careTheme } from "../../../contents";

export default function EditAddressCaregiver() {
  return (
    <WriteLayout>
      <FormBox>
        <FormLabelBox>
          <FormLabel>주소 변경</FormLabel>
        </FormLabelBox>
        <FlexRow>
          <LeftBtnBox>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => Alert.alert("여길 누르면 주소 창 검색이 뜹니다!")}
            >
              <SearchInput
                placeholder="주소를 입력해주세요."
                placeholderTextColor={"#676767"}
                keyboardType="default"
                editable={false}
              />
            </TouchableOpacity>
          </LeftBtnBox>
          <RightBtnBox>
            <SearchBtn
              activeOpacity={0.8}
              onPress={() =>
                Alert.alert("여기도 누르면 주소 창 검색이 뜹니다!")
              }
            >
              <Text
                style={{
                  fontSize: 14,
                  color: careTheme.COLORS.PRIMARY,
                  fontWeight: "bold",
                }}
              >
                주소찾기
              </Text>
            </SearchBtn>
          </RightBtnBox>
        </FlexRow>
        <FormInput
          placeholder="상세주소"
          placeholderTextColor={"#979797"}
          keyboardType="default"
        />
      </FormBox>

      <SubmitBtn text="수정하기" onPress={() => Alert.alert("수정하기")} />
    </WriteLayout>
  );
}
