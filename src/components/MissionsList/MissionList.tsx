import { FlatList } from "react-native";
import missionsData from "../../../assets/db.json";
import { RenderChapterItem } from "./components/RenderChapterItem";
import { Mission } from "../../../types";
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
