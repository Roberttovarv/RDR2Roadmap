import { useState } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { MissionList } from "../MissionList";
import { Colors } from "../../../../utils/colors";

type Props = {
  chapter: number | string;
};
export const RenderChapter = ({ chapter }: Props) => {
  return (
    <View>
      <View style={styles.chapterContainer}>
        <View style={styles.header}>
          <Text>CHAPTER {chapter}</Text>
        </View>
      </View>

      <View style={styles.body}>
        <MissionList chapter={chapter} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  root: { overflow: "visible" },
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
    color: Colors.map,
  },
  headerText: { fontSize: 20, fontWeight: "800", color: Colors.map },
  header: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  body: {
    paddingHorizontal: 4,
    paddingBottom: 6,
    backgroundColor: Colors.brown,
  },
});
