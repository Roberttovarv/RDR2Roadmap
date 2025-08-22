import { StyleSheet, Text } from "react-native";

import { Colors } from "../../../utils/colors";

export const RenderGivenBy = ({
  given_by,
  sym,
}: {
  given_by: string | null;
  sym: string;
}) => {
  const symbols = ["DEBT", "BOUNTY", "GANG"];



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
    color: Colors.darkest_brown
  },
  other_mission: {
    fontFamily: "EduNSWACTFoundation_600SemiBold",
    fontSize: 36,
    padding: 16,
    textAlign: "center",
    color: Colors.darkest_brown
  },
});
