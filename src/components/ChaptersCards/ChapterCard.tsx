import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Platform,
  ImageBackground,
} from "react-native";
import { Colors } from "../../../utils/colors";
import { renderSymbol } from "./renderSymbol";

const chapters = [1, 2, 3, 4, 5, 6, "EP1", "EP2"];
export const ChapterCard = () => {
  const renderCard = (chapter: number | string) => {
    return (
      <View style={styles.grid}>
        <ImageBackground
          source={require("../../assets/BackgroundCHAPTER.png")}
          resizeMode="stretch"
        >
          <View>
            <Text> Chapter {chapter}</Text>
          </View>
          <View>
            <Text>{renderSymbol(chapter)}</Text>
          </View>
        </ImageBackground>
      </View>
    );
  };
  return (
    <>
      <FlatList
        data={chapters}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => renderCard(item)}
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
});
