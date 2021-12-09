import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import WriteLayout from "../../../components/layout/WriteLayout";
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
import { useForm } from "react-hook-form";
import Postcode from "@actbase/react-daum-postcode";

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

export default function ApplyForm({ navigation }) {
  const [isStartDatePickerVisible, setStartDatePickerVisibility] =
    useState(false);
  const [isEndDatePickerVisible, setEndDatePickerVisibility] = useState(false);
  const [isStartTimePickerVisible, setStartTimePickerVisibility] =
    useState(false);
  const [isEndTimePickerVisible, setEndTimePickerVisibility] = useState(false);
  const showDatePicker = (set) => {
    set(true);
  };
  const showTimePicker = (set) => {
    set(true);
  };
  const hideDatePicker = () => {
    setStartDatePickerVisibility(false);
    setEndDatePickerVisibility(false);
  };
  const hideTimePicker = () => {
    setStartTimePickerVisibility(false);
    setEndTimePickerVisibility(false);
  };

  const handleStartDate = (date) => {
    hideDatePicker();
    setStartDate(date.format("yyyy/MM/dd"));
  };
  const handleEndDate = (date) => {
    hideDatePicker();
    setEndDate(date.format("yyyy/MM/dd"));
  };
  const handleStartTime = (date) => {
    hideTimePicker();
    setStartTime(date.format("HH:mm"));
  };
  const handleEndTime = (date) => {
    hideTimePicker();
    setEndTime(date.format("HH:mm"));
  };
  const handleSelectBox = (value, set) => {
    set(value);
  };
  const handleAddress = (data) => {
    setAddress(data.address), setModal("none");
  };

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
    watch,
  } = useForm();

  const onValid = async (data) => {
    console.log(data);
    // try {

    // } catch (e) {
    //   console.log(e);
    // }
  };

  useEffect(() => {
    register("title", {
      required: "* 제목을 입력해주세요.",
    });
    register("startDate", {
      required: "* 간병 시작일을 선택해주세요.",
    });
    register("startTime", {
      required: "* 시작 시간을 선택해주세요.",
    });
    register("endDate", {
      required: "* 간병 종료일을 선택해주세요.",
    });
    register("endTime", {
      required: "* 종료 시간을 선택해주세요.",
    });
    register("address", {
      required: "* 주소를 입력해주세요.",
    });
    register("addressDetail", {
      required: "* 상세주소를 입력해주세요.",
    });
    register("protectorName", {
      required: "* 보호자 성함을 입력해주세요.",
    });
    register("protectorPhone", {
      required: "* 보호자 연락처를 입력해주세요.",
    });
    register("patientName", {
      required: "* 환자 성함을 입력해주세요.",
    });
    register("patientAge", {
      required: "* 환자 나이를 입력해주세요.",
    });
    register("patientWeight", {
      required: "* 환자 몸무게를 입력해주세요.",
    });
    register("disease", {
      required: "* 진단상병을 입력해주세요.",
    });
    register("infectiousDisease", {
      required: "* 전염성 질환 여부를 선택해주세요.",
    });
    register("isolation", {
      required: "* 격리병동 여부를 선택해주세요.",
    });
    register("nursingGrade", {
      required: "* 장기요양 등급을 선택해주세요.",
    });
  }, [register]);

  const [isModal, setModal] = useState("none");
  const [title, setTitle] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
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
              setValue("title", text);
            }}
            value={getValues("title")}
          />
          {errors.title && <ErrorsText>{errors.title.message}</ErrorsText>}
        </FormBox>
        <FormBox>
          <FormLabel>간병 기간을 선택해주세요.</FormLabel>
          {/* 간병시작일 시작 */}
          <FormSubLabel>간병 시작일</FormSubLabel>
          <FlexRow>
            <LeftBtnBox>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => {
                  showDatePicker(setStartDatePickerVisibility);
                }}
                style={{ position: "relative" }}
              >
                <FormInput
                  pointerEvents="none"
                  underlineColorAndroid="transparent"
                  editable={false}
                  placeholder="간병 시작일 선택"
                  value={startDate}
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
                  isVisible={isStartDatePickerVisible}
                  mode="date"
                  onConfirm={handleStartDate}
                  onCancel={hideDatePicker}
                />
              </TouchableOpacity>
              {errors.startDate && (
                <ErrorsText>{errors.startDate.message}</ErrorsText>
              )}
            </LeftBtnBox>
            <RightBtnBox>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => {
                  showTimePicker(setStartTimePickerVisibility);
                }}
                style={{ position: "relative" }}
              >
                <FormInput
                  pointerEvents="none"
                  placeholder="시간"
                  underlineColorAndroid="transparent"
                  editable={false}
                  value={startTime}
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
                  isVisible={isStartTimePickerVisible}
                  mode="time"
                  onConfirm={handleStartTime}
                  onCancel={hideTimePicker}
                />
              </TouchableOpacity>
              {errors.startTime && (
                <ErrorsText>{errors.startTime.message}</ErrorsText>
              )}
            </RightBtnBox>
          </FlexRow>
          {/* 간병시작일 끝 */}
          {/* 간병 종료일 시작 */}
          <FormSubLabel>간병 종료일</FormSubLabel>
          <FlexRow>
            <LeftBtnBox>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => {
                  showDatePicker(setEndDatePickerVisibility);
                }}
                style={{ position: "relative" }}
              >
                <FormInput
                  pointerEvents="none"
                  value={endDate}
                  placeholder="간병 종료일 선택"
                  underlineColorAndroid="transparent"
                  editable={false}
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
                  isVisible={isEndDatePickerVisible}
                  mode="date"
                  onConfirm={handleEndDate}
                  onCancel={hideDatePicker}
                />
              </TouchableOpacity>
              {errors.endDate && (
                <ErrorsText>{errors.endDate.message}</ErrorsText>
              )}
            </LeftBtnBox>
            <RightBtnBox>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => {
                  showTimePicker(setEndTimePickerVisibility);
                }}
                style={{ position: "relative" }}
              >
                <FormInput
                  pointerEvents="none"
                  placeholder="시간"
                  underlineColorAndroid="transparent"
                  editable={false}
                  value={endTime}
                />
                <Icon
                  name="time"
                  size={18}
                  color="#cacaca"
                  style={styles.dateIcon}
                />
                <DateTimePickerModal
                  locale="Ko"
                  headerTextIOS="간병 종료일"
                  confirmTextIOS="확인"
                  cancelTextIOS="취소"
                  isVisible={isEndTimePickerVisible}
                  mode="time"
                  onConfirm={handleEndTime}
                  onCancel={hideTimePicker}
                />
              </TouchableOpacity>
              {errors.endTime && (
                <ErrorsText>{errors.endTime.message}</ErrorsText>
              )}
            </RightBtnBox>
          </FlexRow>
        </FormBox>

        <FormBox last={true}>
          <FormLabel>간병 받으실 주소를 입력해주세요.</FormLabel>
          <FlexRow>
            <LeftBtnBox>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setModal("block")}
              >
                <SearchInput
                  placeholder="주소를 입력해주세요."
                  placeholderTextColor={"#676767"}
                  keyboardType="default"
                  value={address}
                  editable={false}
                />
              </TouchableOpacity>
              {errors.address && (
                <ErrorsText>{errors.address.message}</ErrorsText>
              )}
            </LeftBtnBox>
            <RightBtnBox>
              <SearchBtn activeOpacity={0.8} onPress={() => setModal("block")}>
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
          <Postcode
            style={{ width: 320, height: 320, display: isModal }}
            jsOptions={{ animation: true }}
            onSelected={(data) => handleAddress(data)}
          />
          <FormInput
            placeholder="상세주소"
            placeholderTextColor={"#979797"}
            keyboardType="default"
            onChangeText={(text) => {
              setValue("addressDetail", text);
            }}
            value={getValues("addressDetail")}
          />
          {errors.addressDetail && (
            <ErrorsText>{errors.addressDetail.message}</ErrorsText>
          )}
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
            onChangeText={(text) => {
              setProtectorName(text);
            }}
          />
          {errors.protectorName && (
            <ErrorsText>{errors.protectorName.message}</ErrorsText>
          )}
        </FormBox>

        <FormBox last={true}>
          <FormLabel>보호자 연락처</FormLabel>
          <FormInput
            placeholder="연락처 (-)제외"
            placeholderTextColor={"#979797"}
            returnKeyType="next"
            keyboardType="numbers-and-punctuation"
            onChangeText={(text) => {
              setProtectorPhone(text);
            }}
          />
          {errors.protectorPhone && (
            <ErrorsText>{errors.protectorPhone.message}</ErrorsText>
          )}
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
            onChangeText={(text) => {
              setPatientName(text);
            }}
          />
          {errors.patientName && (
            <ErrorsText>{errors.patientName.message}</ErrorsText>
          )}
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
            onChangeText={(text) => {
              setPatientAge(text);
            }}
          />
          {errors.patientAge && (
            <ErrorsText>{errors.patientAge.message}</ErrorsText>
          )}
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
            onChangeText={(text) => {
              setPatientWeight(text);
            }}
          />
          {errors.patientWeight && (
            <ErrorsText>{errors.patientWeight.message}</ErrorsText>
          )}
        </FormBox>

        <FormBox>
          <FormLabel>진단상병은 무엇인가요?</FormLabel>
          <FormInput
            placeholder="진단상명을 입력해주세요."
            placeholderTextColor={"#979797"}
            returnKeyType="next"
            onChangeText={(text) => {
              setDisease(text);
            }}
          />
          {errors.disease && <ErrorsText>{errors.disease.message}</ErrorsText>}
        </FormBox>

        <FormBox>
          <FormLabel>전염성 질환 인가요?</FormLabel>
          <RNPickerSelect
            useNativeAndroidPickerStyle={false}
            fixAndroidTouchableBug={true}
            placeholder={{
              label: "전염성 질환 여부를 선택해주세요.",
              color: "#979797",
            }}
            value={infectiousDisease}
            onValueChange={(value) =>
              handleSelectBox(value, setInfectiousDisease)
            }
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
          {errors.infectiousDisease && (
            <ErrorsText>{errors.infectiousDisease.message}</ErrorsText>
          )}
        </FormBox>

        <FormBox>
          <FormLabel>격리병동이나 폐쇄병동에 계신가요?</FormLabel>
          <RNPickerSelect
            useNativeAndroidPickerStyle={false}
            fixAndroidTouchableBug={true}
            placeholder={{
              label: "격리병동 혹은 폐쇄병동 여부를 선택해주세요.",
              color: "#979797",
            }}
            value={isolation}
            onValueChange={(value) => handleSelectBox(value, setIsolation)}
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
          {errors.isolation && (
            <ErrorsText>{errors.isolation.message}</ErrorsText>
          )}
        </FormBox>

        <FormBox>
          <FormLabel>장기요양 등급</FormLabel>
          <RNPickerSelect
            useNativeAndroidPickerStyle={false}
            fixAndroidTouchableBug={true}
            placeholder={{
              label: "장기요양등급을 선택해주세요.",
              color: "#979797",
            }}
            value={nursingGrade}
            onValueChange={(value) => handleSelectBox(value, setNursingGrade)}
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
          {errors.nursingGrade && (
            <ErrorsText>{errors.nursingGrade.message}</ErrorsText>
          )}
        </FormBox>

        <SubmitBtn text="다음" onPress={handleSubmit(onValid)} />
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
