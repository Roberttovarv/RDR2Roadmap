// src/screens/SymbolsGuide.tsx
import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { Colors } from "../../utils/colors";
import {
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome5,
  Fontisto,
} from "@expo/vector-icons";
import { DEVICE_LANGUAGE } from "../../device";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

type Lang = "es" | "en";
const LANG = (DEVICE_LANGUAGE as Lang) ?? "en";

const SectionTitle = ({ en, es }: { en: string; es: string }) => (
  <Text style={styles.sectionTitle}>{LANG === "es" ? es : en}</Text>
);

const Row = ({
  icon,
  en,
  es,
}: {
  icon: React.ReactNode;
  en: string;
  es: string;
}) => (
  <View style={styles.row}>
    <View style={styles.iconWrap}>{icon}</View>
    <View style={styles.textWrap}>
      <Text style={styles.line}>{LANG === "es" ? es : en}</Text>
    </View>
  </View>
);

export const SymbolsGuide = () => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.safe} edges={["top", "left", "right"]}>
      <ScrollView
        contentContainerStyle={[
          styles.container,
          { paddingBottom: insets.bottom + 16 },
        ]}
        contentInsetAdjustmentBehavior="automatic"
      >
        <SectionTitle en="Mission Types" es="Tipos de misiones" />

        <Row
          icon={
            <MaterialCommunityIcons
              name="cards-diamond"
              size={28}
              color={Colors.darkest_brown}
            />
          }
          en="Story missions. Advance the main storyline."
          es="Misiones de historia. Avanzan la trama principal."
        />

        <Row
          icon={
            <Ionicons name="skull" size={28} color={Colors.darkest_brown} />
          }
          en="Bounty Hunter missions. Hunt down wanted targets."
          es="Misiones de Cazarrecompensas. Captura objetivos buscados."
        />

        <Row
          icon={
            <FontAwesome5
              name="dollar-sign"
              size={26}
              color={Colors.darkest_brown}
            />
          }
          en="Debt Collection missions (Strauss). Collect debts."
          es="Misiones de Cobranzas (Strauss). Recauda deudas."
        />

        <Row
          icon={<Fontisto name="tent" size={26} color={Colors.darkest_brown} />}
          en="Gang Activities. Tasks tied to the Van der Linde gang."
          es="Actividades de la banda. Encargos de la Van der Linde."
        />

        <Row
          icon={
            <FontAwesome5
              name="question"
              size={24}
              color={Colors.darkest_brown}
            />
          }
          en="Strangers missions. Optional side quests."
          es="Misiones de Extraños. Secundarias opcionales."
        />

        <Row
          icon={
            <FontAwesome5
              name="hat-cowboy-side"
              size={24}
              color={Colors.darkest_brown}
            />
          }
          en="Friends missions. Requests from companions (initials)."
          es="Misiones de Amigos. Peticiones de compañeros (iniciales)."
        />

        <SectionTitle en="UI Cues" es="Indicadores de la interfaz" />

        <Row
          icon={
            <Text style={[styles.sampleText, { color: Colors.burdeos }]}>
              Aa
            </Text>
          }
          en="Missions in red do not affect story progress."
          es="Misiones en rojo no afectan el progreso de la historia."
        />

        <Row
          icon={
            <FontAwesome5
              name="check-square"
              size={24}
              color={Colors.darkest_brown}
            />
          }
          en="Checkbox to mark a mission as completed."
          es="Casilla para marcar la misión como completada."
        />

        <Row
          icon={
            <FontAwesome5
              name="hourglass-half"
              size={22}
              color={Colors.darkest_brown}
            />
          }
          en="Deadline: must be done before a chapter/epilogue."
          es="Límite: debe completarse antes de un capítulo/epílogo."
        />

        <SectionTitle en="Filter" es="Filtro" />

        <Row
          icon={
            <FontAwesome5
              name="filter"
              size={22}
              color={Colors.darkest_brown}
            />
          }
          en="All: shows every mission."
          es="Todas: muestra todas las misiones."
        />
        <Row
          icon={
            <FontAwesome5 name="check" size={22} color={Colors.darkest_brown} />
          }
          en="Completed: only missions you have finished."
          es="Completadas: solo las misiones terminadas."
        />
        <Row
          icon={
            <FontAwesome5
              name="square"
              size={20}
              color={Colors.darkest_brown}
            />
          }
          en="Not completed: only pending missions."
          es="No completadas: solo las misiones pendientes."
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  container: {
    padding: 16,
    gap: 14,
  },
  sectionTitle: {
    fontFamily: "Rye_400Regular",
    fontSize: 22,
    color: Colors.map,
    backgroundColor: Colors.darkest_brown,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
    marginTop: 12,
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
    backgroundColor: Colors.darkest_brown + "1A",
    borderColor: Colors.darkest_brown,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
  },
  iconWrap: {
    width: 34,
    alignItems: "center",
    paddingTop: 2,
  },
  textWrap: { flex: 1 },
  line: {
    fontFamily: "EduNSWACTFoundation_400Regular",
    fontSize: 18,
    color: Colors.darkest_brown,
  },
  sampleText: {
    fontFamily: "EduNSWACTFoundation_600SemiBold",
    fontSize: 22,
  },
  notesBox: {
    backgroundColor: Colors.darkest_brown + "1A",
    borderColor: Colors.darkest_brown,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
  },
  noteLine: {
    fontFamily: "EduNSWACTFoundation_400Regular",
    fontSize: 18,
    color: Colors.darkest_brown,
  },
});
