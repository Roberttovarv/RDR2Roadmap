import React, { useEffect, useState } from "react";
import { ScrollView, Text, View, StyleSheet, Pressable } from "react-native";
import { Colors, Opacity } from "../../utils/colors";
import { getAllMissions } from "../storage/missions";
import { LANG } from "../../device";
import { Mission, DrawerParamList } from "../../types";
import { RenderMissionSymbol } from "../components/ChapterMissions/MissionsList/components/RenderMissionSymbol";
import { useNavigation } from "@react-navigation/native";

type Nav = DrawerNavigationProp<DrawerParamList, "YourProgress">;
import { DrawerNavigationProp } from "@react-navigation/drawer";

export const YourProgress = () => {
  const [completed, setCompleted] = useState(0);
  const [pendingMissions, setPendingMissions] = useState<Mission[]>([]);
  const navigation = useNavigation<Nav>();

  useEffect(() => {
    const load = async () => {
      const all = await getAllMissions();
      const done = all.filter((m) => m.completed).length;
      const pending = all.filter((m) => !m.completed);
      setCompleted(done);
      setPendingMissions(pending);
    };
    load();
  }, []);

  const total = 177;
  const percent = Math.round((completed / total) * 100);

  const chapterTitle = (chapter: number | string) => {
    const ROMAN: Record<number, string> = {
      1: "I",
      2: "II",
      3: "III",
      4: "IV",
      5: "V",
      6: "VI",
    };
    if (typeof chapter === "string" && chapter.startsWith("EP")) {
      const n = Number(String(chapter.slice(2)));
      return LANG === "es" ? `Epílogo ${ROMAN[n]}` : `Epilogue ${ROMAN[n]}`;
    }
    const n = Number(String(chapter));
    return LANG === "es" ? `Capítulo ${ROMAN[n]}` : `Chapter ${ROMAN[n]}`;
  };
const goToDetails = (mission: Mission) => {
  navigation.navigate("Main", {
    screen: "MissionDetails",
    params: { mission },
  });
};;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>
        {LANG === "es" ? "Tu Progreso" : "Your Progress"}
      </Text>

      <Text style={styles.paragraph}>
        {LANG === "es"
          ? `Has completado ${completed} de ${total} misiones.`
          : `You have completed ${completed} out of ${total} missions.`}
      </Text>

      <View style={styles.progressBar}>
        <View style={[styles.progressFill, { width: `${percent}%` }]} />
      </View>
      <Text style={styles.progressText}>{percent}%</Text>

      <Text style={styles.note}>
        {LANG === "es"
          ? "Este progreso se guarda solo en la app y no está sincronizado con RDR2 ni con Rockstar Games."
          : "This progress is saved only in the app and is not synced with RDR2 or Rockstar Games."}
      </Text>

      <Text style={[styles.title, { marginTop: 24 }]}>
        {LANG === "es" ? "Misiones pendientes" : "Pending Missions"}
      </Text>

      <View style={styles.cardsWrap}>
        {pendingMissions.map((m) => {
          const title = LANG === "es" ? m.mission_es : m.mission_en;
          return (
            <Pressable
              key={m.ID}
              style={({ pressed }) => [
                styles.card,
                pressed && { opacity: 0.6, transform: [{ scale: 0.98 }] },
              ]}
              onPress={() => goToDetails(m)} // 👈 usar helper
            >
              <RenderMissionSymbol
                sym={m.sym}
                size={22}
                color={Colors.darkest_brown}
              />
              <View style={{ flex: 1, marginLeft: 10 }}>
                <Text style={styles.cardChapter}>
                  {chapterTitle(m.chapter)}
                </Text>
                <Text
                  style={styles.cardTitle}
                  numberOfLines={2}
                  ellipsizeMode="tail"
                >
                  {title}
                </Text>
              </View>
            </Pressable>
          );
        })}
        {pendingMissions.length === 0 && (
          <Text style={styles.emptyText}>
            {LANG === "es"
              ? "¡Has completado todas las misiones!"
              : "You have completed all missions!"}
          </Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontFamily: "Rye_400Regular",
    fontSize: 26,
    color: Colors.darkest_brown,
    marginBottom: 16,
    textAlign: "center",
  },
  paragraph: {
    fontFamily: "EduNSWACTFoundation_400Regular",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 14,
    color: Colors.darkest_brown,
  },
  progressBar: {
    width: "90%",
    height: 24,
    backgroundColor: Colors.dark_brown + "66",
    borderRadius: 12,
    overflow: "hidden",
    marginVertical: 12,
  },
  progressFill: {
    height: "100%",
    backgroundColor: Colors.burdeos,
  },
  progressText: {
    fontFamily: "EduNSWACTFoundation_600SemiBold",
    fontSize: 18,
    color: Colors.darkest_brown,
  },
  note: {
    fontFamily: "EduNSWACTFoundation_400Regular",
    fontSize: 16,
    color: Colors.burdeos,
    marginTop: 8,
    textAlign: "center",
  },

  cardsWrap: {
    width: "100%",
    marginTop: 8,
    gap: 12,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: Colors.darkest_brown,
    backgroundColor: Colors.darkest_brown + Opacity[1],
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 14,
    shadowColor: Colors.dark_brown,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: { width: -2, height: 2 },
    elevation: 3,
  },
  cardChapter: {
    fontFamily: "EduNSWACTFoundation_600SemiBold",
    fontSize: 16,
    color: Colors.dark_brown,
    marginBottom: 4,
  },
  cardTitle: {
    fontFamily: "EduNSWACTFoundation_400Regular",
    fontSize: 20, 
    color: Colors.darkest_brown,
  },
  emptyText: {
    textAlign: "center",
    fontFamily: "EduNSWACTFoundation_400Regular",
    fontSize: 16,
    color: Colors.darkest_brown,
    opacity: 0.8,
    marginTop: 6,
  },
});
