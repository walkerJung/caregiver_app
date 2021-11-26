import React, { useState } from "react";
import { Alert, TouchableOpacity, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import DefulatLayout from "../../../components/layout/DefaultLayout";
import SectionLayout from "../../../components/layout/SectionLayout";
import {
  StepTxtBox,
  StepNum,
  StepTxt,
  FormBox,
  FormLabelBox,
  FormLabel,
  FormInput,
  PhotoBox,
  Textarea,
} from "../../../components/join/JoinStyle";
import JoinRadio from "../../../components/join/JoinRadio";
import {
  FormTitle,
  FormSubLabel,
  FlexRow,
  LeftBtnBox,
  RightBtnBox,
  SearchBtn,
  SearchInput,
  ErrorsText,
  SubmitBtn,
} from "../../../components/form/CareFormStyle";
import { careTheme } from "../../../contents";

import DateTimePickerModal from "react-native-modal-datetime-picker";
import RNPickerSelect from "react-native-picker-select";
import { FlexBoth } from "../../../components/form/ListStyle";

// datepicker 시작
Date.prototype.format = function (f) {
  if (!this.valueOf()) return " ";

  var weekName = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];
  var d = this;

  return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function ($1) {
    switch ($1) {
      case "yyyy":
        return d.getFullYear();
      case "yy":
        return (d.getFullYear() % 1000).zf(2);
      case "MM":
        return (d.getMonth() + 1).zf(2);
      case "dd":
        return d.getDate().zf(2);
      case "E":
        return weekName[d.getDay()];
      case "HH":
        return d.getHours().zf(2);
      case "hh":
        return ((h = d.getHours() % 12) ? h : 12).zf(2);
      case "mm":
        return d.getMinutes().zf(2);
      case "ss":
        return d.getSeconds().zf(2);
      case "a/p":
        return d.getHours() < 12 ? "오전" : "오후";
      default:
        return $1;
    }
  });
};
String.prototype.string = function (len) {
  var s = "",
    i = 0;
  while (i++ < len) {
    s += this;
  }
  return s;
};
String.prototype.zf = function (len) {
  return "0".string(len - this.length) + this;
};
Number.prototype.zf = function (len) {
  return this.toString().zf(len);
};
// datepicker 끝

