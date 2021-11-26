import React, { useRef, useCallback } from "react";
import { Text, Alert, Clipboard } from "react-native";
import { Complete, CompleteTit } from "../../components/form/CareFormStyle";
import {
  BankBox,
  ClipboardBtn,
  ClipSpan,
  FlexBoth,
  BankNumber,
} from "../../components/history/HistoryStyle";
import Toast from "react-native-easy-toast";
import Icon from "react-native-vector-icons/Ionicons";
import { SubmitBtn } from "../../components/form/CareFormStyle";

export default function ApplicantComplete() {
  // Toast 메세지 출력
  const toastRef = useRef();
  const showCopyToast = useCallback(() => {
    toastRef.current.show("계좌번호가 복사되었습니다.");
  }, []);
  // 클립보드
  const copyToClipboard = () => {
    Clipboard.setString("123456789 농협");
    showCopyToast();
  };
  return (
    <>
      <Complete>
        <CompleteTit>
          입금이 확인되면{"\n"}
          매칭이 완료됩니다.
        </CompleteTit>
        <BankBox style={{ marginBottom: 20 }}>
          <FlexBoth>
            <Text style={{ color: "#333", fontSize: 16 }}>농협</Text>
            <Text style={{ color: "#333", fontSize: 16 }}>CARE KOREA</Text>
          </FlexBoth>
          <FlexBoth>
            {/* 간병비 금액 */}
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>165,000원</Text>
            {/* 간병 기간 */}
            <Text style={{ color: "#333", fontSize: 16 }}>
              간병 기간 (4박 5일)
            </Text>
          </FlexBoth>
          <ClipboardBtn activeOpacity={0.7} onPress={copyToClipboard}>
            <FlexBoth>
              <BankNumber>123-12345678-12</BankNumber>
              <ClipSpan>
                <Text style={{ fontSize: 13 }}>
                  <Icon name="clipboard-outline" size={13} color="#979797" />{" "}
                  복사
                </Text>
              </ClipSpan>
            </FlexBoth>
          </ClipboardBtn>
        </BankBox>

        <SubmitBtn
          text="확인"
          onPress={() => Alert.alert("메인 페이지로 이동합니다.")}
        />
      </Complete>
      <Toast
        ref={toastRef}
        textStyle={{ color: "white" }}
        positionValue={70}
        fadeInDuration={200}
        fadeOutDuration={1000}
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          borderRadius: 99,
          paddingHorizontal: 10,
        }}
      />
    </>
  );
}
