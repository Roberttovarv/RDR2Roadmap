import { useState, useCallback, useEffect } from "react";
import { FlatList, Text, Pressable } from "react-native";
import { Mission, RootStackParamList } from "../../../types";
import { RenderTypeMissionItem } from "./MissionTypeList/RenderTypeMissionItem";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { HeaderImage } from "./MissionTypeList/HeaderImage";
import { getMissionsByType, toggleCompleted } from "../../storage/missions";

type Props = {
  sym: string;
};
const SYMBOLS = new Set(["*", "BOUNTY", "DEBT", "GANG", "?"]);
type Nav = NativeStackNavigationProp<RootStackParamList, "Type">;

export const TypeMissionList = ({ sym }: Props) => {
  const navigation = useNavigation<Nav>();
  const [missions, setMissions] = useState<Mission[]>([])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable
          onPress={() => console.log("true")}
          style={{ paddingHorizontal: 12, paddingVertical: 6 }}
          hitSlop={10}
        >
          <Text style={{ fontWeight: "700" }}>Filter</Text>
        </Pressable>
      ),
    });
  }, [navigation]);

  useEffect(()=>{
    (async ()=> {
      const data = await getMissionsByType(sym)
      setMissions(data)
    })()

  }, [sym])

  const onToggleCompleted = useCallback(async (id: number, value: boolean) => {
    const nextAll = await toggleCompleted(id, value)
    if (SYMBOLS.has(sym)) {
      setMissions(nextAll.filter(mission => SYMBOLS.has(mission.sym)))
    } else {
      setMissions(nextAll.filter(mission => !SYMBOLS.has(mission.sym)))
    }
  },[sym])

  return (
    <FlatList
      data={missions}
      keyExtractor={(item) => item.ID.toString()}
      renderItem={({ item }) => <RenderTypeMissionItem item={item} onToggleCompleted={onToggleCompleted}/>}
      ListHeaderComponent={<HeaderImage sym={sym} />}
    />
  );
};
