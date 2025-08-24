import { FlatList, Text, Pressable } from "react-native";
import missionsData from "../../../assets/db.json";
import { Mission, RootStackParamList } from "../../../types";
import { RenderTypeMissionItem } from "./MissionTypeList/RenderTypeMissionItem";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
type Props = {
  sym: string;
};
const SYMBOLS = new Set(["*", "BOUNTY", "DEBT", "GANG", "?"]);
type Nav = NativeStackNavigationProp<RootStackParamList, "Type">;

export const TypeMissionList = ({ sym }: Props) => {
  const navigation = useNavigation<Nav>()

  useLayoutEffect(() => {
    navigation.setOptions({headerRight: () => (
        <Pressable onPress={() => console.log("true")} style={{ paddingHorizontal: 12, paddingVertical: 6 }} hitSlop={10}>
          <Text style={{ fontWeight: "700" }}>Filter</Text>
        </Pressable>
      ),})
  }, [navigation])
  
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
