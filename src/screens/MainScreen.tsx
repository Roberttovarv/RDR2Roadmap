import { Text, View, StyleSheet } from "react-native"
import { MissionList } from "./missions list/MissionList"

export const MainScreen = () => {
    return (
        <View style={styles.container}>
            <MissionList />
        </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});