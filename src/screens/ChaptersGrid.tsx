import { Dimensions, Image, SafeAreaView, View, ScrollView} from "react-native";
import { ChapterCard } from "../components/ChapterMissions/ChaptersCards/ChapterCard";
import { MissionTypeCard } from "../components/MissionType/MissionTypeCards";
import { SwitchScreenButton } from "../components/SwitchScreenButton";
import { useState } from "react";


export const ChaptersGrid = () => {
  const { width } = Dimensions.get("window");
  const [defaultScreen, setDefaultScreen] = useState<boolean>(true);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <ScrollView> */}

      <Image
        source={require("../../assets/header2.webp")}
        style={{ width: width, height: 210 }}
        resizeMode="stretch"
      />
      <SwitchScreenButton arg1="By Chapter" arg2="By Type" screen={defaultScreen} onPress={setDefaultScreen}/>
      <View style={{ flex: 1 }}>
        {defaultScreen ? <ChapterCard /> : <MissionTypeCard />}
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};
