// src/screens/About.tsx
import React from "react";
import { ScrollView, View, Text, StyleSheet, Image } from "react-native";
import { Colors } from "../../utils/colors";
import { LANG } from "../../device";

export const About = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require("../../assets/logo.webp")} style={styles.logo} />

      <Text style={styles.title}>
        {LANG === "es" ? "Sobre la aplicación" : "About the App"}
      </Text>

      <Text style={styles.paragraph}>
        {LANG === "es"
          ? "RDR2 Roadmap es una aplicación hecha por fans que te ayuda a organizar y seguir tu progreso en Red Dead Redemption 2. Aquí podrás consultar todas las misiones, clasificarlas por capítulos o por tipo, y marcar tu progreso de forma sencilla."
          : "RDR2 Roadmap is a fan-made application that helps you organize and track your progress in Red Dead Redemption 2. You can browse all missions, sort them by chapter or type, and easily keep track of your completion."}
      </Text>

      <Text style={styles.paragraph}>
        {LANG === "es"
          ? "Esta aplicación no utiliza ningún asset, imagen o recurso oficial de Rockstar Games. Todo el contenido visual y de diseño es original o de uso libre. La aplicación no está afiliada, patrocinada ni respaldada por Rockstar Games."
          : "This application does not use any official assets, images, or resources from Rockstar Games. All visual and design content is original or freely usable. The app is not affiliated with, sponsored, or endorsed by Rockstar Games."}
      </Text>

      <Text style={styles.paragraph}>
        {LANG === "es"
          ? "RDR2 y Red Dead Redemption 2 son marcas registradas de Rockstar Games. Esta app se ha creado únicamente con fines informativos y de entretenimiento para la comunidad."
          : "RDR2 and Red Dead Redemption 2 are registered trademarks of Rockstar Games. This app was created solely for informational and entertainment purposes for the community."}
      </Text>

      <Text style={styles.footer}>
        {LANG === "es"
          ? "Gracias por usar la app y disfrutar de este viaje por el Oeste."
          : "Thank you for using the app and enjoying this journey through the Wild West."}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },
  logo: {
    width: 140,
    height: 140,
    resizeMode: "contain",
    marginBottom: 20,
  },
  title: {
    fontFamily: "Rye_400Regular",
    fontSize: 26,
    color: Colors.darkest_brown,
    marginBottom: 16,
    textAlign: "center",
  },
  paragraph: {
    fontFamily: "EduNSWACTFoundation_400Regular",
    fontSize: 18,
    color: Colors.darkest_brown,
    textAlign: "center",
    marginBottom: 14,
    lineHeight: 24,
  },
  footer: {
    fontFamily: "EduNSWACTFoundation_600SemiBold",
    fontSize: 18,
    color: Colors.burdeos,
    marginTop: 20,
    textAlign: "center",
  },
});
