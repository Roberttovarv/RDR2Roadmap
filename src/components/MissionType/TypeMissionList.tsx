import { useState, useCallback, useEffect } from "react";
import { FlatList, Text, Pressable } from "react-native";
import { Mission, RootStackParamList } from "../../../types";
import { RenderTypeMissionItem } from "./MissionTypeList/RenderTypeMissionItem";
import { useLayoutEffect } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { HeaderImage } from "./MissionTypeList/HeaderImage";
import { getMissionsByType, toggleCompleted } from "../../storage/missions";
import { DEVICE_LANGUAGE } from "../../../device";


type Nav = NativeStackNavigationProp<RootStackParamList, "Type">;
type Props = {
  sym: string;
};
const SYMBOLS = new Set(["*", "BOUNTY", "DEBT", "GANG", "?"]);
const getTypeTitle = (sym: string) => {
  const es = DEVICE_LANGUAGE === "es";
  if (sym === "*")      return es ? "Historia" : "Story";
  if (sym === "BOUNTY") return es ? "Cazarrecompensas" : "Bounty";
  if (sym === "DEBT")   return es ? "Deudas" : "Debt Collection";
  if (sym === "GANG")   return es ? "Actividades de la banda" : "Gang Activities";
  if (sym === "?")      return es ? "Extraños" : "Strangers";
  return es ? "Amigos" : "Friends";
};

export const TypeMissionList = ({ sym }: Props) => {
  const navigation = useNavigation<Nav>();
  const [missions, setMissions] = useState<Mission[]>([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: getTypeTitle(sym),
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
  const load = async () => {
    const data = await getMissionsByType(sym);
    setMissions(data);
  };
  useEffect(() => {
    load();
  }, [sym]);
  useFocusEffect(
    useCallback(() => {
      load();
    }, [sym])
  );

  const onToggleCompleted = useCallback(
    async (id: number, value: boolean) => {
      const nextAll = await toggleCompleted(id, value);
      if (SYMBOLS.has(sym)) {
        setMissions(nextAll.filter((mission) => mission.sym === sym));
      } else {
        setMissions(nextAll.filter((mission) => !SYMBOLS.has(mission.sym)));
      }
    },
    [sym]
  );

  return (
    <FlatList
      data={missions}
      keyExtractor={(item) => item.ID.toString()}
      renderItem={({ item }) => (
        <RenderTypeMissionItem
          item={item}
          onToggleCompleted={onToggleCompleted}
        />
      )}
      ListHeaderComponent={<HeaderImage sym={sym} />}
    />
  );
};
