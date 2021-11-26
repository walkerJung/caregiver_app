import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import {
  Container,
  Card,
  Card2,
  List,
  ListTitBox,
  ListTit,
  ListTxt,
  ListTxtColor,
  ListSubTit,
  Days,
  EditBtn,
  EditTxt,
  GoViewBtn,
  FlexBoth,
  Price,
  InfoBox,
  InfoTxt,
  Bold,
} from "../../../components/history/HistoryStyle";
import { PageHeader, StatusTxt } from "../../../components/form/ListStyle";
import Icon from "react-native-vector-icons/Ionicons";
import Fontawesome from "react-native-vector-icons/FontAwesome5";
import DefulatLayout from "../../../components/layout/DefaultLayout";
import { FormInput, SubmitBtn } from "../../../components/form/CareFormStyle";
import DefaultModal from "../../../components/modal/DefaultModal";

export default function ApplyViewCaregiver() {
  // 모달
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <DefulatLayout>
      <Container>
        <PageHeader>
          <StatusTxt style={{ color: "#0077FF" }}>
            희망간병비 (200,000원)
          </StatusTxt>
        </PageHeader>

        <Card2 style={{ ...styles.shadow, paddingTop: 12, paddingBottom: 12 }}>
          {/* 하단 텍스트는  간병인 신청에서 '제목을 입력해주세요.' 가 들어갑니다. 위치는 screens > apply > ApplyForm의 최상단 제목입니다.*/}
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            마음씨 좋은 간병인 구합니다.
          </Text>
        </Card2>

        {/* 간병기간, 주소 */}
        <Card2 style={styles.shadow}>
          <List>
            <ListTitBox>
              <ListTit>
                <Fontawesome name="coins" size={14} color="#979797" /> 희망
                간병비
              </ListTit>
            </ListTitBox>
            <ListTxtColor>200,000원</ListTxtColor>
          </List>
          <List>
            <ListTitBox>
              <ListTit>
                <Icon name="calendar-outline" size={14} color="#979797" /> 간병
                기간
              </ListTit>
            </ListTitBox>
            <ListTxt>21.07.23 ~ 21.07.25</ListTxt>
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
        </Card2>

        {/* 보호자 (성명) */}
        <Card2 style={styles.shadow}>
          <List last={true}>
            <ListTitBox>
              <ListTit>
                <Icon name="person-outline" size={14} color="#979797" /> 보호자
              </ListTit>
            </ListTitBox>
            <ListTxt>김보호</ListTxt>
          </List>
        </Card2>

        {/* 환자 정보(성명, 나이, 몸무게, 장기요양등급) */}
        <Card2 style={styles.shadow}>
          <List>
            <ListTitBox style={{ marginBottom: 15 }}>
              <ListTit>
                <Icon name="person-outline" size={14} color="#979797" /> 환자
                정보
              </ListTit>
            </ListTitBox>
            <ListSubTit>환자 성함</ListSubTit>
            {/* 환자 성명 */}
            <ListTxt>김보호</ListTxt>
          </List>

          <List>
            <ListSubTit>환자 나이</ListSubTit>
            {/* 환자 나이 */}
            <ListTxt>78세</ListTxt>
          </List>

          <List>
            <ListSubTit>환자 몸무게</ListSubTit>
            {/* 환자 몸무게 */}
            <ListTxt>65kg</ListTxt>
          </List>

          <List last={true}>
            <ListSubTit>장기요양 등급</ListSubTit>
            {/* 환자 장기요양 등급 */}
            <ListTxt>2등급</ListTxt>
          </List>
        </Card2>

        {/* 환자 상세정보 (상세정보는 applyform에서 받았던 데이터입니다.)*/}
        <Card2 style={styles.shadow}>
          <List>
            <ListTitBox style={{ marginBottom: 15 }}>
              <ListTit>
                <Icon name="person-outline" size={14} color="#979797" /> 환자
                정보
              </ListTit>
            </ListTitBox>
            <ListSubTit>식사보조가 필요하신가요?</ListSubTit>
            <ListTxt>전적으로 도와준다.</ListTxt>
          </List>

          <List>
            <ListSubTit>대소변 케어가 필요하신가요?</ListSubTit>
            <ListTxt>소변 주머니 이용</ListTxt>
          </List>

          <List>
            <ListSubTit>석션 케어가 필요한가요?</ListSubTit>
            <ListTxt>아니오</ListTxt>
          </List>

          <List>
            <ListSubTit>이동시 필요한 케어가 필요하신가요?</ListSubTit>
            <ListTxt>침대에서 전적인 도움이 필요</ListTxt>
          </List>

          <List>
            <ListSubTit>침대에서 필요한 케어가 필요하신가요?</ListSubTit>
            <ListTxt>아니오</ListTxt>
          </List>

          <List last={true}>
            <ListSubTit>위생 관련 케어가 필요하신가요?</ListSubTit>
            <ListTxt>아니오</ListTxt>
          </List>
        </Card2>

        <SubmitBtn text="지원하기" onPress={openModal} />
        {/* 지원하기 모달 팝업 */}
        <DefaultModal
          title="지원하기"
          showModal={showModal}
          setShowModal={setShowModal}
        >
          <FlexBoth style={{ marginBottom: 10 }}>
            <Text style={{ fontSize: 16, color: "#333" }}>희망 간병비</Text>
            <Price>200,000원</Price>
          </FlexBoth>
          <FormInput
            placeholder="본인 간병비를 입력해 주세요."
            placeholderTextColor={"#979797"}
            returnKeyType="done"
            keyboardType="numbers-and-punctuation"
          />

          <SubmitBtn
            text="확인"
            onPress={() => Alert.alert("여기 누르면 간병금액이 들어갑니다.")}
          />
        </DefaultModal>
      </Container>
    </DefulatLayout>
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
