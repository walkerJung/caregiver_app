import React from "react";
import { StyleSheet, View, Image, Platform } from "react-native";
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
import { useQuery } from "@apollo/client";
import { NOTICE_LIST_QUERY } from "../query";

export default function PatientMain({ navigation }) {
  const { data, loading } = useQuery(NOTICE_LIST_QUERY, {
    fetchPolicy: "network-only",
    variables: { take: 4, skip: 0 },
  });
  return (
    <>
      {!loading && (
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
                간병인 서비스에{"\n"}
                지원해주세요.
              </MainBannerTxt>
            </ImgBg>
            <BannerBtnBox style={styles.shadow}>
              <MainButton
                text="간병 서비스 신청"
                onPress={() => navigation.navigate("UserApplyStack")}
              />
            </BannerBtnBox>
            <MainBannerHd />
          </MainBanner>

          <SectionLayout>
            <MainTitle>공지사항</MainTitle>
            <MainNotice data={data} navigation={navigation} />
          </SectionLayout>

          <SectionLayout last>
            <MainTitle>케어코리아 홍보영상</MainTitle>
            <MainSwiper />
          </SectionLayout>
        </DefaultLayout>
      )}
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
