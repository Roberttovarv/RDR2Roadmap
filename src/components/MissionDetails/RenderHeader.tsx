import { View, Text, StyleSheet } from "react-native";
import { renderMissionDetailSymbol } from "./renderMissionDetailSymbol";
import { useFonts, Rye_400Regular } from "@expo-google-fonts/rye";
type Props = {
  sym: string;
  title: string;
};

export const RenderHeader = ({ sym, title }: Props) => {
  const [fontsLoaded] = useFonts({
    Rye_400Regular,
  });

  if (!fontsLoaded) return null;

  const symbol = renderMissionDetailSymbol(sym, 48);

  return (
    <View>
      <Text style={styles.header}>{title}</Text>
      {symbol && <View style={{}}>{symbol}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontFamily: "Rye_400Regular",
    fontSize: 32,
    marginTop: 72,
    textAlign: "center",
    padding: 16,
  },
});
