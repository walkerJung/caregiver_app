import React, { useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import styled from "styled-components/native";
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/Ionicons";
import { SubmitBtn } from "../form/CareFormStyle";
const ModalBackground = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  justify-content: center;
  padding: 0 5%;
`;
const Container = styled.View`
  width: 100%;
  background-color: #fff;
  border-radius: 20px;
`;
const ModalHeader = styled.View`
  position: relative;
  padding: 15px 20px;
  background-color: #fff;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  border-bottom-width: 1px;
  border-color: #ddd;
`;
const ModalBody = styled.View`
  padding: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
`;
const ModalBodyTxt = styled.Text`
  font-size: 16px;
  color: #333;
  text-align: center;
`;
const Exit = styled.TouchableOpacity`
  position: absolute;
  right: 15px;
  top: 12px;
`;
export default function AlertModal({
  showModal,
  setShowModal,
  children,
  title,
  text,
  onPress,
}) {
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
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={{
                    textAlign: "center",
                    fontSize: 16,
                    fontWeight: "bold",
                    paddingHorizontal: 20,
                  }}
                >
                  {title}
                </Text>
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
                <ModalBodyTxt>{text}</ModalBodyTxt>
                <View style={{ marginBottom: 20 }}>{children}</View>
                <SubmitBtn small text="확인" onPress={onPress} />
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
