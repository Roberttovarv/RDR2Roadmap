import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Pressable,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../../../../utils/colors";
import { renderChapterSymbol } from "./renderChapterSymbol";
import { useLayoutEffect, useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../types";

type ChapterCardNavigation = NativeStackNavigationProp<
  RootStackParamList,
  "Chapters"
>;

type Props = {
  chapter: number | string;
  itemWidth: number; 
};

export const RenderSingleCard = ({ chapter, itemWidth }: Props) => {
    
  const navigation = useNavigation<ChapterCardNavigation>();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);


  const title =
    typeof chapter === "string" && chapter.startsWith("EP")
      ? `Epilogue ${chapter.slice(2)}`
      : `Chapter ${chapter}`;

  return (
    <Pressable
      onPress={() => navigation.navigate("Chapter", { chapter })}
      style={({pressed}) => [{ width: itemWidth }, pressed && styles.pressedStyle]}
    >
      <View style={[styles.grid, { width: itemWidth }]}>
        <ImageBackground
          source={require("../../../../assets/chapter_grid_background2.webp")}
          resizeMode="cover"
          style={styles.bg}
        >
          <View style={styles.containerWrapper}>
            <View style={styles.symbol}>
              <Text style={styles.header}>
                {title}
              </Text>
            </View>
            <View style={styles.symbol}>{renderChapterSymbol(chapter)}</View>
          </View>
        </ImageBackground>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  grid: {
    height: 200,
    elevation: 4,
    shadowColor: Colors.brown,
    shadowOpacity: 0.35,
    shadowOffset: { width: -2, height: 2 },
    shadowRadius: 5,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  header: {
    color: Colors.dark_brown,
    fontSize: 20,
    paddingTop: 6,
    paddingBottom: 24,
    fontFamily: "Rye_400Regular"
  },
  symbol: { justifyContent: "center" },
  bg: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  containerWrapper: {
    margin: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  pressedStyle: {
    elevation: 6,
    shadowColor: Colors.darkest_brown,
    shadowOffset: {width: -2, height: 2},
    shadowOpacity: 1,
    shadowRadius: 3,
    opacity: .5
  }
});
