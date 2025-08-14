import { Text, View, StyleSheet } from "react-native"
import { MissionList } from "./missions list/MissionList"
import { ChaperList } from "./missions list/ChapterList";
import { Colors } from "../../utils/colors";

export const MainScreen = () => {
    return (
        <View style={styles.container}>
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