import { ImageBackground, View, StyleSheet } from "react-native";
import { useRoute, RouteProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../types";
import { DEVICE_LANGUAGE, LANG } from "../../device";
import { RenderHeader } from "../components/MissionDetails/RenderHeader";
import { RenderBody } from "../components/MissionDetails/RenderBody";
import { RenderFooter } from "../components/MissionDetails/RenderFooter";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useLayoutEffect } from "react";

type MissionDetailsRoute = RouteProp<RootStackParamList, "MissionDetails">;
type Nav = NativeStackNavigationProp<RootStackParamList, "MissionDetails">;

export const MissionDetail = () => {
  const navigation = useNavigation<Nav>()

  useLayoutEffect(()=> {
    navigation.setOptions({title: LANG ==="es" ? "Detalles" : "Details"})
  })
  const { params } = useRoute<MissionDetailsRoute>();
  const { mission } = params;
  const {
    mission_en,
    mission_es,
    sym,
  } = mission;

  const title = DEVICE_LANGUAGE === "es" ? mission_es : mission_en;

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
