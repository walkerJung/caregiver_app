import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Alert,
  Text,
  TouchableOpacity,
} from "react-native";
import {
  Container,
  Card,
  Card2,
  List,
  ListTitBox,
  ListTit,
  ListTxt,
  ListSubTit,
  Days,
  EditBtn,
  EditTxt,
  GoViewBtn,
} from "../../components/history/HistoryStyle";
import {
  Item,
  FlexBoth,
  PageHeader,
  StatusTxt,
  Profile,
  ProfileImg,
  ProfileName,
  ProfileDate,
  CancelBtn,
} from "../../components/form/ListStyle";
import Icon from "react-native-vector-icons/Ionicons";
import { SubmitBtn } from "../../components/form/CareFormStyle";
import ProfileModal from "../../components/modal/ProfileModal";
import AlertModal from "../../components/modal/AlertModal";
import DefulatLayout from "../../components/layout/DefaultLayout";
export default function RecruitHome() {
  // 모달
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const [showModal2, setShowModal2] = useState(false);
  const openModal2 = () => {
    setShowModal2((prev) => !prev);
  };
  return (
    <DefulatLayout>
      <Container>
        <PageHeader>
          {/* 
            아래 상태값에 따라 문구와 색이 바뀝니다 총 상태는 6개입니다.
            그리고 4번 5번 상태는 완료 된 내역이라 신청취소는 사라지게 됩니다...
             const ChoiceItemStyle = {
                0: {
                statusColor: { color: "#FFB400" },
                statusText: "예상 간병비 산출중",
                },
                1: {
                statusColor: { color: "#0077FF" },
                statusText: "예상간병비 (200,000원)",
                },
                2: {
                statusColor: { color: "#20CF05" },
                statusText: `간병인 모집중 (2명)`,
                },
                3: {
                statusColor: { color: "#FF5E5E" },
                statusText: "입금 대기중",
                },
                4: {
                statusColor: { color: "#0077FF" },
                statusText: "매칭 완료",
                },
                5: {
                statusColor: { color: "#20CF05" },
                statusText: "환불 완료 (200,000원)",
                },
            };
            
            */}
          <StatusTxt style={{ color: "#0077FF" }}>
            예상간병비 (200,000원)
          </StatusTxt>
          <CancelBtn text="신청 취소" onPress={openModal2} />
          <AlertModal
            title="알림"
            text="정말 취소하시겠습니까?"
            showModal={showModal2}
            setShowModal={setShowModal2}
            onPress={() => Alert.alert("누르면 신청이 취소됩니다.")}
          />
        </PageHeader>

        {/* 시작 --- 하단 card는 매칭이 완료되었을 때 해당 간병인이 나오는 코드입니다! */}
        <Card style={styles.shadow}>
          <FlexBoth>
            <View>
              <Profile>
                {/* 아래 코드는 프로필 사진 등록하면 들어가는 코드입니다. 주석 처리 해놓았습니다. */}
                {/* <ProfileImg><Image source={require("")} /></ProfileImg> */}

                {/* 아래 코드는 프로필 사진 등록 하지 않았을 경우 들어가는 코드입니다. */}
                <ProfileImg>
                  <Icon name="person-sharp" color="#bbb" size={21} />
                </ProfileImg>
                <View>
                  <ProfileDate style={{ marginTop: 0, marginBottom: 2 }}>
                    담당 간병인
                  </ProfileDate>
                  {/* 간병인 이름 */}
                  <ProfileName>박간병</ProfileName>
                </View>
              </Profile>
            </View>
            <View>
              <GoViewBtn onPress={openModal} text="간병인 자세히" />
            </View>
          </FlexBoth>

          <ProfileModal showModal={showModal} setShowModal={setShowModal} />
        </Card>
        {/* 끝 --- 윗 card는 매칭이 완료되었을 때 해당 간병인이 나오는 코드입니다!   */}

        <Card2 style={{ ...styles.shadow, paddingTop: 12, paddingBottom: 12 }}>
          {/* 하단 텍스트는  간병인 신청에서 '제목을 입력해주세요.' 가 들어갑니다. 위치는 screens > apply > ApplyForm의 최상단 제목입니다.*/}
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            마음씨 좋은 간병인 구합니다.
          </Text>
        </Card2>

        {/* 간병기간, 주소 */}
        <Card2 style={styles.shadow}>
          <List last={true}>
            <ListTitBox style={{ marginBottom: 0 }}>
              <ListTit>
                <Icon name="calendar-outline" size={14} color="#979797" /> 간병
                기간
              </ListTit>
              {/* applyform 수정 페이지로 이동합니다. */}
              <EditBtn
                activeOpacity={0.8}
                onPress={() =>
                  Alert.alert("ApplyForm 수정 페이지로 이동합니다.")
                }
              >
                <Icon name="pencil-outline" size={13} color="#979797" />
                <EditTxt>수정하기</EditTxt>
              </EditBtn>
            </ListTitBox>
          </List>
          <List>
            <ListTitBox>
              <ListTxt>21.07.23 ~ 21.07.25</ListTxt>
              <Days>(2박 3일)</Days>
            </ListTitBox>
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

              {/* 환자 상세정보 수정으로 넘어갑니다. */}
              <EditBtn
                activeOpacity={0.8}
                onPress={() =>
                  Alert.alert(
                    "환자 상세정보(ApplyFormDetail) 수정페이지로 넘어갑니다."
                  )
                }
              >
                <Icon name="pencil-outline" size={13} color="#979797" />
                <EditTxt>수정하기</EditTxt>
              </EditBtn>
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

        <SubmitBtn
          text="희망간병비 입력"
          onPress={() => Alert.alert("희망간병비 팝업 이동합니다.")}
        />
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
