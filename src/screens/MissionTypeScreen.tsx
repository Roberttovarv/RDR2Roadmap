import { StyleSheet, Text, View } from "react-native";
import { MissionList } from "../components/MissionsList/MissionList";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../types";

type ChapterRouteProp = RouteProp<RootStackParamList, "Type">;

export const MissionTypeScreen = ({ route }: { route: ChapterRouteProp }) => {
  const { sym } = route.params;

  return (
    <>
      <View style={styles.root}>
      <MissionList chapter={sym} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  root: {flex: 1}
})