import React, { useState } from "react";
import { View, FlatList, LayoutChangeEvent } from "react-native";
import { RenderSingleCard } from "./RenderSingleCard";

const chapters = [1, 2, 3, 4, 5, 6, "EP1", "EP2"];

const GAP = 16;
const HPAD = 16;
export const ChapterCard = ({
  ListHeaderComponent,
}: {
  ListHeaderComponent: React.ReactElement;
}) => {
  const onLayout = (e: LayoutChangeEvent) => {
    setContainerWidth(e.nativeEvent.layout.width);
  };

  const [containerWidth, setContainerWidth] = useState<number>(0);

  const ITEM_WIDTH =
    containerWidth > 0 ? (containerWidth - HPAD * 2 - GAP) / 2 : 0;

  return (
    <View onLayout={onLayout} style={{ flex: 1 }}>
      <FlatList
        data={chapters}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => (
          <RenderSingleCard chapter={item} itemWidth={ITEM_WIDTH} />
        )}
        numColumns={2}
        ListHeaderComponent={ListHeaderComponent}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginBottom: GAP,
        }}
        contentContainerStyle={{
          paddingHorizontal: HPAD,
          paddingVertical: GAP,
        }}
        ListHeaderComponentStyle={{
          marginHorizontal: -HPAD,
          marginTop: -GAP,
          marginBottom: GAP,
        }}
        removeClippedSubviews={true}
        windowSize={7}
        maxToRenderPerBatch={10}
        updateCellsBatchingPeriod={50}
        initialNumToRender={10}
      />
    </View>
  );
};
