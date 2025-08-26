import { StyleSheet, View } from "react-native";
import { RenderCompleted } from "./RenderCompleted";
import { RenderChapterNumber } from "./RenderChapterNumber";
import { Colors } from "../../../utils/colors";
import { Mission } from "../../../types";
import { CustomButton } from "../CustomButton";
import { useEffect, useState } from "react";
import { getAllMissions, toggleCompleted } from "../../storage/missions";

export const RenderFooter = ({ mission }: { mission: Mission }) => {
  const [completed, setCompleted] = useState<boolean>(mission.completed);
  const [buttonText, setButtonText] = useState<string>(
    mission.completed ? "Set as uncompleted" : "Set as completed"
  );

  const handlePress = async () => {
    const next = !completed;
    setCompleted(next);
    setTimeout(()=>{

      setButtonText(next ? "Set as uncompleted" : "Set as completed");
    },100)

    try {
      await toggleCompleted(mission.ID, next);
    } catch (e) {
      setCompleted(!next);
        setTimeout(()=>{
      
          setButtonText(!next ? "Set as uncompleted" : "Set as completed");
    },100)
      console.error("Error toggling mission:", e);
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.data}>
        <RenderCompleted completed={completed} />
        <View style={styles.middleLine} />
        <RenderChapterNumber chapter={mission.chapter} />
      </View>
      <View>
        <CustomButton onPress={handlePress} text={buttonText} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  data: {
    flexDirection: "row",
    borderColor: Colors.dark_brown,
    borderWidth: 5,
    borderRadius: 3,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    marginBottom: 80,
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 24,
  },
  middleLine: {
    width: 3,
    height: "100%",
    backgroundColor: Colors.dark_brown,
    marginHorizontal: 8,
  },
});
