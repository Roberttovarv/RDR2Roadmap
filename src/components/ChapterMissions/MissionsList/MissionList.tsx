import { FlatList, Image } from "react-native";
import { RenderChapterItem } from "./components/RenderChapterItem";
import { Mission } from "../../../../types";
import { useCallback, useEffect, useState } from "react";
import { getMissionsByChapter, toggleCompleted } from "../../../storage/missions";
type Props = {
  chapter: number | string;
};

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

export const MissionList = ({ chapter }: Props) => {
  const [missions, setMissions] = useState<Mission[]>([]);

  useEffect(() => {
    (async () => {
      const data = await getMissionsByChapter(chapter);
      setMissions(data);
    })();
  }, [chapter]);

  const onToggleCompleted = useCallback(async (id: number, value: boolean)=> {
    const nextAll = await toggleCompleted(id, value)
    setMissions(nextAll.filter(mission => String(mission.chapter) === String(chapter)))
  },[chapter])

  const headerSource = chapterImages[String(chapter)];
  return (
    <FlatList
      data={missions as Mission[]}
      keyExtractor={(item) => item.ID.toString()}
      renderItem={({ item }) => <RenderChapterItem item={item} onToggleCompleted={onToggleCompleted} />}
      ListHeaderComponent={
        <Image
          source={headerSource}
          style={{
            width: "100%",
            height: 220,
            backgroundColor: "#00000033",
            marginBottom: -5,
          }}
          resizeMode="cover"
        />
      }
    />
  );
};
