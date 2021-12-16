import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function WriteLayout({ children }) {
  return (
    <>
      <SafeAreaView edges={["left", "right"]} style={{ flex: 1 }}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          enabled
          keyboardVerticalOffset={Platform.OS === "ios" ? 65 : 0}
        >
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            scrollIndicatorInsets={{ right: 1 }}
          >
            {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss()}> */}
            <View
              style={{
                flex: 1,
                paddingVertical: 20,
                paddingHorizontal: "5%",
                backgroundColor: "#fff",
              }}
            >
              {children}
            </View>
            {/* </TouchableWithoutFeedback> */}
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
}
