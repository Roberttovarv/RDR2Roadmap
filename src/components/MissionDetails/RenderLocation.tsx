import { StyleSheet, Text } from "react-native";
import { LANG } from "../../../device";
import { Colors } from "../../../utils/colors";

type Props = {
  start: string;
  end: string;
  sym: string;
};
export const RenderLocation = ({
start, end,
  sym,
}: Props) => {
  const symbols = ["DEBT", "BOUNTY", "GANG", "?", "*"];



  const symbol_argument = LANG === "es" ? "Ocurre en:" : "Takes place in:"
  const mission_start_argument = LANG === "es" ? "Comienza en:" : "Starts at:"
  const mission_end_argument = LANG === "es" ? "Termina en:" : "Ends at:"

  if (!start && !end) return null;
  if (symbols.includes(sym) && start === end) {
    return (
      <>
        <Text style={styles.content}>{`${symbol_argument} ${start}`}</Text>
      </>
    );
  }

  return (
    <>
      <Text style={styles.content}>{`${mission_start_argument} ${start}`}</Text>
      <Text style={styles.content}>{`${mission_end_argument} ${end}`}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    fontFamily: "EduNSWACTFoundation_400Regular",
    fontSize: 30,
    paddingHorizontal: 16,
    color: Colors.darkest_brown
  },
});
