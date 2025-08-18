import { Text, View, StyleSheet } from "react-native"
import { Colors } from "../../utils/colors";
import { ChapterCard } from "../components/ChaptersCards/ChapterCard";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { ChapterScreen } from "./ChapterScreen";
import { RootStackParamList } from "../../types";
export const MainScreen = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>()
    return (
        <View style={styles.container}>
          <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Chapters" component={ChapterCard} />
            <Stack.Screen name="Chapter" component={ChapterScreen}/>
          </Stack.Navigator>
          </NavigationContainer>
        </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.brown,
  },
});