import { Text, StyleSheet } from "react-native";
import { DEVICE_LANGUAGE } from "../../../device";

type Props = {
  notes_es: string | null;
  notes_en: string | null;
};
export const RenderNotes = ({ notes_en, notes_es }: Props) => {
  const notes_to_get = DEVICE_LANGUAGE === "es" ? notes_es : notes_en;
  if (!notes_to_get) return null;

  const notes = notes_to_get.split("|").map((note) => note.trim());

  if (notes.length > 1)
    return (
      <>
        <Text style={styles.text}>Notes:</Text>
        {notes.map((note, index) => (
          <Text style={styles.note} key={index}>
            {note}
          </Text>
        ))}
      </>
    );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "EduNSWACTFoundation_400Regular",
    fontSize: 30,
    paddingHorizontal: 16,
  },
  note: {
    fontFamily: "EduNSWACTFoundation_400Regular",
    fontSize: 30,
    paddingHorizontal: 32,
  },
});
