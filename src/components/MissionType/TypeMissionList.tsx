import { FlatList, Text } from "react-native";
import missionsData from "../../../assets/db.json";
import { Mission } from "../../../types";
import { RenderTypeMissionItem } from "./MissionTypeList/RenderTypeMissionItem";
type Props = {
  sym: string;
};
const SYMBOLS = new Set(["*", "BOUNTY", "DEBT", "GANG", "?"]);
export const TypeMissionList = ({ sym }: Props) => {
  const missionsToRender = (missionsData as Mission[]).filter((m) => {
    const hasSymbol = SYMBOLS.has(m.sym);
    if (hasSymbol) return m.sym === sym;
    return !SYMBOLS.has(sym);
  });
  return (
    <FlatList
      data={missionsToRender as Mission[]}
      keyExtractor={(item) => item.ID.toString()}
      renderItem={({ item }) => <RenderTypeMissionItem item={item} />}
    />
  );
};
