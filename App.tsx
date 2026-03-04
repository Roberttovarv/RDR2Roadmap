import { SafeAreaView, StyleSheet, StatusBar, View } from "react-native";
import { MainScreen } from "./src/screens/MainScreen";
import {
  useFonts,
  EduNSWACTFoundation_400Regular,
  EduNSWACTFoundation_600SemiBold,
} from "@expo-google-fonts/edu-nsw-act-foundation";
import { Rye_400Regular } from "@expo-google-fonts/rye";
import { Colors } from "./utils/colors";
import { useEffect, useState } from "react";
import { initMissions } from "./src/storage/missions";

export default function App() {
  const [fontsLoaded] = useFonts({
    EduNSWACTFoundation_400Regular,
    Rye_400Regular,
    EduNSWACTFoundation_600SemiBold,
  });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let active = true;

    const bootstrap = async () => {
      await initMissions();
      if (active) {
        setReady(true);
      }
    };

    bootstrap();

    return () => {
      active = false;
    };
  }, []);

  if (!fontsLoaded || !ready) {
    return <View style={styles.container} />;
  }

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
