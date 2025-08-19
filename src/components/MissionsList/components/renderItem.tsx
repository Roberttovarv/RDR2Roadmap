import { Text, View, StyleSheet, Pressable } from "react-native";
import { Mission } from "../../../../types";
import { DEVICE_LANGUAGE } from "../../../../device";
import { Colors } from "../../../../utils/colors";
import { RenderMissionSymbol } from "./RenderMissionSymbol";
import Checkbox from "expo-checkbox";

export const renderItem = ({ item }: { item: Mission }) => {
  const { mission_es, mission_en, sym, deadline } = item;


  const title = DEVICE_LANGUAGE === "es" ? mission_es : mission_en;

  return (
    <View style={styles.listContainer}>
      <View style={styles.listSide}>{RenderMissionSymbol(sym)}</View>
      <Pressable>
      <View style={styles.listCenter}>
        <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">
          {title}
        </Text>
      </View>
      </Pressable>
      <View style={styles.listSide}>
        <Text style={styles.text}>{deadline}</Text>
      </View>
      <View style={styles.listSide}>
        <Checkbox value={undefined} onValueChange={undefined} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: "row",
    padding: 12,
    backgroundColor: Colors.map,
    alignItems: "center",
    margin: 4,
    borderColor: Colors.dark_dust_brown,
    borderWidth: 4,
    borderRadius: 6,
  },
  listSide: {
    flex: 1.25,
    justifyContent: "center",
    alignItems: "center",
  },
  listCenter: {
    flex: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "800",
  },
});
