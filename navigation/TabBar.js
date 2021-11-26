import React, { useState, useEffect } from "react";
import { Animated } from "react-native";
import styled from "styled-components/native";
import { MaterialTopTabBarProps } from "@react-navigation/material-top-tabs";
import { careTheme } from "../contents";
import TabAni from "../contents/tab/TabAni";

const TabContainer = styled.View`
  padding-top: 16px;
  padding-bottom: 15px;
  border-bottom-width: 1px;
  border-color: #ededed;
  background: #fff;
`;

const TabWrapper = styled.View`
  flex-direction: row;
  display: flex;
  align-items: center;
`;

const BottomLine = styled.View`
  background-color: ${careTheme.COLORS.PRIMARY};
  height: 2px;
  width: 100%;
  margin-top: -5px;
`;

export default function TabBar({ state, descriptors, navigation }) {
  const [translateValue] = useState(new Animated.Value(0));
  const [width, setWidth] = useState(0);
  const [toValue, setToValue] = useState(0);

  useEffect(() => {
    Animated.spring(translateValue, {
      toValue,
      damping: 10,
      mass: 1,
      stiffness: 100,
      overshootClamping: true,
      restDisplacementThreshold: 0.001,
      restSpeedThreshold: 0.001,
      useNativeDriver: true,
    }).start();
  }, [state, translateValue, toValue]);

  return (
    <TabContainer>
      <TabWrapper>
        {state.routes.map((route, index) => {
          const label = route.name;
          const isFocused = state.index === index;
          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
          return (
            <TabAni
              isFocused={isFocused}
              key={`tab_${index}`}
              label={label}
              onPress={onPress}
              setToValue={setToValue}
              setWidth={setWidth}
            />
          );
        })}
      </TabWrapper>
      <BottomLine
        as={Animated.View}
        style={{
          transform: [{ translateX: translateValue }],
          width,
        }}
      />
    </TabContainer>
  );
}
