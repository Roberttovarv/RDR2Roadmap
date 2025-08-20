import { RenderMissionSymbol } from "../MissionsList/components/RenderMissionSymbol";
import { StyleSheet, Text } from "react-native";

const allowed = ["DEBT", "BOUNTY", "GANG", "?"];

export const renderMissionDetailSymbol = (sym: string, size: number) => {
  if (!allowed.includes(sym)) return null;

  return (
    <Text style={styles.symbol}>
      <RenderMissionSymbol sym={sym} size={size} />
    </Text>
  );
};

const styles = StyleSheet.create({
  symbol: { textAlign: "center", padding: 8 },
});
