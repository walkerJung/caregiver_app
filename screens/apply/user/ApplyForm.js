import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import FormLayout from "../../../components/form/FormLayout";
import SectionLayout from "../../../components/layout/SectionLayout";
import {
  FormTitle,
  FormBox,
  FormLabel,
  FormInput,
  FormSubLabel,
  FlexRow,
  LeftBtnBox,
  RightBtnBox,
  SearchBtn,
  SearchInput,
  ErrorsText,
  SubmitBtn,
} from "../../../components/form/CareFormStyle";

import DateTimePickerModal from "react-native-modal-datetime-picker";
import RNPickerSelect from "react-native-picker-select";
import Icon from "react-native-vector-icons/Ionicons";
import { careTheme } from "../../../contents";

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

export default function ApplyForm({ navigation }) {
  // datepicker 동작 시작

  // datepicker 시작일
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
  // 셀렉트 박스 끝

  const [title, setTitle] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [address, setAddress] = useState();
  const [addressDetail, setAddressDetail] = useState();
  const [protectorName, setProtectorName] = useState();
  const [protectorPhone, setProtectorPhone] = useState();
  const [patientName, setPatientName] = useState();
  const [patientAge, setPatientAge] = useState();
  const [patientWeight, setPatientWeight] = useState();
  const [disease, setDisease] = useState();
  const [infectiousDisease, setInfectiousDisease] = useState();
  const [isolation, setIsolation] = useState();
  const [nursingGrade, setNursingGrade] = useState();

  return (
    <FormLayout>
      <SectionLayout>
        <FormBox>
          <FormLabel>제목을 입력해주세요.</FormLabel>
          <FormInput
            placeholder="제목을 입력해주세요."
            returnKeyType="next"
            onChangeText={(text) => {
              setTitle(text);
            }}
          />
        </FormBox>
        <FormBox>
          <FormLabel>간병 기간을 선택해주세요.</FormLabel>
          {/* 간병시작일 시작 */}
          <FormSubLabel>간병 시작일</FormSubLabel>
          <FlexRow>
            <LeftBtnBox>
              <TouchableOpacity
                activeOpacity={1}
                onPress={showDatePicker}
                style={{ position: "relative" }}
              >
                <FormInput
                  pointerEvents="none"
                  placeholder="간병 시작일"
                  underlineColorAndroid="transparent"
                  editable={false}
                  value={DateText}
                />
                <Icon
                  name="today"
                  size={18}
                  color="#cacaca"
                  style={styles.dateIcon}
                />
                <DateTimePickerModal
                  locale="Ko"
                  headerTextIOS="간병 시작일"
                  confirmTextIOS="확인"
                  cancelTextIOS="취소"
                  isVisible={isDatePickerVisible}
                  mode="date"
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                />
              </TouchableOpacity>
            </LeftBtnBox>
            <RightBtnBox>
              <TouchableOpacity
                activeOpacity={1}
                onPress={showTimePicker}
                style={{ position: "relative" }}
              >
                <FormInput
                  pointerEvents="none"
                  placeholder="00:00"
                  underlineColorAndroid="transparent"
                  editable={false}
                  value={TimeText}
                />
                <Icon
                  name="time"
                  size={18}
                  color="#cacaca"
                  style={styles.dateIcon}
                />
                <DateTimePickerModal
                  locale="Ko"
                  headerTextIOS="간병 시작일"
                  confirmTextIOS="확인"
                  cancelTextIOS="취소"
                  isVisible={isTimePickerVisible}
                  mode="time"
                  onConfirm={handleTimeConfirm}
                  onCancel={hideTimePicker}
                />
              </TouchableOpacity>
            </RightBtnBox>
          </FlexRow>
          {/* 간병시작일 끝 */}
          {/* 간병 종료일 시작 */}
          <FormSubLabel>간병 종료일</FormSubLabel>
          <FlexRow>
            <LeftBtnBox>
              <TouchableOpacity
                activeOpacity={1}
                onPress={showDatePicker}
                style={{ position: "relative" }}
              >
                <FormInput
                  pointerEvents="none"
                  placeholder="간병 종료일"
                  underlineColorAndroid="transparent"
                  editable={false}
                  value={DateText}
                />
                <Icon
                  name="today"
                  size={18}
                  color="#cacaca"
                  style={styles.dateIcon}
                />
                <DateTimePickerModal
                  locale="Ko"
                  headerTextIOS="간병 종료일"
                  confirmTextIOS="확인"
                  cancelTextIOS="취소"
                  isVisible={isDatePickerVisible}
                  mode="date"
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                />
              </TouchableOpacity>
            </LeftBtnBox>
            <RightBtnBox>
              <TouchableOpacity
                activeOpacity={1}
                onPress={showTimePicker}
                style={{ position: "relative" }}
              >
                <FormInput
                  pointerEvents="none"
                  placeholder="00:00"
                  underlineColorAndroid="transparent"
                  editable={false}
                  value={TimeText}
                />
                <Icon
                  name="time"
                  size={18}
                  color="#cacaca"
                  style={styles.dateIcon}
                />
                <DateTimePickerModal
                  locale="Ko"
                  headerTextIOS="간병 시작일"
                  confirmTextIOS="확인"
                  cancelTextIOS="취소"
                  isVisible={isTimePickerVisible}
                  mode="time"
                  onConfirm={handleTimeConfirm}
                  onCancel={hideTimePicker}
                />
              </TouchableOpacity>
            </RightBtnBox>
          </FlexRow>
        </FormBox>

        <FormBox last={true}>
          <FormLabel>간병 받으실 주소를 입력해주세요.</FormLabel>
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
      </SectionLayout>

      <SectionLayout>
        <FormTitle>보호자 정보 입력</FormTitle>
        <FormBox>
          <FormLabel>보호자 성함</FormLabel>
          <FormInput
            placeholder="성함"
            placeholderTextColor={"#979797"}
            returnKeyType="next"
          />
        </FormBox>

        <FormBox last={true}>
          <FormLabel>보호자 연락처</FormLabel>
          <FormInput
            placeholder="연락처 (-)제외"
            placeholderTextColor={"#979797"}
            returnKeyType="next"
            keyboardType="numbers-and-punctuation"
          />
        </FormBox>
      </SectionLayout>

      <SectionLayout last={true}>
        <FormTitle>환자 정보 입력</FormTitle>
        <FormBox>
          <FormLabel>환자 성함</FormLabel>
          <FormInput
            placeholder="성함"
            placeholderTextColor={"#979797"}
            returnKeyType="next"
          />
        </FormBox>

        <FormBox>
          <FormLabel>환자 나이</FormLabel>
          <FormInput
            placeholder="나이"
            placeholderTextColor={"#979797"}
            returnKeyType="next"
            keyboardType="numbers-and-punctuation"
            maxLength={3}
            text="세"
          />
        </FormBox>

        <FormBox>
          <FormLabel>환자 몸무게</FormLabel>
          <FormInput
            placeholder="몸무게"
            placeholderTextColor={"#979797"}
            returnKeyType="next"
            keyboardType="numbers-and-punctuation"
            maxLength={3}
            text="kg"
          />
        </FormBox>

        <FormBox>
          <FormLabel>진단상병은 무엇인가요?</FormLabel>
          <FormInput
            placeholder="진단상명을 입력해주세요."
            placeholderTextColor={"#979797"}
            returnKeyType="next"
          />
        </FormBox>

        <FormBox>
          <FormLabel>전염성 질환 인가요?</FormLabel>
          <RNPickerSelect
            useNativeAndroidPickerStyle={false}
            fixAndroidTouchableBug={true}
            placeholder={{
              label: "카테고리를 선택해주세요.",
              color: "#979797",
            }}
            value={SelectText}
            onValueChange={(value) => onChangeSelectText(value)}
            items={[
              { label: "예", value: "예" },
              { label: "아니오", value: "아니오" },
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
          <FormLabel>격리병동이나 폐쇄병동에 계신가요?</FormLabel>
          <RNPickerSelect
            useNativeAndroidPickerStyle={false}
            fixAndroidTouchableBug={true}
            placeholder={{
              label: "카테고리를 선택해주세요.",
              color: "#979797",
            }}
            value={SelectText}
            onValueChange={(value) => onChangeSelectText(value)}
            items={[
              { label: "예", value: "예" },
              { label: "아니오", value: "아니오" },
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
          <FormLabel>장기요양 등급</FormLabel>
          <RNPickerSelect
            useNativeAndroidPickerStyle={false}
            fixAndroidTouchableBug={true}
            placeholder={{
              label: "카테고리를 선택해주세요.",
              color: "#979797",
            }}
            value={SelectText}
            onValueChange={(value) => onChangeSelectText(value)}
            items={[
              { label: "1등급", value: "1등급" },
              { label: "2등급", value: "2등급" },
              { label: "3등급", value: "3등급" },
              { label: "4등급", value: "4등급" },
              { label: "5등급", value: "5등급" },
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

        <SubmitBtn text="다음" disabled={false} />
      </SectionLayout>
    </FormLayout>
  );
}

const styles = StyleSheet.create({
  dateIcon: {
    position: "absolute",
    right: 12,
    top: 15,
  },
});

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
