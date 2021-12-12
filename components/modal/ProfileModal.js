import React from "react";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/Ionicons";
import { careTheme } from "../../contents";
import {
  FlexBoth,
  Profile,
  ProfileImg,
  ProfileName,
  ProfileDate,
} from "../form/ListStyle";
import { SubmitBtn } from "../form/CareFormStyle";
import NumberFormat from "react-number-format";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import {
  CHOICE_CAREGIVER_MUTATION,
  ANNOUNCEMENT_LIST_QUERY,
} from "../../screens/query";
import { useReactiveVar } from "@apollo/client";
import { memberVar } from "../../apollo";

const ModalBackground = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;
const Container = styled.View`
  width: 100%;
  background-color: #fff;
  padding: 20px 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;
const ModalHeader = styled.View`
  position: relative;
  height: 50px;
`;
const ModalHeaderTxt = styled.Text`
  color: ${careTheme.COLORS.BLUE};
  font-weight: bold;
  font-size: 16px;
`;
const ModalBody = styled.View``;

const Exit = styled.TouchableOpacity`
  position: absolute;
  right: 0;
  top: 0;
`;
const ScrollBox = styled.ScrollView`
  margin-top: 20px;
  margin-bottom: 20px;
  height: 280px;
`;
const InnerTxt = styled.Text`
  font-size: 18px;
  color: #333;
  line-height: 28px;
`;
const BottomBtnBox = styled.View`
  flex-direction: row;
`;
const BottomBtnLeft = styled.View`
  width: 30%;
`;
const BottomBtnRight = styled.View`
  flex: 1;
  margin-left: 10px;
`;
const Cancel = styled.TouchableOpacity`
  width: 100%;
  height: 56px;
  align-items: center;
  justify-content: center;
  background-color: #e9e9e9;
  border-radius: 8px;
`;
const CancelTxt = styled.Text`
  color: #454545;
  font-weight: normal;
  text-align: center;
  font-size: 18px;
`;
export default function ProfileModal({
  showModal,
  setShowModal,
  dataArray,
  navigation,
  children,
  title,
}) {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
    watch,
  } = useForm();

  const onCompleted = (data) => {
    const {
      choiceCaregiver: { ok },
    } = data;
    if (ok) {
      Alert.alert("간병인 선택이 완료되었습니다.");
      navigation.navigate("ProgressHistoryUser");
    }
  };
  const userInfo = JSON.parse(useReactiveVar(memberVar));
  const [choiceCaregiverMutation] = useMutation(CHOICE_CAREGIVER_MUTATION, {
    onCompleted,
    refetchQueries: () => [
      {
        query: ANNOUNCEMENT_LIST_QUERY,
        variables: {
          userCode: userInfo.code,
        },
      },
    ],
  });

  const onValid = async () => {
    try {
      await choiceCaregiverMutation({
        variables: {
          code: dataArray.code,
          announcementCode: dataArray.announcementCode,
        },
      });
    } catch (e) {
      console.log(e);
      var error = e.toString();
      error = error.replace("Error: ", "");
      Alert.alert(`${error}`);
    }
  };
  return (
    <>
      {showModal ? (
        <Modal
          style={styles.modal}
          animationType={"fade"}
          transparent={true}
          visible={showModal}
          onRequestClose={() => {
            setShowModal(!showModal);
          }}
        >
          <ModalBackground>
            <Container>
              <ModalHeader>
                <ModalHeaderTxt numberOfLines={1} ellipsizeMode="tail">
                  간병비{" "}
                  <NumberFormat
                    value={dataArray.caregiverCost}
                    displayType={"text"}
                    thousandSeparator={true}
                    suffix={"원"}
                    renderText={(formattedValue) => (
                      <Text>{"(" + formattedValue + ")"}</Text>
                    )}
                  />{" "}
                </ModalHeaderTxt>
                <Exit
                  activeOpacity={0.8}
                  onPress={() => {
                    setShowModal();
                  }}
                >
                  <Icon name="close" size={24} color="#333" />
                </Exit>
              </ModalHeader>
              <ModalBody>
                <FlexBoth>
                  <Profile>
                    {/* <ProfileImg><Image source={require("")} /></ProfileImg> */}
                    <ProfileImg style={{ width: 56, height: 56 }}>
                      <Icon name="person-sharp" color="#bbb" size={23} />
                    </ProfileImg>
                    <View>
                      <ProfileName style={{ fontSize: 17 }}>
                        {dataArray.user.userName}
                      </ProfileName>
                      <ProfileDate style={{ fontSize: 15 }}>
                        {dataArray.user.sex}
                      </ProfileDate>
                    </View>
                  </Profile>
                </FlexBoth>

                <ScrollBox>
                  <InnerTxt>
                    안녕하세요. 간병인 홍길동입니다. 환자를 잘 보살피겠습니다.
                    선거운동은 각급 선거관리위원회의 관리하에 법률이 정하는
                    범위안에서 하되, 균등한 기회가 보장되어야 한다. 모든 국민은
                    고문을 받지 아니하며, 형사상 자기에게 불리한 진술을
                    강요당하지 아니한다. 대법관의 임기는 6년으로 하며, 법률이
                    정하는 바에 의하여 연임할 수 있다. 고문을 받지 아니하며,
                    형사상 자기에게 불리한 진술을 강요당하지 아니한다. 대법관의
                    임기는 6년으로 하며, 법률이 정하는 바에 의하여 연임할 수
                    있다. 고문을 받지 아니하며, 형사상 자기에게 불리한 진술을
                    강요당하지 아니한다. 대법관의 임기는 6년으로 하며, 법률이
                    정하는 바에 의하여 연임할 수 있다.
                  </InnerTxt>
                </ScrollBox>
                <BottomBtnBox>
                  <BottomBtnLeft>
                    <Cancel
                      activeOpacity={0.8}
                      onPress={() => {
                        setShowModal();
                      }}
                    >
                      <CancelTxt>취소</CancelTxt>
                    </Cancel>
                  </BottomBtnLeft>
                  <BottomBtnRight>
                    <SubmitBtn
                      text="간병인 선택"
                      onPress={handleSubmit(onValid)}
                    />
                  </BottomBtnRight>
                </BottomBtnBox>
              </ModalBody>
            </Container>
          </ModalBackground>
        </Modal>
      ) : null}
    </>
  );
}

const styles = StyleSheet.create({
  modal: {
    margin: 0,
  },
});
