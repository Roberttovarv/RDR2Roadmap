import { Text, View, StyleSheet, Pressable } from "react-native";
import { Mission, RootStackParamList } from "../../../../types";
import { DEVICE_LANGUAGE } from "../../../../device";
import { Colors } from "../../../../utils/colors";
import { RenderMissionSymbol } from "./RenderMissionSymbol";
import Checkbox from "expo-checkbox";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MaterialIcons } from "@expo/vector-icons";

type MissionDetailsNav = NativeStackNavigationProp<
  RootStackParamList,
  "MissionDetails"
>;
export const RenderChapterItem = ({ item }: { item: Mission }) => {
  const { mission_es, mission_en, sym, deadline } = item;
  const navigation = useNavigation<MissionDetailsNav>();

  const title = DEVICE_LANGUAGE === "es" ? mission_es : mission_en;

  return (
    <View style={styles.listContainer}>
      <View style={styles.leftSide}>{<RenderMissionSymbol sym={sym} size={18} />}</View>
      <Pressable
        onPress={() => navigation.navigate("MissionDetails", { mission: item })}
      >
        <View style={styles.listCenter}>
          <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">
            {title}
          </Text>
        </View>
      </Pressable>
      <View style={styles.rightSide}>
        <Text style={styles.text}>
          {deadline && <MaterialIcons name="timer" size={18} color="black" />}
        </Text>
        <Checkbox
          value={false}
          onValueChange={() => {}}
          color={Colors.dark_brown}
          style={styles.checkBox}
        />
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
  leftSide: {
    flex: 1.25,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },
  rightSide: {
    flex: 1.25,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  listCenter: {
    flex: 8,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: "800",
  },
  checkBox: {
    backgroundColor: "transparent",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 4,
  },
});
