import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { MainScreen } from "./src/screens/MainScreen";
import {
  useFonts,
  EduNSWACTFoundation_400Regular,
  EduNSWACTFoundation_600SemiBold,
} from "@expo-google-fonts/edu-nsw-act-foundation";
import { Rye_400Regular } from "@expo-google-fonts/rye";
import { Smokum_400Regular } from "@expo-google-fonts/smokum";
export default function App() {
  const [fontsLoaded] = useFonts({
    EduNSWACTFoundation_400Regular,
    Rye_400Regular,
    EduNSWACTFoundation_600SemiBold,
    Smokum_400Regular,
  });

  if (!fontsLoaded) return null;
  return (
    <SafeAreaView style={styles.container}>
      <MainScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
