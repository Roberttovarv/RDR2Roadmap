import { Entypo } from "@expo/vector-icons/";
import { Text, StyleSheet, View } from "react-native";

import { Colors } from "../../../utils/colors";

export const RenderCompleted = ({ completed }: { completed: boolean }) => {


    const isCompleted = completed ? <Entypo name="check" size={28} color={Colors.brown_green} /> : <Entypo name="cross" size={32} color={Colors.dark_brown} />

    return <View style={styles.container}>
        <Text style={styles.text}>Completed:</Text>
         {isCompleted}
        </View>
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "EduNSWACTFoundation_600SemiBold",
    fontSize: 24,
    paddingLeft: 16,
    paddingVertical: 6,
    color: Colors.dark_brown,

  },
  container: {
    flexDirection: "row",
    alignItems: "center"
  }
});
