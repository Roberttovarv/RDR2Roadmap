import { ImageBackground, View, StyleSheet } from "react-native";

export const ScreenBackground = ({ children }: { children: React.ReactNode }) => (
  <ImageBackground
    source={require("../../assets/bg_wood2.webp")}
    style={styles.bg}
    imageStyle={{ resizeMode: "cover" }}
    fadeDuration={0}
  >
    <View style={styles.inner}>{children}</View>
  </ImageBackground>
);

const styles = StyleSheet.create({
  bg: { flex: 1 },
  inner: { flex: 1 },
});
