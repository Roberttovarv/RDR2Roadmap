import { StyleSheet, View } from "react-native";
import { RenderCompleted } from "./RenderCompleted";
import { RenderChapterNumber } from "./RenderChapterNumber";
import { Colors } from "../../../utils/colors";
import { Mission } from "../../../types";
import { CustomButton } from "../CustomButton";
import { useState } from "react";
import { toggleCompleted } from "../../storage/missions";
import { LANG } from "../../../device";

export const RenderFooter = ({ mission }: { mission: Mission }) => {
  const [completed, setCompleted] = useState<boolean>(mission.completed);

  const getButtonText = (isCompleted: boolean) => {
    if (LANG === "es") {
      return isCompleted ? "Marcar como no completada" : "Marcar como completada";
    }
    return isCompleted ? "Set as not completed" : "Set as completed";
  };

  const [buttonText, setButtonText] = useState<string>(getButtonText(mission.completed));

  const handlePress = async () => {
    const next = !completed;
    setTimeout(() => {
      setCompleted(next);
      setButtonText(getButtonText(next));
    }, 100);

    try {
      await toggleCompleted(mission.ID, next);
    } catch (e) {
      setTimeout(() => {
        setCompleted(!next);
        setButtonText(getButtonText(!next));
      }, 100);
      console.error("Error toggling mission:", e);
    }
  };

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
