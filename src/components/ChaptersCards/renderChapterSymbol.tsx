import { Fontisto, MaterialCommunityIcons, FontAwesome6 } from "@expo/vector-icons";
import { Colors } from "../../../utils/colors";

export const renderChapterSymbol = (chapter: string | number) => {
  if (chapter === 1) {
    return <Fontisto name="snowflake-8" size={72} color={Colors.dark_brown} />;
  }
  if (chapter === 2) {
    return <MaterialCommunityIcons name="horseshoe" size={72} color={Colors.dark_brown} />;
  }
  if (chapter === 3) {
    return <MaterialCommunityIcons name="greenhouse" size={72} color={Colors.dark_brown} />;
  }
  if (chapter === 4) {
    return <MaterialCommunityIcons name="coach-lamp" size={72} color={Colors.dark_brown} />;
  }
  if (chapter === 5) {
    return <MaterialCommunityIcons name="palm-tree" size={72} color={Colors.dark_brown} />;
  }
  if (chapter === 6) {
    return <MaterialCommunityIcons name="torch" size={72} color={Colors.dark_brown} />;
  }
  if (chapter === "EP1") {
    return <FontAwesome6 name="cow" size={72} color={Colors.dark_brown} />;
  }
    if (chapter === "EP2") {
    return <MaterialCommunityIcons name="hand-saw" size={72} color={Colors.dark_brown} />;
  }

};
