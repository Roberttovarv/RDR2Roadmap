import { StyleSheet, View } from "react-native";
import { RenderCompleted } from "./RenderCompleted";
import { RenderChapterNumber } from "./RenderChapterNumber";
import { Colors } from "../../../utils/colors";
import { Mission } from "../../../types";
import { CustomButton } from "../CustomButton";
import { useState } from "react";

export const RenderFooter = ({ mission }: { mission: Mission }) => {
  const [completed, setCompleted] = useState(false);
  
  const [buttonText, setButtonText] = useState("Set as completed")
  const handlePress = () => {
    setCompleted(prev => !prev);

    if (!completed) {
        setTimeout(() => {
                setButtonText("Set as uncompleted");
      }, 100);
    } else {
        setTimeout(() => {
          setButtonText("Set as completed");
      }, 100);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.data}>
        <RenderCompleted completed={mission.completed} />
        <View style={styles.middleLine} />
        <RenderChapterNumber chapter={mission.chapter} />
      </View>
      <View>
        <CustomButton
          onPress={handlePress}
          text={buttonText}
        />
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
