import { ImageBackground, View, StyleSheet } from "react-native";
import { ChapterCard } from "./ChapterCard";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { ChapterScreen } from "./ChapterScreen";
import { RootStackParamList } from "../../types";
import { MissionDetail } from "./MissionDetail";
import { ScreenBackground } from "../components/ScreenBackground";

export const MainScreen = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <ScreenBackground>
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              contentStyle: { backgroundColor: "transparent" },
            }}
          >
            <Stack.Screen name="Chapters" component={ChapterCard} />
            <Stack.Screen name="Chapter" component={ChapterScreen} />
            <Stack.Screen name="MissionDetails" component={MissionDetail} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </ScreenBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
