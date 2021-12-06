import React from "react";
import { StyleSheet, View, ScrollView, Alert, Image, Text } from "react-native";
import DefaultLayout from "../../components/layout/DefaultLayout";
import SectionLayout from "../../components/layout/SectionLayout";
import {
  MainHedaer,
  MainBanner,
  MainBannerHd,
  BannerBtnBox,
  MainBannerTxt,
  ImgBg,
  Btn,
  BtnTit,
  BtnTxt,
  NotiBox,
  MainTitle,
} from "../../components/main/MainStyle";
import MainButton from "../../components/main/MainButton";
import MainNotice from "./MainNotice";
import MainSwiper from "./MainSwiper";
import logo from "../../assets/img/main_logo.png";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PatientMain() {
  return (
    <DefaultLayout nestedScrollEnabled={true}>
      <MainHedaer>
        <Image style={{ width: 120 }} resizeMode="contain" source={logo} />
      </MainHedaer>
      <MainBanner>
        <ImgBg
          source={require("../../assets/img/main_banner.png")}
          resizeMode="contain"
        >
          <MainBannerTxt>
            쉽고 간편하게 간병인을{"\n"}
            신청해보세요.
          </MainBannerTxt>
        </ImgBg>
        <BannerBtnBox style={styles.shadow}>
          <MainButton
            text="간병 서비스 신청"
            onPress={() => Alert.alert("간병서비스 신청 탭으로 넘어갑니다.")}
          />
        </BannerBtnBox>
        <MainBannerHd />
      </MainBanner>
      <SectionLayout lastBox={false}>
        <View
          style={{
            ...styles.shadow,
            backgroundColor: "#fff",
            borderRadius: 8,
          }}
        >
          {/* Btn 누르면 간병 서비스 신청방법으로 넘어갑니다. 다만 지금은 서비스가 완성되지 않았고, 문구도 주시지 않았기 때문에 서비스 준비중으로 해놓겠습니다.*/}
          <Btn
            activeOpacity={0.8}
            onPress={() => Alert.alert("서비스 준비중입니다.")}
          >
            <BtnTit>간병 서비스 신청방법</BtnTit>
            <BtnTxt>앱 사용법을 알려드립니다!</BtnTxt>
          </Btn>
        </View>
      </SectionLayout>

      <NotiBox>
        <MainTitle>공지사항</MainTitle>
        <MainNotice />
      </NotiBox>

      <SectionLayout last={true}>
        <MainTitle>케어코리아 홍보영상</MainTitle>
        <MainSwiper />
      </SectionLayout>
    </DefaultLayout>
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
