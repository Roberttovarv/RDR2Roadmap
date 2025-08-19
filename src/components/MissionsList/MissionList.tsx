import { FlatList } from "react-native";
import missionsData from "../../../assets/db.json";
import { renderItem } from "./components/renderItem";
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
      renderItem={renderItem}

    />
  );
};
