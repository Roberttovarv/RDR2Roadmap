import { StyleSheet, Text } from "react-native";
import {
  useFonts,
  EduNSWACTFoundation_600SemiBold,
} from "@expo-google-fonts/edu-nsw-act-foundation";
import { DEVICE_LANGUAGE } from "../../../device";
import { Colors } from "../../../utils/colors";

export const RenderDeadline = ({
  deadline,
}: {
  deadline: string | number | null;
}) => {
  const [fontsLoaded] = useFonts({
    EduNSWACTFoundation_600SemiBold,
  });

  const EP1_LINE =
    DEVICE_LANGUAGE === "es"
      ? "Debe completarse antes del Epílogo I"
      : "Must be completed before Epilogue I";
  const EP2_LINE =
    DEVICE_LANGUAGE === "es"
      ? "Debe completarse antes del Epílogo II"
      : "Must be completed before Epilogue II";
  const CHAP_LINE =
    DEVICE_LANGUAGE === "es"
      ? `Debe completarse antes del capítulo ${deadline}`
      : `Must be completed before chapter ${deadline}`;

  if (!fontsLoaded) return null;
  if (!deadline) return null;
  if (deadline === "EP1") return <Text style={styles.text}>{EP1_LINE}</Text>;
  if (deadline === "EP2") return <Text style={styles.text}>{EP2_LINE}</Text>;
  return <Text style={styles.text}>{CHAP_LINE}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "EduNSWACTFoundation_600SemiBold",
    fontSize: 24,
    paddingHorizontal: 16,
    paddingVertical: 6,
    color: Colors.red
  },
});
