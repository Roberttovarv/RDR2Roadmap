// ChapterCard.tsx
import React, { useLayoutEffect, useState } from "react";
import {
  View, Text, FlatList, StyleSheet, Platform,
  ImageBackground, Pressable, LayoutChangeEvent
} from "react-native";
import { Colors } from "../../../utils/colors";
import { renderChapterSymbol } from "./renderChapterSymbol";
import { useFonts, Rye_400Regular } from "@expo-google-fonts/rye";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../types";

const chapters = [1, 2, 3, 4, 5, 6, "EP1", "EP2"];
type ChapterCardNavigation = NativeStackNavigationProp<RootStackParamList,"Chapters">;

const GAP = 16;         
const HPAD = 16;         

export const ChapterCard = ({ navigation }: { navigation: ChapterCardNavigation }) => {
  useLayoutEffect(() => { navigation.setOptions({ headerShown: false }) }, [navigation]);

  const [fontsLoaded] = useFonts({ Rye_400Regular });
  const [containerWidth, setContainerWidth] = useState<number>(0);

  const onLayout = (e: LayoutChangeEvent) => {
    setContainerWidth(e.nativeEvent.layout.width);
  };

  if (!fontsLoaded) return null;

  const ITEM_WIDTH = containerWidth > 0
    ? (containerWidth - HPAD * 2 - GAP) / 2
    : 0;

  const renderCard = (chapter: number | string) => {
    const title = typeof chapter === "string" && chapter.startsWith("EP")
      ? `Epilogue ${chapter.slice(2)}`
      : `Chapter ${chapter}`;

    return (
      <Pressable onPress={() => navigation.navigate("Chapter", { chapter })} style={{ width: ITEM_WIDTH }}>
        <View style={[styles.grid, { width: ITEM_WIDTH }]}>
          <ImageBackground
            source={require("../../../assets/chapter_grid_background2.webp")}
            resizeMode="cover"
            style={styles.bg}
          >
            <View style={styles.containerWrapper}>

            <View style={styles.symbol}>
              <Text style={[styles.header, { fontFamily: "Rye_400Regular" }]}>{title}</Text>
            </View>
            <View style={styles.symbol}>
              {renderChapterSymbol(chapter)}
            </View>
            </View>
          </ImageBackground>
        </View>
      </Pressable>
    );
  };

  return (
    <View onLayout={onLayout} style={{ paddingHorizontal: HPAD, paddingVertical: GAP }}>
      <FlatList
        data={chapters}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => renderCard(item)}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between", marginBottom: GAP }}
      />
    </View>
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
    alignItems: "center"
  }
});
