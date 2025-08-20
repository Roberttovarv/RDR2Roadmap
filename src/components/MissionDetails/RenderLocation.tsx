import { StyleSheet, Text } from "react-native";
import { DEVICE_LANGUAGE } from "../../../device";

type Props = {
  start_en: string;
  start_es: string;
  end_en: string;
  end_es: string;
  sym: string;
};
export const RenderLocation = ({
  start_en,
  start_es,
  end_en,
  end_es,
  sym,
}: Props) => {
  const symbols = ["DEBT", "BOUNTY", "GANG", "?", "*"];

  const starting_at = DEVICE_LANGUAGE === "es" ? start_es : start_en;
  const ending_at = DEVICE_LANGUAGE === "es" ? end_es : end_en;

  const symbol_argument = DEVICE_LANGUAGE === "es" ? "Ocurre en:" : "Takes place in:"
  const mission_start_argument = DEVICE_LANGUAGE === "es" ? "Comienza en:" : "Starts at:"
  const mission_end_argument = DEVICE_LANGUAGE === "es" ? "Termina en:" : "Ends at:"

  if (!starting_at && !ending_at) return null;
  if (symbols.includes(sym) && starting_at === ending_at) {
    return (
      <>
        <Text style={styles.content}>{`${symbol_argument} ${starting_at}`}</Text>
      </>
    );
  }

  return (
    <>
      <Text style={styles.content}>{`${mission_start_argument} ${starting_at}`}</Text>
      <Text style={styles.content}>{`${mission_end_argument} ${ending_at}`}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    fontFamily: "EduNSWACTFoundation_400Regular",
    fontSize: 30,
    paddingHorizontal: 16,
  },
});
