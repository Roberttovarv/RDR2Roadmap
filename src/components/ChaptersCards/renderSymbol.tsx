import { Fontisto, MaterialCommunityIcons, FontAwesome6 } from "@expo/vector-icons";

export const renderSymbol = (chapter: string | number) => {
  if (chapter === 1) {
    return <Fontisto name="snowflake-8" size={24} color="black" />;
  }
  if (chapter === 2) {
    return <MaterialCommunityIcons name="horseshoe" size={24} color="black" />;
  }
  if (chapter === 3) {
    return <MaterialCommunityIcons name="greenhouse" size={24} color="black" />;
  }
  if (chapter === 4) {
    return <MaterialCommunityIcons name="coach-lamp" size={24} color="black" />;
  }
  if (chapter === 5) {
    return <MaterialCommunityIcons name="palm-tree" size={24} color="black" />;
  }
  if (chapter === 6) {
    return <MaterialCommunityIcons name="torch" size={24} color="black" />;
  }
  if (chapter === "EP1") {
    return <FontAwesome6 name="cow" size={24} color="black" />;
  }
    if (chapter === "EP2") {
    return <MaterialCommunityIcons name="hand-saw" size={24} color="black" />;
  }

};
