import React, { useRef, useState } from "react";
import WriteLayout from "../../../components/layout/WriteLayout";
import {
  FormBox,
  FormLabelBox,
  FormLabel,
  FormInput,
} from "../../../components/join/JoinStyle";
import { SubmitBtn } from "../../../components/form/CareFormStyle";
import { useForm } from "react-hook-form";
import { EDIT_USER_MUTATION, USER_DETAIL_QUERY } from "../../query";
import { useMutation, useQuery } from "@apollo/client";
import { useReactiveVar } from "@apollo/client";
import { memberVar } from "../../../apollo";
import { Alert } from "react-native";

export default function EditPhoneUser({ navigation }) {
  const userInfo = JSON.parse(useReactiveVar(memberVar));
  const [phone, setPhone] = useState(userInfo.phone);
  const {
    handleSubmit,
    formState: { errors },
  } = useForm();

  const phoneRef = useRef();

  const { data, loading } = useQuery(USER_DETAIL_QUERY, {
    fetchPolicy: "network-only",
    variables: {
      code: userInfo.code,
    },
  });

  const onCompleted = async (data) => {
    if (data.editAccount.ok) {
      navigation.navigate("EditUser");
    } else {
      Alert.alert("회원정보 변경에 실패하였습니다.");
    }
  };

  const [editUserMutation, { mutationLoading }] = useMutation(
    EDIT_USER_MUTATION,
    {
      onCompleted,
      refetchQueries: () => [
        {
          query: USER_DETAIL_QUERY,
          variables: {
            code: userInfo.code,
          },
        },
      ],
    }
  );

  const onValid = () => {
    if (!mutationLoading) {
      editUserMutation({
        variables: {
          userCode: userInfo.code,
          phone,
        },
      });
    }
  };

  return (
    <>
      {!loading && (
        <WriteLayout>
          <FormBox>
            <FormLabelBox>
              <FormLabel>연락처 변경</FormLabel>
            </FormLabelBox>
            {/* 기존 이름이 값에 넣어져 있습니다. */}
            <FormInput
              ref={phoneRef}
              placeholder="연락처"
              keyboardType="numeric"
              blurOnSubmit={true}
              defaultValue={data.viewProfile.phone}
              onChangeText={(text) => {
                setPhone(text);
              }}
            />
          </FormBox>

          <SubmitBtn text="수정하기" onPress={handleSubmit(onValid)} />
        </WriteLayout>
      )}
    </>
  );
}
