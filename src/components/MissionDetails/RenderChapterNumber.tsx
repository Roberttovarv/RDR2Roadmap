import { Text, StyleSheet, View } from "react-native";
import { Colors } from "../../../utils/colors";

export const RenderChapterNumber = ({
  chapter,
}: {
  chapter: string | number;
}) => {


  if (typeof chapter === "string")
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Epilogue {parseInt(chapter[chapter.length -1]) > 1 ? "II" : "I"}</Text>
      </View>
    );
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Chapter: {chapter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "EduNSWACTFoundation_600SemiBold",
    fontSize: 24,
    paddingHorizontal: 16,
    paddingVertical: 6,
    color: Colors.dark_brown,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});
