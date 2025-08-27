import { ImageBackground, View, StyleSheet, ImageSourcePropType } from "react-native";

type num = 1 | 2
const images: Record<number, ImageSourcePropType> = {
  1: require("../../assets/bg_wood.webp"),
  2: require("../../assets/bg_paper.webp")
}
export const ScreenBackground = ({ children, bg }: { children: React.ReactNode, bg: number }) => {
  const NUM = bg as num
  return (
  <ImageBackground
    source={images[NUM]}
    style={styles.bg}
    imageStyle={{ resizeMode: "cover" }}
    fadeDuration={0}
  >
    <View style={styles.inner}>{children}</View>
  </ImageBackground>
);}

const styles = StyleSheet.create({
  bg: { flex: 1 },
  inner: { flex: 1 },
});
