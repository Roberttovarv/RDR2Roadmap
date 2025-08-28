import { StyleSheet, Text } from "react-native";

import { LANG } from "../../../device";
import { Colors } from "../../../utils/colors";

export const RenderDeadline = ({
  deadline,
}: {
  deadline: string | number | null;
}) => {


  const EP1_LINE =
    LANG === "es"
      ? "Debe completarse antes del Epílogo I"
      : "Must be completed before Epilogue I";
  const EP2_LINE =
    LANG === "es"
      ? "Debe completarse antes del Epílogo II"
      : "Must be completed before Epilogue II";
  const CHAP_LINE =
    LANG === "es"
      ? `Debe completarse antes del capítulo ${deadline}`
      : `Must be completed before chapter ${deadline}`;

  if (deadline === "EP1") return <Text style={styles.text}>{EP1_LINE}</Text>;
  if (deadline === "EP2") return <Text style={styles.text}>{EP2_LINE}</Text>;
  if (deadline) return <Text style={styles.text}>{CHAP_LINE}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "EduNSWACTFoundation_600SemiBold",
    fontSize: 22,
    paddingHorizontal: 16,
    paddingVertical: 6,
    color: Colors.red,
    textAlign: "center"
  },
});
