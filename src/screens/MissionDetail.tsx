import { ImageBackground, Text, View, StyleSheet } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../types";
import { DEVICE_LANGUAGE } from "../../device";
import {
  useFonts,
  EduNSWACTFoundation_400Regular,
} from "@expo-google-fonts/edu-nsw-act-foundation";
import { RenderGivenBy } from "../components/MissionDetails/RenderGivenBy";
import { RenderLocation } from "../components/MissionDetails/RenderLocation";
import { RenderDeadline } from "../components/MissionDetails/RenderDeadline";
import { RenderNotes } from "../components/MissionDetails/RenderNotes";
import { RenderCompleted } from "../components/MissionDetails/RenderCompleted";
import { RenderChapterNumber } from "../components/MissionDetails/RenderChapterNumber";
import { Colors } from "../../utils/colors";
import { RenderHeader } from "../components/MissionDetails/RenderHeader";
import { RenderBody } from "../components/MissionDetails/RenderBody";
import { RenderFooter } from "../components/MissionDetails/RenderFooter";

type MissionDetailsRoute = RouteProp<RootStackParamList, "MissionDetails">;

export const MissionDetail = () => {
  const [fontsLoaded] = useFonts({
    EduNSWACTFoundation_400Regular,
  });
  const { params } = useRoute<MissionDetailsRoute>();
  const { mission } = params;
  const {
    mission_en,
    mission_es,

    chapter,
    given_by,

    completed,
    sym,
  } = mission;

  const title = DEVICE_LANGUAGE === "es" ? mission_es : mission_en;

  if (!fontsLoaded) return null;
  return (
    <>
      <ImageBackground {...imageProps}>
        <View style={styles.screen}>
          <View style={styles.upper_half}>
            <View>
              <RenderHeader sym={sym} title={title} />
            </View>
            <View>
              <RenderBody mission={mission} />
            </View>
          </View>
          <View>
            <RenderFooter mission={mission} />
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 12,
    justifyContent: "space-between",
  },
  upper_half: {
gap: 16  }
});

const imageProps = {
  source: require("../../assets/mission_detail_bg.webp"),
  style: { flex: 1 },
  resizeMode: "cover" as const,
};
