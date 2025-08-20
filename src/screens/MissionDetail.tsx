import { ImageBackground, Text, View, StyleSheet } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../types";
import { DEVICE_LANGUAGE } from "../../device";
import { useFonts, Rye_400Regular } from "@expo-google-fonts/rye";
import { EduNSWACTFoundation_400Regular } from "@expo-google-fonts/edu-nsw-act-foundation";
import { RenderGivenBy } from "../components/MissionDetails/RenderGivenBy";
import { renderMissionDetailSymbol } from "../components/MissionDetails/renderMissionDetailSymbol";
import { RenderLocation } from "../components/MissionDetails/RenderLocation";
import { RenderDeadline } from "../components/MissionDetails/RenderDeadline";
import { RenderNotes } from "../components/MissionDetails/RenderNotes";
import { RenderCompleted } from "../components/MissionDetails/RenderCompleted";
import { RenderChapterNumber } from "../components/MissionDetails/RenderChapterNumber";

type MissionDetailsRoute = RouteProp<RootStackParamList, "MissionDetails">;

export const MissionDetail = () => {
  const [fontsLoaded] = useFonts({
    Rye_400Regular,
    EduNSWACTFoundation_400Regular,
  });
  const { params } = useRoute<MissionDetailsRoute>();
  const { mission } = params;
  const {
    mission_en,
    mission_es,
    starting_at_en,
    starting_at_es,
    ending_at_en,
    ending_at_es,
    chapter,
    given_by,
    deadline,
    notes_en,
    notes_es,
    completed,
    sym,
  } = mission;

  const title = DEVICE_LANGUAGE === "es" ? mission_es : mission_en;
  const symbol = renderMissionDetailSymbol(sym, 48);

  if (!fontsLoaded) return null;
  return (
    <>
      <ImageBackground
        source={require("../../assets/mission_detail_bg.png")}
        style={{ flex: 1, width: "100%", height: "100%" }}
        resizeMode="cover"
      >
        <View>
          <Text style={styles.header}>{title}</Text>
          {symbol && <View>{symbol}</View>}
        </View>
        <View>
          <RenderGivenBy sym={sym} given_by={given_by} />
          <RenderLocation
            sym={sym}
            start_en={starting_at_en}
            start_es={starting_at_es}
            end_en={ending_at_en}
            end_es={ending_at_es}
          />
          <RenderDeadline deadline={deadline} />
          <RenderNotes notes_en={notes_en} notes_es={notes_es} />
        </View>
        <View style={{flexDirection: "row"}}>
          <RenderCompleted completed={completed} />
          <RenderChapterNumber chapter={chapter} />
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    fontFamily: "Rye_400Regular",
    fontSize: 32,
    marginTop: 48,
    textAlign: "center",
    padding: 16,
  },
  content: {
    fontFamily: "EduNSWACTFoundation_400Regular",
    fontSize: 30,
    paddingHorizontal: 16,
  },
});
