import React, { useState, useEffect } from "react";
import SectionLayout from "../../../components/layout/SectionLayout";
import Modal from "react-native-modal";
import FormLayout from "../../../components/form/FormLayout";
import DefaultLayout from "../../../components/layout/DefaultLayout";
import Icon from "react-native-vector-icons/Ionicons";
import { Alert, Dimensions, Image } from "react-native";
import { ListGo } from "../../../components/form/ListStyle";
import { ListUpload } from "../../../components/form/UploadStyle";
import { useReactiveVar } from "@apollo/client";
import { memberVar } from "../../../apollo";
import { useQuery } from "@apollo/client";
import { USER_DETAIL_QUERY } from "../../query";
import * as ImagePicker from "expo-image-picker";
import { ReactNativeFile } from "apollo-upload-client";

import {
  StepNum,
  StepTxt,
  StepTxtBox,
} from "../../../components/join/JoinStyle";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

const { width, height } = Dimensions.get("screen");

export const GoModal = styled(Modal)`
  display: flex;
  flex: 1 0 auto;
  justify-content: flex-end;
  margin: 0;
`;
export const ModalPanel = styled.View`
  display: flex;
  background-color: #fff;
`;
export const ModalHeader = styled.View`
  display: flex;
  height: 50px;
  justify-content: center;
  background-color: #fff;
`;
export const ModalBody = styled.View`
  display: flex;
  background-color: #fff;
`;
export default function EditCaregiver({ navigation }) {
  const [idCard, setIdCard] = useState(null);
  const [bankInfo, setBankInfo] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const userInfo = JSON.parse(useReactiveVar(memberVar));
  const { data, loading } = useQuery(USER_DETAIL_QUERY, {
    fetchPolicy: "network-only",
    variables: {
      code: userInfo.code,
    },
  });
  const pickImage = async (set, value) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      set(result.uri), setValue(value, result.uri);
    }
  };

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  return (
    <>
      {!loading && (
        <DefaultLayout>
          <SectionLayout>
            <StepTxtBox>
              <StepNum>기본정보</StepNum>
            </StepTxtBox>
            <ListGo
              title="아이디(이메일)"
              value={data.viewProfile.userId}
              disabled
              error="아이디(ID)는 변경할 수 없습니다."
            />
            <ListGo
              title="이름"
              value={data.viewProfile.userName}
              onPress={() => navigation.navigate("EditNameCaregiver")}
              icon
            />
            <ListGo
              title="연락처"
              value={data.viewProfile.phone}
              onPress={() => navigation.navigate("EditPhoneCaregiver")}
              icon
            />
            <ListGo
              title="비밀번호"
              placeholder="비밀번호 변경"
              value=""
              onPress={() => {
                navigation.navigate("EditPasswordCaregiver");
              }}
              icon
              secureTextEntry
              password
            />
          </SectionLayout>
          <SectionLayout>
            <StepTxtBox>
              <StepNum>상세정보</StepNum>
            </StepTxtBox>
            <ListGo
              title="실거주주소"
              value={
                data?.viewProfile?.CaregiverInfo[0]?.address +
                " " +
                data?.viewProfile?.CaregiverInfo[0]?.addressDetail
              }
              onPress={() => {
                navigation.navigate("EditAddressCaregiver", {
                  userCode: userInfo.code,
                  address: data.viewProfile.CaregiverInfo[0].address,
                  addressDetail:
                    data.viewProfile.CaregiverInfo[0].addressDetail,
                });
              }}
              icon
              multiline
            />
            <ListGo
              title="주민등록번호"
              value="******-*******"
              icon
              disabled
              error="주민등록번호는 수정이 필요한 경우, 케어코리아에 문의주세요."
            />
            {idCard ? (
              <Image
                style={{ width: "100%", height: "100%" }}
                source={{ uri: idCard }}
                resizeMode={"contain"}
              />
            ) : (
              <Icon name="add-outline" size={23} style={{ color: "#979797" }} />
            )}
            <ListUpload
              title="주민등록증"
              icon
              text="파일첨부"
              onPress={() => {
                pickImage(setIdCard, "idCard");
              }}
            />
            <ListUpload title="통장사본 첨부" icon text="파일첨부" />
          </SectionLayout>
        </DefaultLayout>
      )}
    </>
  );
}
