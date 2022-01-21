import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import { WebView } from "react-native-webview";

export default function PdfView() {
  return (
    <>
      <View style={{ flex: 1 }}>
        <WebView source={{ uri: "https://reactnative.dev/" }} />
      </View>
    </>
  );
}
