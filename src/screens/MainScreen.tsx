import { Text, View, StyleSheet } from "react-native"
import { MissionList } from "./missions list/MissionList"
import { ChaperList } from "./missions list/ChapterList";
import { Colors } from "../../utils/colors";
import { ChapterCard } from "../components/ChaptersCards/ChapterCard";

export const MainScreen = () => {
    return (
        <View style={styles.container}>
          <ChapterCard />
          <ChaperList />
        </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.brown,
  },
});