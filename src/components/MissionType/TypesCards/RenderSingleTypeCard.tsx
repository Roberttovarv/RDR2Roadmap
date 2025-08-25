import {
  View,
  ImageBackground,
  StyleSheet,
  Pressable,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../../../../utils/colors";
import { useLayoutEffect } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../types";
import { renderMissionTypeSymbol } from "./renderMissionTypeSymbol";
import { renderMissionTypeTitle } from "./renderMissionTypeTitle";

type TypeCardNavigation = NativeStackNavigationProp<RootStackParamList, "Type">;

type Props = {
  sym: string;
  itemWidth: number;
};

export const RenderSingleTypeCard = ({ sym, itemWidth }: Props) => {
  const navigation = useNavigation<TypeCardNavigation>();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <Pressable
      onPress={() => navigation.navigate("Type", { sym })}
      style={({pressed}) => [{ width: itemWidth }, pressed && styles.pressedStyle]}
    >
      <View style={[styles.grid, { width: itemWidth }]}>
        <ImageBackground
          source={require("../../../../assets/chapter_grid_background2.webp")}
          resizeMode="cover"
          style={styles.bg}
        >
          <View style={styles.containerWrapper}>
            {renderMissionTypeTitle(sym)}
          </View>
          <View style={styles.symbol}>{renderMissionTypeSymbol(sym)}</View>
        </ImageBackground>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  grid: {
    height: 200,
    elevation: 4,
    shadowColor: Colors.brown,
    shadowOpacity: 0.35,
    shadowOffset: { width: -2, height: 2 },
    shadowRadius: 5,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  bg: {
    flex: 1,
    width: "100%",
    position: "relative",
  },
  containerWrapper: {
    margin: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  symbol: {
    position: "absolute",
    top: 15,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },  pressedStyle: {
    elevation: 6,
    shadowColor: Colors.darkest_brown,
    shadowOffset: {width: -2, height: 2},
    shadowOpacity: 1,
    shadowRadius: 3,
    opacity: .5
  },
});
