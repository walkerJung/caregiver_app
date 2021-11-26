import React, { useRef, useCallback, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Clipboard,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import DefaultModal from "../../modal/DefaultModal";
import {
  Card,
  CardHead,
  CardHeadTit,
  GoViewBtn,
  List,
  ListTitBox,
  ListTit,
  ListTxt,
  ListTxtColor,
  Days,
  ClipboardBtn,
  FlexBoth,
  ClipSpan,
  Price,
  InfoBox,
  InfoTxt,
  Bold,
} from "../HistoryStyle";
import { FormInput, SubmitBtn } from "../../form/CareFormStyle";

export default function Item({ onPress, item, copyToClipboard }) {
  // 모달
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const caregiver = 2;
  const ChoiceItemStyle = {
    0: {
      statusColor: { color: "#FFB400" },
      statusText: "예상 간병비 산출중",
    },
    1: {
      statusColor: { color: "#0077FF" },
      statusText: "예상간병비 200,000원",
      modalBtn: true,
    },
    2: {
      statusColor: { color: "#20CF05" },
      statusText: `간병인 모집중 (${caregiver}명)`,
      careChoice: true,
    },
    3: {
      statusColor: { color: "#FF5E5E" },
      statusText: "입금 대기중",
      deposit: true,
    },
  };

  return (
    <>
      <Card
        style={{
          ...styles.shadow,
          backgroundColor: "#fff",
          borderRadius: 8,
        }}
      >
        <CardHead>
          <CardHeadTit style={ChoiceItemStyle[item.status].statusColor}>
            {ChoiceItemStyle[item.status].statusText}
          </CardHeadTit>
          <GoViewBtn text="공고보기" onPress={onPress} />
        </CardHead>

        {/* 입금 대기중일 때 나오는 코드*/}
        {ChoiceItemStyle[item.status].deposit && (
          <>
            <List>
              <ListTitBox>
                <ListTit>
                  <Icon name="person-outline" size={14} color="#979797" /> 담당
                  간병인
                </ListTit>
              </ListTitBox>
              <ListTxtColor>박간병</ListTxtColor>
            </List>

            <List>
              <ListTitBox>
                <ListTit>
                  <Icon name="person-outline" size={14} color="#979797" /> 입금
                  금액
                </ListTit>
              </ListTitBox>
              <ListTxtColor>165,000원</ListTxtColor>
              <ClipboardBtn
                activeOpacity={0.8}
                onPress={() => copyToClipboard("농협 123-12345678-12")}
              >
                <FlexBoth>
                  <Text style={{ fontSize: 15 }}>농협 123-12345678-12</Text>
                  <ClipSpan>
                    <Text style={{ fontSize: 13 }}>
                      <Icon
                        name="clipboard-outline"
                        size={13}
                        color="#979797"
                      />{" "}
                      복사
                    </Text>
                  </ClipSpan>
                </FlexBoth>
                <Text style={{ opacity: 0.4, marginTop: 3 }}>
                  입금이 확인되면 매칭이 완료됩니다.
                </Text>
              </ClipboardBtn>
            </List>
          </>
        )}

        <List>
          <ListTitBox>
            <ListTit>
              <Icon name="calendar-outline" size={14} color="#979797" /> 간병
              기간
            </ListTit>
            <Days>(2박 3일)</Days>
          </ListTitBox>
          <ListTxt>21.07.23 ~ 21.07.25</ListTxt>
        </List>

        <List>
          <ListTitBox>
            <ListTit>
              <Icon name="person-outline" size={14} color="#979797" /> 환자 성함
            </ListTit>
          </ListTitBox>
          <ListTxt>김환자</ListTxt>
        </List>

        <List last={true}>
          <ListTitBox>
            <ListTit>
              <Icon name="location-outline" size={14} color="#979797" /> 간병
              주소
            </ListTit>
          </ListTitBox>
          <ListTxt>
            대전광역시 중구 목중로 29 (대전광역시 중구 목동10-7) 대전선병원
          </ListTxt>
        </List>

        {/* 희망 간병비 입력 팝업*/}
        {ChoiceItemStyle[item.status].modalBtn && (
          <View style={{ marginTop: 10 }}>
            <SubmitBtn small text="간병 희망비 입력" onPress={openModal} />
            <DefaultModal
              title="희망 간병비 입력"
              showModal={showModal}
              setShowModal={setShowModal}
            >
              <FlexBoth style={{ marginBottom: 10 }}>
                <Text style={{ fontSize: 16, color: "#333" }}>예상 간병비</Text>
                <Price>200,000원</Price>
              </FlexBoth>
              <FormInput
                placeholder="희망 간병비를 입력해 주세요."
                placeholderTextColor={"#979797"}
                returnKeyType="done"
                keyboardType="numbers-and-punctuation"
              />
              <InfoBox style={{ marginBottom: 10 }}>
                <InfoTxt style={{ marginBottom: 10 }}>
                  <Bold>예상 간병비</Bold>는 작성하신 공고에 의해 책정된
                  금액입니다.
                </InfoTxt>
                <InfoTxt>
                  <Bold>희망 간병비</Bold>를 기준으로 간병인과 매칭이 됩니다.
                </InfoTxt>
              </InfoBox>
              <SubmitBtn
                text="확인"
                onPress={() =>
                  Alert.alert("여기 누르면 간병금액이 들어갑니다.")
                }
              />
            </DefaultModal>
          </View>
        )}

        {ChoiceItemStyle[item.status].careChoice && (
          <View style={{ marginTop: 10 }}>
            <SubmitBtn
              small={true}
              text="간병인 선택"
              onPress={() =>
                Alert.alert("여기 누르면 간병인 선택으로 이동합니다.")
              }
            />
          </View>
        )}
      </Card>
    </>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 6,
  },
});
