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
import NumberFormat from "react-number-format";

export default function ApplicantList({ route, navigation }) {
  const [showModal, setShowModal] = useState(false);
  const [dataArray, setDataArray] = useState([]);
  const openModal = (dataArray) => {
    setShowModal((prev) => !prev);
    setDataArray(dataArray);
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
          지원한 간병인 ({route.params.dataArray.length}명)
        </Text>
        {route.params.dataArray.map((item, index) => {
          return (
            <Item style={styles.shadow} key={index}>
              <FlexBoth style={{ marginBottom: 13 }}>
                <View>
                  <Profile>
                    {/* <ProfileImg><Image source={require("")} /></ProfileImg> */}
                    <ProfileImg>
                      <Icon name="person-sharp" color="#bbb" size={21} />
                    </ProfileImg>
                    <View>
                      <ProfileName>{item.user.userName}</ProfileName>
                      <ProfileDate>{item.user.sex}</ProfileDate>
                    </View>
                  </Profile>
                </View>
                <View>
                  <PriceTxt>
                    간병비
                    <NumberFormat
                      value={item.caregiverCost}
                      displayType={"text"}
                      thousandSeparator={true}
                      suffix={"원"}
                      renderText={(formattedValue) => (
                        <Text>{"(" + formattedValue + ")"}</Text>
                      )}
                    />
                  </PriceTxt>
                </View>
              </FlexBoth>
              <SubmitBtn
                small={true}
                text="간병인 정보 확인"
                style={{ height: 48 }}
                onPress={() => {
                  openModal(item);
                }}
              />
              <ProfileModal
                showModal={showModal}
                setShowModal={setShowModal}
                dataArray={dataArray}
                navigation={navigation}
              />
            </Item>
          );
        })}
      </Container>
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
