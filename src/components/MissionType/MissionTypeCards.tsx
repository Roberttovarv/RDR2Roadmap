import React, { useState } from "react";
import {
  View,
  FlatList,
  LayoutChangeEvent,
} from "react-native";
import { RenderSingleTypeCard } from "./RenderSingleTypeCard";
const symbols = ["*", "BOUNTY", "DEBT","GANG","?"];

const GAP = 16;   
const HPAD = 16;


export const MissionTypeCard = () => {

  const onLayout = (e: LayoutChangeEvent) => {
    setContainerWidth(e.nativeEvent.layout.width);
  };

  const [containerWidth, setContainerWidth] = useState<number>(0);

  const ITEM_WIDTH =
    containerWidth > 0 ? (containerWidth - HPAD * 2 - GAP) / 2 : 0;

  return (
    <View
      onLayout={onLayout}
      style={{ flex: 1}}
    >
      <FlatList
        data={symbols}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => (<RenderSingleTypeCard sym={item} itemWidth={ITEM_WIDTH}/>)}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginBottom: GAP,
        }}
        contentContainerStyle={{
          paddingHorizontal: HPAD,
          paddingVertical: GAP,
        }}
      />
    </View>
  );
};

