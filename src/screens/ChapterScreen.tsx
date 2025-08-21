import { StyleSheet, Text, View } from "react-native";
import { MissionList } from "../components/MissionsList/MissionList";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../types";

type ChapterRouteProp = RouteProp<RootStackParamList, "Chapter">;

export const ChapterScreen = ({ route }: { route: ChapterRouteProp }) => {
  const { chapter } = route.params;

  return (
    <>
      <View style={styles.root}>
      <MissionList chapter={chapter} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  root: {flex: 1}
})