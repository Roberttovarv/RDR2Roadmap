import React, { useEffect, useRef } from "react";
import { Animated, View, StyleSheet, ViewStyle } from "react-native";

type Props = {
  shown: boolean;
  first: React.ReactNode;
  second: React.ReactNode;
  duration?: number;
  translateY?: number;
  style?: ViewStyle;
};

export const GridSwitchAnimation = ({
  shown,
  first,
  second,
  duration = 260,
  translateY = 10,
  style,
}: Props) => {
  const progress = useRef(new Animated.Value(shown ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(progress, {
      toValue: shown ? 1 : 0,
      duration,
      useNativeDriver: true,
    }).start();
  }, [shown, duration, progress]);

  const firstOpacity = progress; // 0..1
  const secondOpacity = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  const firstTranslate = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [translateY, 0],
  });

  const secondTranslate = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, translateY],
  });

  return (
    <View style={[styles.container, style]}>
      <Animated.View
        pointerEvents={shown ? "auto" : "none"}
        style={[
          StyleSheet.absoluteFillObject,
          { opacity: firstOpacity, transform: [{ translateY: firstTranslate }] },
        ]}
      >
        {first}
      </Animated.View>

      <Animated.View
        pointerEvents={!shown ? "auto" : "none"}
        style={[
          StyleSheet.absoluteFillObject,
          { opacity: secondOpacity, transform: [{ translateY: secondTranslate }] },
        ]}
      >
        {second}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,              
    position: "relative",
  },
});
