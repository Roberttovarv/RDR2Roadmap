import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Platform,
  ImageBackground,
  Pressable,
} from "react-native";
import { Colors } from "../../../utils/colors";
import { renderChapterSymbol } from "./renderChapterSymbol";
import { useFonts, Rye_400Regular } from "@expo-google-fonts/rye";
import { useLayoutEffect } from "react";
import { RootStackParamList } from "../../../types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
// Smokum
const chapters = [1, 2, 3, 4, 5, 6, "EP1", "EP2"];
type ChapterCardNavigation = NativeStackNavigationProp<RootStackParamList, "Chapters">

export const ChapterCard = ({navigation}: {navigation: ChapterCardNavigation}) => {

  useLayoutEffect(() => {navigation.setOptions({headerShown: false})})
  const [fontsLoaded] = useFonts({Rye_400Regular})
    if (!fontsLoaded) {
    return null; 
  }
  const renderCard = (chapter: number | string) => {
    
    return (
      <Pressable onPress={() => navigation.navigate("Chapter", {chapter})}>

      <View style={styles.grid}>
        <ImageBackground
          source={require("../../../assets/chapter_grid_background.png")}
          resizeMode="cover"
          style={styles.bg}
          >
          <View>
            <Text style={[styles.header, {fontFamily: "Rye_400Regular"}]} >Chapter {chapter}</Text>
          </View>
          <View>
            <Text style={styles.symbol}>{renderChapterSymbol(chapter)}</Text>
          </View>
        </ImageBackground>
      </View>
    </Pressable>
    );
  };
  return (
    <>
      <FlatList
        data={chapters}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => renderCard(item)}
        numColumns={2}
      />
    </>
  );
};

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    margin: 16,
    height: 200,
    width: "auto",
    elevation: 4,
    shadowColor: Colors.brown,
    shadowOpacity: 0.35,
    shadowOffset: { width: -2, height: 2 },
    shadowRadius: 5,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  header: {
    textAlign: "center",
    color: Colors.dark_dust_brown,
    fontSize: 24,
    paddingTop: 6,
    paddingBottom: 24,
    flexShrink: 1,        
  flexWrap: "wrap",     
  maxWidth: "90%", 
  },
  symbol: {
    textAlign: "center",
  },
  bg: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 12,
  },
});
