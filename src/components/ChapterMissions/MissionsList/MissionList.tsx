import { FlatList, Image, ImageSourcePropType } from "react-native";
import { RenderChapterItem } from "./components/RenderChapterItem";
import { Mission } from "../../../../types";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../types";
import {
  getMissionsByChapter,
  toggleCompleted,
} from "../../../storage/missions";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { FilterButton, type FilterKey } from "../../FilterButton";
import { LANG } from "../../../../device";
import { GuideModal } from "../../GuideModal";

type Props = {
  chapter: number | string;
};

type Nav = NativeStackNavigationProp<RootStackParamList, "Chapter">;

const chapterImages: Record<string, any> = {
  "1": require("../../../../assets/grids-template/chapter/1.webp"),
  "2": require("../../../../assets/grids-template/chapter/2.webp"),
  "3": require("../../../../assets/grids-template/chapter/3.webp"),
  "4": require("../../../../assets/grids-template/chapter/4.webp"),
  "5": require("../../../../assets/grids-template/chapter/5.webp"),
  "6": require("../../../../assets/grids-template/chapter/6.webp"),
  EP1: require("../../../../assets/grids-template/chapter/7.webp"),
  EP2: require("../../../../assets/grids-template/chapter/8.webp"),
};

const Header = ({ source }: { source: ImageSourcePropType }) => {
  return (
    <>
      <Image
        source={source}
        style={{
          width: "100%",
          height: 220,
          backgroundColor: "#00000033",
          marginBottom: -5,
        }}
        resizeMode="cover"
        fadeDuration={0}
      />
      <GuideModal />
    </>
  );
};

export const MissionList = ({ chapter }: Props) => {
  const [missions, setMissions] = useState<Mission[]>([]);
  const [filter, setFilter] = useState<FilterKey>("all");
  const navigation = useNavigation<Nav>();

  const headerSource = chapterImages[String(chapter)];

  const ROMAN: Record<number, string> = {
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
  };

  const load = async () => {
    const data = await getMissionsByChapter(chapter);
    setMissions(data);
  };
  useEffect(() => {
    load();
  }, [chapter]);
  useFocusEffect(
    useCallback(() => {
      load();
    }, [chapter])
  );
  useLayoutEffect(() => {
    const title =
      typeof chapter === "string" && chapter.startsWith("EP")
        ? LANG === "es"
          ? `Epílogo ${ROMAN[Number(String(chapter.slice(2)))]}`
          : `Epilogue ${ROMAN[Number(String(chapter.slice(2)))]}`
        : LANG === "es"
        ? `Capítulo ${ROMAN[Number(String(chapter))]}`
        : `Chapter ${ROMAN[Number(String(chapter))]}`;
    navigation.setOptions({
      title,
      headerRight: () => <FilterButton value={filter} onChange={setFilter} />,
    });
  }, [navigation, chapter, filter]);

  const filtered = useMemo(() => {
    if (filter === "all") return missions;
    if (filter === "completed") return missions.filter((m) => m.completed);
    if (filter === "not_completed") return missions.filter((m) => !m.completed);
  }, [missions, filter]);

  const onToggleCompleted = useCallback(
    async (id: number, value: boolean) => {
      const nextAll = await toggleCompleted(id, value);
      setMissions(
        nextAll.filter((mission) => String(mission.chapter) === String(chapter))
      );
    },
    [chapter]
  );

  return (
    <FlatList
      data={filtered as Mission[]}
      keyExtractor={(item) => item.ID.toString()}
      renderItem={({ item }) => (
        <RenderChapterItem item={item} onToggleCompleted={onToggleCompleted} />
      )}
      ListHeaderComponent={<Header source={headerSource} />}
      removeClippedSubviews={true}
      windowSize={7}
      maxToRenderPerBatch={10}
      updateCellsBatchingPeriod={50}
      initialNumToRender={10}
    />
  );
};
