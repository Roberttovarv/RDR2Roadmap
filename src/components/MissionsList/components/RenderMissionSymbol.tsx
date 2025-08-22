import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons/";
import { Fontisto } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Text } from "react-native";

export const RenderMissionSymbol = ({sym, size, color}: {sym: string, size: number, color: string}) => {
  if (sym === "*") {
    return (
      <MaterialCommunityIcons name="cards-diamond" size={size} color={color} />
    );
  }
  if (sym === "BOUNTY") {
    return <Ionicons name="skull" size={size} color={color} />;
  }
  if (sym === "DEBT") {
    return <FontAwesome5 name="dollar-sign" size={size} color={color} />;
  }
  if (sym === "GANG") {
    return <Fontisto name="tent" size={size} color={color} />;
  }
    if (sym === "?") {
    return <FontAwesome5 name="question" size={size - 2} color={color} />;

  }
  return <Text style={{ fontSize: 16, fontWeight: "800", color: color }}>{sym}</Text>;
};
