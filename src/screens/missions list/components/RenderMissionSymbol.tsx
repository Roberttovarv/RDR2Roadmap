import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons/";
import { Fontisto } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Text } from "react-native";

export const RenderMissionSymbol = (sym: string) => {
  if (sym === "*") {
    return (
      <MaterialCommunityIcons name="cards-diamond" size={18} color="black" />
    );
  }
  if (sym === "BOUNTY") {
    return <Ionicons name="skull" size={18} color="black" />;
  }
  if (sym === "DEBT") {
    return <FontAwesome5 name="dollar-sign" size={18} color="black" />;
  }
  if (sym === "GANG") {
    return <Fontisto name="tent" size={18} color="black" />;
  }
    if (sym === "?") {
    return <FontAwesome5 name="question" size={16} color="black" />;

  }
  return <Text style={{ fontSize: 16, fontWeight: "800" }}>{sym}</Text>;
};
