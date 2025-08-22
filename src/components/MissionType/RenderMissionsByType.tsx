import { FlatList } from "react-native";
import missionsData from "../../../assets/db.json";
import { Mission } from "../../../types";
import { RenderChapterItem } from "../MissionsList/components/RenderChapterItem";
type Props = {
  chapter: number | string;
};
export const MissionList = ({ chapter }: Props) => {
  const missionsToRender = missionsData.filter(
    (mission) => String(mission.chapter) === String(chapter)
  );
  return (
    <FlatList
      data={missionsToRender as Mission[]}
      keyExtractor={(item) => item.ID.toString()}
      renderItem={({item}) => <RenderChapterItem item={item} />}

    />
  );
};
