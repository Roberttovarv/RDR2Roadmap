import React, { useEffect, useMemo, useRef, useState } from "react";
import { Animated, View, StyleSheet, ViewStyle } from "react-native";

type Props = {
  shown: boolean;           
  first: React.ReactNode;
  second: React.ReactNode;
  duration?: number;
  translateY?: number;
  style?: ViewStyle;
  onTransitionEnd?: () => void;
};

export const GridSwitchAnimation = ({
  shown,
  first,
  second,
  duration = 260,
  translateY = 10,
  style,
  onTransitionEnd,
}: Props) => {
  const progress = useRef(new Animated.Value(shown ? 1 : 0)).current;

  const [mountedFirst, setMountedFirst] = useState<boolean>(shown);
  const [mountedSecond, setMountedSecond] = useState<boolean>(!shown);

  const animRef = useRef<Animated.CompositeAnimation | null>(null);

  useEffect(() => {
    setMountedFirst(true);
    setMountedSecond(true);

    animRef.current?.stop();

    const toValue = shown ? 1 : 0;
    const anim = Animated.timing(progress, {
      toValue,
      duration,
      useNativeDriver: true,
    });

    animRef.current = anim;
    anim.start(({ finished }) => {
      if (finished) {
        if (shown) {
          setMountedSecond(false);
        } else {
          setMountedFirst(false);
        }
        onTransitionEnd?.();
      }
      animRef.current = null;
    });

    return () => animRef.current?.stop();
  }, [shown, duration, progress, onTransitionEnd]);

  const firstOpacity = progress; 
  const secondOpacity = useMemo(
    () =>
      progress.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0],
      }),
    [progress]
  );

  const firstTranslate = useMemo(
    () =>
      progress.interpolate({
        inputRange: [0, 1],
        outputRange: [translateY, 0],
      }),
    [progress, translateY]
  );

  const secondTranslate = useMemo(
    () =>
      progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, translateY],
      }),
    [progress, translateY]
  );

  return (
    <View style={[styles.container, style]}>
      {mountedFirst && (
        <Animated.View
          pointerEvents={shown ? "auto" : "none"}
          style={[
            StyleSheet.absoluteFillObject,
            { opacity: firstOpacity, transform: [{ translateY: firstTranslate }] },
          ]}
        >
          {first}
        </Animated.View>
      )}

      {mountedSecond && (
        <Animated.View
          pointerEvents={!shown ? "auto" : "none"}
          style={[
            StyleSheet.absoluteFillObject,
            { opacity: secondOpacity, transform: [{ translateY: secondTranslate }] },
          ]}
        >
          {second}
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
});
