import {
  Dimensions,
  Image,
  SafeAreaView,
  View,
  Animated,
  StyleSheet,
} from "react-native";
import { useEffect, useRef, useState } from "react";
import { ChapterCard } from "../components/ChapterMissions/ChaptersCards/ChapterCard";
import { MissionTypeCard } from "../components/MissionType/MissionTypeCards";
import { SwitchScreenButton } from "../components/SwitchScreenButton";

export const ChaptersGrid = () => {
  const { width } = Dimensions.get("window");
  const [defaultScreen, setDefaultScreen] = useState<boolean>(true);

  const progress = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(progress, {
      toValue: defaultScreen ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [defaultScreen, progress]);

  const chapterOpacity = progress;
  const typeOpacity = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  const chapterTranslate = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [10, 0],
  });

  const typeTranslate = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 10],
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Image
        source={require("../../assets/header2.webp")}
        style={{ width, height: 210 }}
        resizeMode="stretch"
      />

      <SwitchScreenButton
        arg1="By Chapter"
        arg2="By Type"
        screen={defaultScreen}
        onPress={setDefaultScreen}
      />

      <View style={{ flex: 1 }}>
        <Animated.View
          pointerEvents={defaultScreen ? "auto" : "none"}
          style={{
            ...StyleSheet.absoluteFillObject,
            opacity: chapterOpacity,
            transform: [{ translateY: chapterTranslate }],
          }}
        >
          <ChapterCard />
        </Animated.View>

        <Animated.View
          pointerEvents={!defaultScreen ? "auto" : "none"}
          style={{
            ...StyleSheet.absoluteFillObject,
            opacity: typeOpacity,
            transform: [{ translateY: typeTranslate }],
          }}
        >
          <MissionTypeCard />
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};
