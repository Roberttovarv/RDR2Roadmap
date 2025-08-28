import React, { useCallback, useEffect, useMemo, useState } from "react";
import { FlatList, Pressable, Text, View, StyleSheet } from "react-native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { Colors, Opacity } from "../../utils/colors";
import { getAllMissions } from "../storage/missions";
import { LANG } from "../../device";
import { Mission, DrawerParamList } from "../../types";
import { RenderMissionSymbol } from "../components/ChapterMissions/MissionsList/components/RenderMissionSymbol";

type Nav = DrawerNavigationProp<DrawerParamList, "YourProgress">;

const CARD_HEIGHT = 76; 
const PendingMissionCard = React.memo(function PendingMissionCard({
  mission,
  title,
  chapterTitle,
  onPress,
}: {
  mission: Mission;
  title: string;
  chapterTitle: (c: number | string) => string;
  onPress: (m: Mission) => void;
}) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        pressed && { opacity: 0.6, transform: [{ scale: 0.98 }] },
      ]}
      onPress={() => onPress(mission)}
    >
      <RenderMissionSymbol
        sym={mission.sym}
        size={22}
        color={Colors.darkest_brown}
      />
      <View style={{ flex: 1, marginLeft: 10 }}>
        <Text style={styles.cardChapter}>{chapterTitle(mission.chapter)}</Text>
        <Text style={styles.cardTitle} numberOfLines={2} ellipsizeMode="tail">
          {title}
        </Text>
      </View>
    </Pressable>
  );
});

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

  const chapterTitle = useCallback((chapter: number | string) => {
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
  }, []);

  const goToDetails = useCallback((mission: Mission) => {
    navigation.navigate("Main", {
      screen: "MissionDetails",
      params: { mission },
    });
  }, [navigation]);

  const ListHeader = useMemo(
    () => (
      <View style={{ alignItems: "center", paddingHorizontal: 20 }}>
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
      </View>
    ),
    [completed, percent]
  );

  const renderItem = useCallback(
    ({ item }: { item: Mission }) => {
      const title = LANG === "es" ? item.mission_es : item.mission_en;
      return (
        <PendingMissionCard
          mission={item}
          title={title}
          chapterTitle={chapterTitle}
          onPress={goToDetails}
        />
      );
    },
    [chapterTitle, goToDetails]
  );

  const keyExtractor = useCallback((m: Mission) => String(m.ID), []);
  const getItemLayout = useCallback(
    (_: ArrayLike<Mission> | null | undefined, index: number) => ({
      length: CARD_HEIGHT,
      offset: CARD_HEIGHT * index,
      index,
    }),
    []
  );

  return (
    <FlatList
      data={pendingMissions}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      ListHeaderComponent={ListHeader}
      ListEmptyComponent={
        <Text style={[styles.emptyText, { marginTop: 12 }]}>
          {LANG === "es"
            ? "¡Has completado todas las misiones!"
            : "You have completed all missions!"}
        </Text>
      }
      contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 20 }}
      removeClippedSubviews
      windowSize={7}
      maxToRenderPerBatch={10}
      updateCellsBatchingPeriod={50}
      initialNumToRender={12}
      getItemLayout={getItemLayout}
    />
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "Rye_400Regular",
    fontSize: 26,
    color: Colors.darkest_brown,
    marginVertical: 16,
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
  emptyText: {
    textAlign: "center",
    fontFamily: "EduNSWACTFoundation_400Regular",
    fontSize: 16,
    color: Colors.darkest_brown,
    opacity: 0.8,
    marginTop: 6,
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
    margin: 4
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
});
