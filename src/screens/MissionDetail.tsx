import { ImageBackground, Text, View } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../types";
import { DEVICE_LANGUAGE } from "../../device";
import { useFonts, Rye_400Regular } from "@expo-google-fonts/rye";
import { EduNSWACTFoundation_400Regular } from "@expo-google-fonts/edu-nsw-act-foundation";
import { RenderMissionSymbol } from "../components/MissionsList/components/RenderMissionSymbol";
import { RenderGivenBy } from "../components/MissionDetails/RenderGivenBy";

type MissionDetailsRoute = RouteProp<RootStackParamList, "MissionDetails">;

export const MissionDetail = () => {
  const [fontsLoaded] = useFonts({ Rye_400Regular, EduNSWACTFoundation_400Regular });
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
    notes,
    completed, sym
  } = mission;

  const title = DEVICE_LANGUAGE === "es" ? mission_es : mission_en;
  const starting_at =
    DEVICE_LANGUAGE === "es" ? starting_at_es : starting_at_en;
  const ending_at = DEVICE_LANGUAGE === "es" ? ending_at_es : ending_at_en;

  if (!fontsLoaded) return null
  return (
    <>
      <ImageBackground
        source={require("../../assets/mission_detail_bg.png")}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        <View>
          <Text style={{fontFamily: "Rye_400Regular", fontSize: 32, marginTop: 36, textAlign: "center"}}>{title}</Text>
          <View><RenderMissionSymbol sym={sym}/></View>
        </View>
        <View>
            <Text style={{fontFamily: "EduNSWACTFoundation_400Regular", fontSize: 30}}><RenderGivenBy sym={sym} given_by={given_by} /> </Text>
        </View>
      </ImageBackground>
    </>
  );
};
