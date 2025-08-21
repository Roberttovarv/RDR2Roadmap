import { Text, StyleSheet } from "react-native";

type Props = {
  notes_raw: string | null;
};
export const RenderNotes = ({notes_raw}: Props) => {
  if (!notes_raw) return null;

  const notes = notes_raw.split("|").map((note) => note.trim());

  if (notes.length > 1)
    return (
      <>
        <Text style={styles.text}>Notes:</Text>
        {notes.map((note, index) => (
          <Text style={styles.note} key={index}>
            - {note}
          </Text>
        ))}
      </>
    );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "EduNSWACTFoundation_400Regular",
    fontSize: 24,
    paddingHorizontal: 16,
  },
  note: {
    fontFamily: "EduNSWACTFoundation_400Regular",
    fontSize: 22,
    paddingHorizontal: 32,
  },
});
