import { ImageBackground, View, StyleSheet } from "react-native";
import { Colors } from "../../utils/colors";
import { ChapterCard } from "../components/ChaptersCards/ChapterCard";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { ChapterScreen } from "./ChapterScreen";
import { RootStackParamList } from "../../types";
import { MissionDetail } from "./MissionDetail";
export const MainScreen = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <ImageBackground
      source={require("../../assets/bg_wood2.webp")}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{ contentStyle: { backgroundColor: "transparent" } }}
          >
            <Stack.Screen name="Chapters" component={ChapterCard} />
            <Stack.Screen name="Chapter" component={ChapterScreen} />
            <Stack.Screen name="MissionDetails" component={MissionDetail} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
