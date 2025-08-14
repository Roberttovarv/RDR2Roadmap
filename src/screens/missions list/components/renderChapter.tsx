import { Text, View, StyleSheet } from "react-native";
import { MissionList } from "../MissionList";
import { Colors } from "../../../../utils/colors";

type Props = {
  chapter: number | string;
};
export const renderChapter = ({ chapter }: Props) => {
  return (
    <>
      <View style={styles.chapterContainer}>
        <Text style={styles.text}>CHAPTER {chapter}</Text>
      </View>
      <MissionList chapter={chapter} />
    </>
  );
};
const styles = StyleSheet.create({
  chapterContainer: {
    flexDirection: "row",
    padding: 12,
    backgroundColor: Colors.dark_dust_brown,
    alignItems: "center",
    margin: 4,
    borderColor: "black",
    borderWidth: 4,
    borderRadius: 6,
  },
  text: {
    fontSize: 20,
    fontWeight: "800",
    color: Colors.map 
  },
});
