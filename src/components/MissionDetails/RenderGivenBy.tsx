import { StyleSheet, Text } from "react-native";
import { Colors } from "../../../utils/colors";
import { LANG } from "../../../device";

export const RenderGivenBy = ({
  given_by,
  sym,
}: {
  given_by: string | null;
  sym: string;
}) => {
  if (sym === "*") {
    return (
      <Text style={styles.other_mission}>
        {LANG === "es" ? "Misión automática" : "Automatic Mission"}
      </Text>
    );
  }

  if (sym === "DEBT") {
    return (
      <Text style={styles.other_mission}>
        {LANG === "es" ? "Cobro de deudas" : "Debt Collection"}
      </Text>
    );
  }

  if (sym === "BOUNTY") {
    return (
      <Text style={styles.other_mission}>
        {LANG === "es" ? "Cazarrecompensas" : "Bounty Hunt"}
      </Text>
    );
  }

  if (sym === "GANG") {
    return (
      <Text style={styles.other_mission}>
        {LANG === "es" ? "Actividades de la banda" : "Gang Members Activities"}
      </Text>
    );
  }

  return (
    <Text style={styles.text}>
      {LANG === "es" ? "Otorgada por: " : "Given by: "} {given_by}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "EduNSWACTFoundation_400Regular",
    fontSize: 30,
    paddingHorizontal: 16,
    color: Colors.darkest_brown,
  },
  other_mission: {
    fontFamily: "EduNSWACTFoundation_600SemiBold",
    fontSize: 36,
    padding: 16,
    textAlign: "center",
    color: Colors.darkest_brown,
  },
});
