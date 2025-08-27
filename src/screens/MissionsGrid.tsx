import {
  Dimensions,
  Image,
  SafeAreaView,
  View,
} from "react-native";
import { ChapterCard } from "../components/ChapterMissions/ChaptersCards/ChapterCard";
import { MissionTypeCard } from "../components/MissionType/MissionTypeCards";
import { SwitchScreenButton } from "../components/SwitchScreenButton";
import { GridSwitchAnimation } from "../components/GridSwitchAnimation";
import { useState } from "react";
import { LANG } from "../../device";


export const ChaptersGrid = () => {
  const { width } = Dimensions.get("window");
  const [defaultScreen, setDefaultScreen] = useState<boolean>(true);


const Header = (
  <>
          <Image
          source={require("../../assets/header2.webp")}
          style={{ width, height: 210 }}
          resizeMode="stretch"
        />

        <SwitchScreenButton
          arg1= {LANG === "es" ? "Por capítulo" : "By Chapter"}
          arg2={LANG === "es" ? "Por tipo" : "By Type"}
          screen={defaultScreen}
          onPress={setDefaultScreen}
        />

  </>
)
  return (
    <SafeAreaView style={{ flex: 1 }}>

      <View style={{ flex: 1 }}>
        <GridSwitchAnimation
          shown={defaultScreen}
          first={<ChapterCard ListHeaderComponent={Header}/>}
          second={<MissionTypeCard ListHeaderComponent={Header}/>}
          duration={260}
          translateY={10}
        />
      </View>
    </SafeAreaView>
  );
};
