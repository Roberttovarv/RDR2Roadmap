import { StyleSheet, Text } from "react-native";
import { Colors } from "../../../../utils/colors";
import { LANG } from "../../../../device";

const STORY = LANG === "es" ? "Historia" : "Story";
const BOUNTY = LANG === "es" ? "Cazarrecompensas" : "Bounty";
const DEBT = LANG === "es" ? "Deudas" : "Debt Collection";
const GANG =
  LANG === "es" ? "Actividades de la banda" : "Gang Activities";
const EXT = LANG === "es" ? "Extraños" : "Strangers";
const MAIN = LANG === "es" ? "Amigos" : "Friends";

export const renderMissionTypeTitle = (sym: string) => {
  if (sym === "*") return <Text style={styles.header}>{STORY}</Text>;
  if (sym === "BOUNTY") return <Text style={styles.header}>{BOUNTY}</Text>;
  if (sym === "DEBT") return <Text style={styles.header}>{DEBT}</Text>;
  if (sym === "GANG") return <Text style={styles.header}>{GANG}</Text>;
  if (sym === "?"){ return <Text style={styles.header}>{EXT}</Text>;} else
  {return <Text style={styles.header}>{MAIN}</Text>;}
};

const styles = StyleSheet.create({
  header: {
    color: Colors.dark_brown,
    fontSize: 20,
    paddingTop: 6,
    paddingBottom: 24,
    fontFamily: "Rye_400Regular",
    textAlign: "center"
  },
});
