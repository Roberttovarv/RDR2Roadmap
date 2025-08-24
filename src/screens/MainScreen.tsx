import {  View, StyleSheet, } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { ChapterScreen } from "./ChapterScreen";
import { RootStackParamList } from "../../types";
import { MissionDetail } from "./MissionDetail";
import { ScreenBackground } from "../components/ScreenBackground";
import { ChaptersGrid } from "./ChaptersGrid";
import { MissionTypeScreen } from "./MissionTypeScreen";
import { Colors } from "../../utils/colors";


export const MainScreen = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <ScreenBackground>

      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              contentStyle: { backgroundColor: "transparent" },
              headerStyle: {backgroundColor: Colors.darkest_brown},
              headerTintColor: Colors.map,
              headerTitleStyle: {
                fontFamily: "Rye_400Regular",
                fontSize: 20
              },
              headerTitleAlign: "center"
            }}

          >
            <Stack.Screen name="Chapters" component={ChaptersGrid} />
            <Stack.Screen name="Chapter" component={ChapterScreen} />
            <Stack.Screen name="MissionDetails" component={MissionDetail} />
            <Stack.Screen name="Type" component={MissionTypeScreen} />
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
