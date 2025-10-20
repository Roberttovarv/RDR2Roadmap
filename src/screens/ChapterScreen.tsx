import { StyleSheet, Text, View } from "react-native";
import { MissionList } from "../components/ChapterMissions/MissionsList/MissionList";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../types";
import { ScreenBackground } from "../components/ScreenBackground";
import { useLayoutEffect } from "react";


type ChapterRouteProp = RouteProp<RootStackParamList, "Chapter">;

export const ChapterScreen = ({ route }: { route: ChapterRouteProp }) => {
  const { chapter } = route.params;

  return (
    <>
      <View style={styles.root}>
        <ScreenBackground bg={1}>
          <MissionList chapter={chapter} />
        </ScreenBackground>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1 },
});
