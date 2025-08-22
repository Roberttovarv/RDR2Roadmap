import {
  Text,
  View,
  StyleSheet,
  Pressable,
  ImageBackground,
} from "react-native";
import { Mission, RootStackParamList } from "../../../types";
import { Colors } from "../../../utils/colors";
import Checkbox from "expo-checkbox";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MaterialIcons } from "@expo/vector-icons";
import { DEVICE_LANGUAGE } from "../../../device";
import { renderMissionTypeSymbol } from "./list/renderMissionTypeSymbol";

type MissionDetailsNav = NativeStackNavigationProp<
  RootStackParamList,
  "MissionDetails"
>;


export const TypeMissionList = ({ sym }: { sym: string }) => {
  
  const navigation = useNavigation<MissionDetailsNav>();
  const title = DEVICE_LANGUAGE === "es" ? mission_es : mission_en;

  return (
    <ImageBackground
      style={{ flex: 1, paddingVertical: 10 }}
      source={require("../../../assets/mission_list2.webp")}
      resizeMode="stretch"
      imageStyle={{ borderRadius: 6}}
    >
      <View style={styles.listContainer}>
        <View style={styles.leftSide}>
            {renderMissionTypeSymbol(sym)}
        </View>

        <Pressable
          style={styles.pressableCenter}
          onPress={() => navigation.navigate("MissionDetails", { mission: item })}
        >
          <View style={styles.listCenter}>
            <Text
              style={styles.text}
              ellipsizeMode="tail" 
              numberOfLines={1}    
            >
              {title}
            </Text>
          </View>
        </Pressable>

        <View style={styles.rightSide}>
          {Boolean(deadline) && (
            <MaterialIcons
              name="timer"
              size={18}
              color={Colors.darkest_brown}
              style={{ marginRight: 10 }}
            />
          )}
          <Checkbox
            value={false}
            onValueChange={() => {}}
            color={Colors.darkest_brown}
            style={styles.checkBox}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    margin: 10,
  },
leftSide: {
  justifyContent: "flex-start", 
  alignItems: "flex-start",     
  flexDirection: "row",
},
  rightSide: {
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  },
  pressableCenter: {
    flex: 1,
    minWidth: 0, },
  listCenter: {
    flex: 1,
    minWidth: 0,
    overflow: "hidden", 
    justifyContent: "center",
    paddingHorizontal: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: "800",
    color: Colors.darkest_brown,
    flexShrink: 1,
    maxWidth: "100%",
    textAlign: "center"
  },
  checkBox: {
    backgroundColor: "transparent",
    borderWidth: 3,
    borderRadius: 4,
    marginLeft: 10, 
  },
});
