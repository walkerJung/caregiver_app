import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Alert } from "react-native";
import {
  ScrollView,
  Container,
  Item,
  FlexBoth,
  Profile,
  ProfileImg,
  ProfileName,
  ProfileDate,
  PriceTxt,
} from "../../components/form/ListStyle";
import { SubmitBtn } from "../../components/form/CareFormStyle";
import Icon from "react-native-vector-icons/Ionicons";

import ProfileModal from "../../components/modal/ProfileModal";

export default function ApplicantList() {
  // 모달
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <ScrollView>
      <Container>
        <Text
          style={{
            fontSize: 14,
            marginBottom: 13,
            color: "#333",
            fontWeight: "bold",
          }}
        >
          지원한 간병인 (2명)
        </Text>
        <Item style={styles.shadow}>
          <FlexBoth style={{ marginBottom: 13 }}>
            <View>
              <Profile>
                {/* 아래 코드는 프로필 사진 등록하면 들어가는 코드입니다. 주석 처리 해놓았습니다. */}
                {/* <ProfileImg><Image source={require("")} /></ProfileImg> */}

                {/* 아래 코드는 프로필 사진 등록 하지 않았을 경우 들어가는 코드입니다. */}
                <ProfileImg>
                  <Icon name="person-sharp" color="#bbb" size={21} />
                </ProfileImg>
                <View>
                  {/* 간병인 이름 */}
                  <ProfileName>박간병</ProfileName>
                  {/* 지원 신청한 날짜 */}
                  <ProfileDate>2021.07.21</ProfileDate>
                </View>
              </Profile>
            </View>
            <View>
              {/* 간병비 가격 넣어주세요. */}
              <PriceTxt>간병비 100,000원</PriceTxt>
            </View>
          </FlexBoth>
          <SubmitBtn
            small={true}
            text="간병인 선택"
            style={{ height: 48 }}
            onPress={openModal}
          />
        </Item>
      </Container>
      <ProfileModal showModal={showModal} setShowModal={setShowModal} />
    </ScrollView>
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
