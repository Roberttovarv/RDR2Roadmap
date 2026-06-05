import React from "react";
import {
  Alert,
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { Colors, Opacity } from "../../utils/colors";
import { useLanguage } from "../../device";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.daniellaamb.nightmarejob";

const isBeforeLaunchTimeInSpain = () => {
  const madridNow = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Madrid",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(new Date());

  const getPart = (type: Intl.DateTimeFormatPartTypes) =>
    Number(madridNow.find((part) => part.type === type)?.value ?? "0");

  const nowYear = getPart("year");
  const nowMonth = getPart("month");
  const nowDay = getPart("day");
  const nowHour = getPart("hour");
  const nowMinute = getPart("minute");

  const targetYear = 2026;
  const targetMonth = 6;
  const targetDay = 11;
  const targetHour = 17;

  const nowKey =
    nowYear * 100000000 +
    nowMonth * 1000000 +
    nowDay * 10000 +
    nowHour * 100 +
    nowMinute;
  const targetKey =
    targetYear * 100000000 +
    targetMonth * 1000000 +
    targetDay * 10000 +
    targetHour * 100;

  return nowKey < targetKey;
};

export const NightmareJob = () => {
  const language = useLanguage();
  const showReleaseDate = isBeforeLaunchTimeInSpain();

  const handleOpenStore = async () => {
    const canOpen = await Linking.canOpenURL(PLAY_STORE_URL);

    if (!canOpen) {
      Alert.alert(
        language === "es" ? "No disponible" : "Unavailable",
        language === "es"
          ? "No se pudo abrir el enlace de Google Play."
          : "Could not open the Google Play link."
      );
      return;
    }

    await Linking.openURL(PLAY_STORE_URL);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require("../../assets/store_capsule_header.png")} style={styles.headerImage} />

      <View style={styles.contentCard}>
        <Text style={styles.title}>Nightmare Job</Text>
        {showReleaseDate && (
          <Text style={styles.releaseDate}>
            {language === "es" ? "Lanzamiento: 11 de junio" : "Release: June 11"}
          </Text>
        )}

        <Text style={styles.paragraph}>
          {language === "es"
            ? "Charlie odia su trabajo... pero lo soporta por su familia. Cada dia, su jefe se encarga de hacerle la vida un poco mas dificil. La presion aumenta y Charlie... esta llegando a su limite. Que pasa cuando alguien ya no puede mas?"
            : "Charlie hates his job... but he endures it for his family. Every day, his boss makes his life a little harder. The pressure keeps building, and Charlie... is reaching his limit. What happens when someone just can't take it anymore?"}
        </Text>

        <Text style={styles.paragraph}>
          {language === "es"
            ? "Nightmare Job es un juego de puzzles y plataformas en 2D donde cada nivel representa esa tension constante. A traves de desafios que combinan precision, exploracion y pequenos retos mentales."
            : "Nightmare Job is a 2D puzzle-platformer where each level reflects that constant tension, through challenges that combine precision, exploration, and small mental obstacles."}
        </Text>

        <Text style={styles.paragraph}>
          {language === "es"
            ? "Las mecanicas se introducen poco a poco, pero la presion nunca desaparece. Cada nivel anade algo nuevo. Cada error pesa mas."
            : "The mechanics are introduced gradually, but the pressure never fades. Each level adds something new. Every mistake feels heavier."}
        </Text>

        <Text style={styles.paragraph}>
          {language === "es"
            ? "No se trata solo de escapar del trabajo... Sino de descubrir los limites a los que te lleva."
            : "It's not just about escaping the job... It's about discovering how far it can push you."}
        </Text>

        <Pressable style={styles.playButton} onPress={handleOpenStore}>
          <Entypo name="google-play" size={22} color={Colors.darkest_brown} />
          <Text style={styles.playButtonText}>Get now!</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 18,
    alignItems: "center",
    paddingBottom: 36,
  },
  headerImage: {
    width: "100%",
    height: 180,
    borderRadius: 14,
    marginBottom: 16,
    resizeMode: "cover",
    borderWidth: 1,
    borderColor: Colors.darkest_brown + Opacity[6],
  },
  contentCard: {
    width: "100%",
    backgroundColor: Colors.darkest_brown + Opacity[1],
    borderRadius: 14,
    borderWidth: 1,
    borderColor: Colors.darkest_brown + Opacity[3],
    padding: 16,
  },
  title: {
    fontFamily: "Rye_400Regular",
    fontSize: 28,
    color: Colors.darkest_brown,
    textAlign: "center",
  },
  releaseDate: {
    marginTop: 6,
    marginBottom: 14,
    textAlign: "center",
    fontFamily: "Rye_400Regular",
    fontSize: 15,
    color: Colors.burdeos,
  },
  paragraph: {
    fontFamily: "EduNSWACTFoundation_400Regular",
    fontSize: 21,
    color: Colors.darkest_brown,
    lineHeight: 27,
    marginBottom: 12,
    textAlign: "left",
  },
  playButton: {
    marginTop: 8,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: Colors.map,
    borderRadius: 999,
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: Colors.darkest_brown + Opacity[4],
  },
  playButtonText: {
    fontFamily: "Rye_400Regular",
    fontSize: 16,
    color: Colors.darkest_brown,
  },
});
