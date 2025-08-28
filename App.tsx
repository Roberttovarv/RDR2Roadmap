import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { MainScreen } from "./src/screens/MainScreen";
import {
  useFonts,
  EduNSWACTFoundation_400Regular,
  EduNSWACTFoundation_600SemiBold,
} from "@expo-google-fonts/edu-nsw-act-foundation";
import { Rye_400Regular } from "@expo-google-fonts/rye";
import { Smokum_400Regular } from "@expo-google-fonts/smokum";
import { Colors } from "./utils/colors";
import { useEffect } from "react";
import { initMissions } from "./src/storage/missions";
import { DeviceLangTag, LANG } from "./device";
export default function App() {
  const [fontsLoaded] = useFonts({
    EduNSWACTFoundation_400Regular,
    Rye_400Regular,
    EduNSWACTFoundation_600SemiBold,
    Smokum_400Regular,
  });
  useEffect(() => {
    initMissions()
  }, []);
  if (!fontsLoaded) return null;
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        animated={true}
        backgroundColor={Colors.darkest_brown}
      />
      <MainScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkest_brown,
  },
});
