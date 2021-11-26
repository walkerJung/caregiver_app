import React, { useRef, useEffect } from "react";
import { Text, TouchableOpacity, Alert, Image, View } from "react-native";
import { useForm } from "react-hook-form";
import {
  KeyboardAvoidingView,
  LoginTitle,
  TextInput,
  ErrorsText,
  FindBox,
  FindBtn,
  FindBtnTxt,
} from "../../components/login/loginStyle";

import LoginBtn from "../../components/login/LoginBtn";

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const passwordRef = useRef();

  const onNext = (nextOne) => {
    nextOne?.current?.focus();
  };

  const onValid = (data) => {
    if (!loading) {
      login({
        variables: {
          ...data,
        },
      });
    }
  };

  useEffect(() => {
    register("memberID", {
      required: "* 아이디를 입력해주세요.",
    });
    register("memberPassword", {
      required: "* 비밀번호를 입력해주세요.",
    });
  }, [register]);

  return (
    <KeyboardAvoidingView>
      <View></View>
      <Image
        source={require("../../assets/img/main_logo.png")}
        style={{ width: 230, height: 56, marginBottom: 30 }}
        resizeMode={"contain"}
      />

      <TextInput
        value={watch("memberID")}
        placeholder="아이디"
        placeholderTextColor={"#979797"}
        returnKeyType="next"
        autoCapitalize="none"
        onSubmitEditing={() => onNext(passwordRef)}
        // onChangeText={(text) => setValue("memberID", text)}
      />
      {errors.memberID && <ErrorsText>{errors.memberID.message}</ErrorsText>}

      <TextInput
        value={watch("memberPassword")}
        placeholder="비밀번호"
        ref={passwordRef}
        placeholderTextColor={"#979797"}
        returnKeyType="done"
        secureTextEntry
        onSubmitEditing={handleSubmit(onValid)}
        // onChangeText={(text) => setValue("memberPassword", text)}
      />
      {errors.memberPassword && (
        <ErrorsText>{errors.memberPassword.message}</ErrorsText>
      )}

      <LoginBtn
        title="로그인"
        line={false}
        onPress={() => {
          Alert.alert("로그인!");
        }}
      />

      <LoginBtn
        title="회원가입"
        line={true}
        onPress={() => {
          Alert.alert("회원가입!");
        }}
      />

      <FindBox>
        <FindBtn activeOpacity={1} onPress={() => {}}>
          <FindBtnTxt>아이디 찾기</FindBtnTxt>
        </FindBtn>
        <FindBtn activeOpacity={1} onPress={() => {}}>
          <FindBtnTxt>비밀번호 찾기</FindBtnTxt>
        </FindBtn>
      </FindBox>
    </KeyboardAvoidingView>
  );
}
