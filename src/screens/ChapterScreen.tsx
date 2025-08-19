import { Text, View } from "react-native";
import { MissionList } from "../components/MissionsList/MissionList";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../types";

type ChapterRouteProp = RouteProp<RootStackParamList, "Chapter">;

export const ChapterScreen = ({ route }: { route: ChapterRouteProp }) => {
  const { chapter } = route.params;

  return (
    <>
      <View>
        <Text>Chapter {chapter}</Text>
      </View>
      <MissionList chapter={chapter} />
    </>
  );
};