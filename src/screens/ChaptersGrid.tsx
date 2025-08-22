import { Dimensions, Image, SafeAreaView, View, ScrollView } from "react-native";
import { ChapterCard } from "../components/ChaptersCards/ChapterCard";

export const ChaptersGrid = () => {
  const { width } = Dimensions.get("window");

  return (
    <SafeAreaView style={{flex: 1}}>
        {/* <ScrollView> */}

        <Image
          source={require("../../assets/header2.webp")}
          style={{ width: width, height: 210 }}
          resizeMode="stretch"
          />
      <View style={{ flex: 1 }}>
        <ChapterCard />
      </View>
          {/* </ScrollView> */}
    </SafeAreaView>
  );
};


