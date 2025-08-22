import { StyleSheet, Text } from "react-native";
import { Colors } from "../../../utils/colors";
import { DEVICE_LANGUAGE } from "../../../device";

const STORY = DEVICE_LANGUAGE === "es" ? "Historia" : "Story";
const BOUNTY = DEVICE_LANGUAGE === "es" ? "Cazarrecompensas" : "Bounty";
const DEBT = DEVICE_LANGUAGE === "es" ? "Deudas" : "Debt Collection";
const GANG =
  DEVICE_LANGUAGE === "es" ? "Actividades de la banda" : "Gang Activities";
const EXT = DEVICE_LANGUAGE === "es" ? "Extraños" : "Strangers";
const MAIN = DEVICE_LANGUAGE === "es" ? "Principales" : "Main Missions";

export const renderMissionTypeTitle = (sym: string) => {
  if (sym === "*") return <Text style={styles.header}>{STORY}</Text>;
  if (sym === "BOUNTY") return <Text style={styles.header}>{BOUNTY}</Text>;
  if (sym === "DEBT") return <Text style={styles.header}>{DEBT}</Text>;
  if (sym === "GANG") return <Text style={styles.header}>{GANG}</Text>;
  if (sym === "?") return <Text style={styles.header}>{EXT}</Text>;
  return <Text style={styles.header}></Text>;
};

const styles = StyleSheet.create({
  header: {
    color: Colors.dark_brown,
    fontSize: 20,
    paddingTop: 6,
    paddingBottom: 24,
    fontFamily: "Rye_400Regular",
  },
});
