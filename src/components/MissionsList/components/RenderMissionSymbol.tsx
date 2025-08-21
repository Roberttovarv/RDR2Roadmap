import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons/";
import { Fontisto } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Text } from "react-native";
import { Colors } from "../../../../utils/colors";

export const RenderMissionSymbol = ({sym, size}: {sym: string, size: number}) => {
  if (sym === "*") {
    return (
      <MaterialCommunityIcons name="cards-diamond" size={size} color={Colors.darkest_brown} />
    );
  }
  if (sym === "BOUNTY") {
    return <Ionicons name="skull" size={size} color={Colors.darkest_brown} />;
  }
  if (sym === "DEBT") {
    return <FontAwesome5 name="dollar-sign" size={size} color={Colors.darkest_brown} />;
  }
  if (sym === "GANG") {
    return <Fontisto name="tent" size={size} color={Colors.darkest_brown} />;
  }
    if (sym === "?") {
    return <FontAwesome5 name="question" size={size - 2} color={Colors.darkest_brown} />;

  }
  return <Text style={{ fontSize: 16, fontWeight: "800" }}>{sym}</Text>;
};
