import {
  Fontisto,
  MaterialCommunityIcons,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
import { Colors } from "../../../utils/colors";

export const renderMissionTypeSymbol = (sym: string) => {
  if (sym === "*") {
    return (
      <MaterialCommunityIcons
        name="cards-diamond"
        size={styles.size}
        color={styles.color}
      />
    );
  }
  if (sym === "BOUNTY") {
    return <Ionicons name="skull" size={styles.size} color={styles.color} />;
  }
  if (sym === "DEBT") {
    return (
      <FontAwesome5
        name="dollar-sign"
        size={styles.size}
        color={styles.color}
      />
    );
  }
  if (sym === "GANG") {
    return <Fontisto name="tent" size={styles.size} color={styles.color} />;
  }
  if (sym === "?") {
    return (
      <FontAwesome5 name="question" size={styles.size} color={styles.color} />
    );
  }
  return (
    <FontAwesome5
      name="hat-cowboy-side"
      size={styles.size}
      color={styles.color}
    />
  );
};

const styles = {
  color: Colors.darkest_brown,
  size: 72,
};