export default function CaregiverRegister() {
  // datepicker 동작 시작
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [DateText, onChangeDate] = useState("");
  const [TimeText, onChangeTime] = useState("");

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    hideDatePicker();
    onChangeDate(date.format("yyyy/MM/dd"));
  };
  const handleTimeConfirm = (date) => {
    hideTimePicker();
    onChangeTime(date.format("HH:mm"));
  };
  // datepicker 동작 끝

  // 셀렉트 박스 시작
  const [SelectText, setSelectText] = useState("");
  const onChangeSelectText = (value) => {
    setSelectText(value);
  };

  return (
    <DefulatLayout>
      <SectionLayout>
        <StepTxtBox>
          <StepNum>Step1</StepNum>
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
            keyboardType="numeric"
            autoCapitalize="none"
            returnKeyType="next"
          />
        </FormBox>

        <FormBox last>
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
      </SectionLayout>

      <SectionLayout>
        <StepTxtBox>
          <StepNum>Step2</StepNum>
          <StepTxt>간병인 등록 정보 입력</StepTxt>
        </StepTxtBox>

        <FormBox>
          <FormLabelBox>
            <FormLabel>실거주주소</FormLabel>
          </FormLabelBox>
          <FlexRow>
            <LeftBtnBox>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() =>
                  Alert.alert("여길 누르면 주소 창 검색이 뜹니다!")
                }
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

          {/* 상세주소 입력하는 input */}
          <FormInput
            placeholder="상세주소"
            placeholderTextColor={"#979797"}
            keyboardType="default"
          />
        </FormBox>

        <FormBox>
          <FormLabelBox>
            <FormLabel>주민등록번호 or (외국인등록번호)</FormLabel>
          </FormLabelBox>
          <FlexBoth style={{ alignItems: "center" }}>
            <FormInput
              placeholder="앞 번호 6자리"
              placeholderTextColor={"#979797"}
              keyboardType="numeric"
              returnKeyType="next"
              maxLength={6}
              style={{ flex: 1, marginRight: 5 }}
            />
            <Text>-</Text>
            <FormInput
              placeholder="뒷 번호 7자리"
              placeholderTextColor={"#979797"}
              keyboardType="numeric"
              returnKeyType="next"
              secureTextEntry
              maxLength={7}
              style={{ flex: 1, marginLeft: 5 }}
            />
          </FlexBoth>
        </FormBox>

        <FormBox>
          <FormLabelBox>
            <FormLabel>신분증 사진 or (외국인등록증)</FormLabel>
          </FormLabelBox>
          <PhotoBox onPress={() => Alert.alert("갤러리 보관함이 열립니다.")}>
            {/* 여기는 등록전 입니다. */}
            <Icon name="add-outline" size={23} style={{ color: "#979797" }} />
          </PhotoBox>
        </FormBox>

        <FormBox>
          <FormLabelBox>
            <FormLabel>통장사본 사진</FormLabel>
          </FormLabelBox>
          <PhotoBox>
            {/* 여기는 등록 후 입니다. */}
            <Image
              style={{ width: "100%", height: "100%" }}
              source={require("../../../assets/img/test_img.jpg")}
              resizeMode={"contain"}
            />
          </PhotoBox>
        </FormBox>
      </SectionLayout>

      <SectionLayout last>
        <StepTxtBox>
          <StepNum>Step3</StepNum>
          <StepTxt>간병인 사전질문</StepTxt>
        </StepTxtBox>

        <FormBox>
          <FormLabelBox>
            <FormLabel>가능한 식사케어는?</FormLabel>
          </FormLabelBox>
          <RNPickerSelect
            useNativeAndroidPickerStyle={false}
            fixAndroidTouchableBug={true}
            placeholder={{
              label: "선택",
              color: "#979797",
            }}
            value={SelectText}
            onValueChange={(value) => onChangeSelectText(value)}
            items={[
              { label: "콧줄 식사케어 ", value: "콧줄 식사케어 " },
              { label: "뱃줄 식사케어", value: "뱃줄 식사케어" },
              { label: "전적으로 먹여줌", value: "전적으로 먹여줌" },
            ]}
            doneText="선택"
            Icon={() => {
              return (
                <Icon name="caret-down-outline" size={15} color="#676767" />
              );
            }}
            style={{
              ...pickerSelectStyles,
              iconContainer: { top: 20, right: 10 },
            }}
          />
        </FormBox>

        <FormBox>
          <FormLabelBox>
            <FormLabel>가능한 대소변 케어는?</FormLabel>
          </FormLabelBox>
          <RNPickerSelect
            useNativeAndroidPickerStyle={false}
            fixAndroidTouchableBug={true}
            placeholder={{
              label: "선택",
              color: "#979797",
            }}
            value={SelectText}
            onValueChange={(value) => onChangeSelectText(value)}
            items={[
              { label: "소변주머니 케어", value: "소변주머니 케어" },
              { label: "장루 케어", value: "장루 케어" },
              { label: "기저귀 케어", value: "기저귀 케어" },
              { label: "이동변기 케어", value: "이동변기 케어" },
              { label: "소변통 케어", value: "소변통 케어" },
              { label: "관장", value: "관장" },
            ]}
            doneText="선택"
            Icon={() => {
              return (
                <Icon name="caret-down-outline" size={15} color="#676767" />
              );
            }}
            style={{
              ...pickerSelectStyles,
              iconContainer: { top: 20, right: 10 },
            }}
          />
        </FormBox>

        <FormBox>
          <FormLabelBox>
            <FormLabel>가능한 석션 케어는?</FormLabel>
          </FormLabelBox>
          <RNPickerSelect
            useNativeAndroidPickerStyle={false}
            fixAndroidTouchableBug={true}
            placeholder={{
              label: "선택",
              color: "#979797",
            }}
            value={SelectText}
            onValueChange={(value) => onChangeSelectText(value)}
            items={[
              { label: "목 석션", value: "목 석션" },
              { label: "코 석션", value: "코 석션" },
              { label: "입 석션", value: "입 석션" },
            ]}
            doneText="선택"
            Icon={() => {
              return (
                <Icon name="caret-down-outline" size={15} color="#676767" />
              );
            }}
            style={{
              ...pickerSelectStyles,
              iconContainer: { top: 20, right: 10 },
            }}
          />
        </FormBox>

        <FormBox>
          <FormLabelBox>
            <FormLabel>가능한 이동케어는?</FormLabel>
          </FormLabelBox>
          <RNPickerSelect
            useNativeAndroidPickerStyle={false}
            fixAndroidTouchableBug={true}
            placeholder={{
              label: "선택",
              color: "#979797",
            }}
            value={SelectText}
            onValueChange={(value) => onChangeSelectText(value)}
            items={[
              { label: "휠체어 이동케어", value: "휠체어 이동케어" },
              { label: "지팡이 보행 이동케어", value: "지팡이 보행 이동케어" },
              { label: "워커보행 이동케어", value: "워커보행 이동케어" },
            ]}
            doneText="선택"
            Icon={() => {
              return (
                <Icon name="caret-down-outline" size={15} color="#676767" />
              );
            }}
            style={{
              ...pickerSelectStyles,
              iconContainer: { top: 20, right: 10 },
            }}
          />
        </FormBox>

        <FormBox>
          <FormLabelBox>
            <FormLabel>가능한 침대케어는?</FormLabel>
          </FormLabelBox>
          <RNPickerSelect
            useNativeAndroidPickerStyle={false}
            fixAndroidTouchableBug={true}
            placeholder={{
              label: "선택",
              color: "#979797",
            }}
            value={SelectText}
            onValueChange={(value) => onChangeSelectText(value)}
            items={[
              {
                label: "침대에서 휠체어 이동케어",
                value: "침대에서 휠체어 이동케어",
              },
              { label: "체위(자세)변경", value: "체위(자세)변경" },
              { label: "욕창관리", value: "욕창관리" },
            ]}
            doneText="선택"
            Icon={() => {
              return (
                <Icon name="caret-down-outline" size={15} color="#676767" />
              );
            }}
            style={{
              ...pickerSelectStyles,
              iconContainer: { top: 20, right: 10 },
            }}
          />
        </FormBox>

        <FormBox>
          <FormLabelBox>
            <FormLabel>담배</FormLabel>
          </FormLabelBox>

          <JoinRadio
            lineover={true}
            options={[
              { key: 1, text: "피운다" },
              { key: 2, text: "안 피운다" },
            ]}
          />
        </FormBox>

        <FormBox>
          <FormLabelBox>
            <FormLabel>술</FormLabel>
          </FormLabelBox>

          <JoinRadio
            lineover={true}
            options={[
              { key: 1, text: "마신다" },
              { key: 2, text: "안 마신다" },
            ]}
          />
        </FormBox>

        <FormBox>
          <FormLabelBox>
            <FormLabel>자기소개</FormLabel>
          </FormLabelBox>
          <Textarea
            placeholder="자기소개글을 입력해주세요."
            numberOfLines={10}
          />
        </FormBox>

        <SubmitBtn text="회원가입" onPress={() => Alert.alert("회원가입")} />
      </SectionLayout>
    </DefulatLayout>
  );
}

const pickerSelectStyles = {
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    color: "#212121",
    paddingRight: 30, // to ensure the text is never behind the icon
    marginTop: 5,
    height: 48,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 13,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    color: "#212121",
    paddingRight: 30, // to ensure the text is never behind the icon
    marginTop: 5,
    height: 48,
  },
};
