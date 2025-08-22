import { FlatList, Text } from "react-native";
import missionsData from "../../../assets/db.json";
import { Mission } from "../../../types";
import { RenderTypeMissionItem } from "./MissionTypeList/RenderTypeMissionItem";
type Props = {
  sym: string;
};
export const TypeMissionList = ({ sym }: Props) => {
  const missionsToRender = missionsData.filter(
    (m) => m.sym === sym)
  return (
    <FlatList
      data={missionsToRender as Mission[]}
      keyExtractor={(item) => item.ID.toString()}
      renderItem={({item}) => <RenderTypeMissionItem item={item} />}
    />
  );
};
