import { StyleSheet, Text } from "react-native";
import {
  EduNSWACTFoundation_600SemiBold,
  useFonts,
  EduNSWACTFoundation_400Regular,
} from "@expo-google-fonts/edu-nsw-act-foundation";

export const RenderGivenBy = ({
  given_by,
  sym,
}: {
  given_by: string | null;
  sym: string;
}) => {
  const symbols = ["DEBT", "BOUNTY", "GANG"];

  const [fontsLoaded] = useFonts({
    EduNSWACTFoundation_600SemiBold,
    EduNSWACTFoundation_400Regular,
  });
  if (!fontsLoaded) return null;

  if (symbols.includes(sym))
    return <Text style={styles.other_mission}>{given_by}</Text>;
  if (sym === "*")
    return <Text style={styles.other_mission}>Automatic Mission</Text>;
  return <Text style={styles.text}>Given by: {given_by}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "EduNSWACTFoundation_400Regular",
    fontSize: 30,
    paddingHorizontal: 16,
  },
  other_mission: {
    fontFamily: "EduNSWACTFoundation_600SemiBold",
    fontSize: 36,
    padding: 16,
    textAlign: "center",
  },
});
