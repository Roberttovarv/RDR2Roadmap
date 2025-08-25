import { FlatList, Image } from "react-native";
import missionsData from "../../../../assets/db.json";
import { RenderChapterItem } from "./components/RenderChapterItem";
import { Mission } from "../../../../types";
type Props = {
  chapter: number | string;
};

const chapterImages: Record<string, any> = {
  "1": require("../../../../assets/grids/chapter/1.webp"),
  "2": require("../../../../assets/grids/chapter/2.webp"),
  "3": require("../../../../assets/grids/chapter/3.webp"),
  "4": require("../../../../assets/grids/chapter/4.webp"),
  "5": require("../../../../assets/grids/chapter/5.webp"),
  "6": require("../../../../assets/grids/chapter/6.webp"),
  "EP1": require("../../../../assets/grids/chapter/7.webp"),
  "EP2": require("../../../../assets/grids/chapter/8.webp"),
};

export const MissionList = ({ chapter }: Props) => {
  const missionsToRender = missionsData.filter(
    (mission) => String(mission.chapter) === String(chapter)
  );

  const headerSource = chapterImages[chapter]
  return (
    <FlatList
      data={missionsToRender as Mission[]}
      keyExtractor={(item) => item.ID.toString()}
      renderItem={({item}) => <RenderChapterItem item={item} />}
      ListHeaderComponent={
        <Image
          source={headerSource}
          style={{ width: "100%", height: 200, justifyContent: "flex-end" }}
          resizeMode="cover"
        />}
    />
  );
};
