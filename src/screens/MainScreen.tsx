import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { DrawerParamList } from "../../types";
import { ScreenBackground } from "../components/ScreenBackground";
import { Colors, Opacity } from "../../utils/colors";
import { MainStack } from "../navigation/MainStack";
import { SymbolsGuide } from "./SymbolsGuide";
import { About } from "./About";
import { YourProgress } from "./YourProgress";
import { NightmareJob } from "./NightmareJob";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { setLanguage, useLanguage } from "../../device";

const LanguageSwitcher = ({ language }: { language: "es" | "en" }) => {
  const isEnglish = language === "en";

  return (
    <View style={styles.langWrapper}>
      <View style={styles.langRow}>
        <Text style={styles.langTitle}>
          {language === "es" ? "Idioma" : "Language"}
        </Text>
        <Pressable
          accessibilityRole="switch"
          accessibilityLabel={language === "es" ? "Cambiar idioma" : "Change language"}
          accessibilityState={{ checked: isEnglish }}
          onPress={() => setLanguage(isEnglish ? "es" : "en")}
          style={styles.customSwitch}
        >
          <View style={styles.customSwitchTrack}>
            <Text
              style={[
                styles.customSwitchText,
                !isEnglish && styles.customSwitchTextActive,
              ]}
            >
              ES
            </Text>
            <Text
              style={[
                styles.customSwitchText,
                isEnglish && styles.customSwitchTextActive,
              ]}
            >
              EN
            </Text>
            <View
              style={[
                styles.customSwitchThumb,
                isEnglish ? styles.customSwitchThumbRight : styles.customSwitchThumbLeft,
              ]}
            />
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const CustomDrawerContent = (
  props: DrawerContentComponentProps,
  language: "es" | "en"
) => {
  return (
    <View style={styles.drawerContentRoot}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.drawerScrollContent}
      >
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <LanguageSwitcher language={language} />
    </View>
  );
};

export const MainScreen = () => {
  const language = useLanguage();
  const Drawer = createDrawerNavigator<DrawerParamList>();

  return (
    <ScreenBackground bg={2}>
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={(props) => CustomDrawerContent(props, language)}
          screenOptions={{
            headerTransparent: true,
            headerTintColor: Colors.map,
            headerBackgroundContainerStyle: {
              backgroundColor: Colors.darkest_brown,
            },
            headerTitleStyle: { fontFamily: "Rye_400Regular", fontSize: 22 },
            sceneStyle: { backgroundColor: "transparent" },
            drawerType: Platform.select({ ios: "front", android: "front" }),
            drawerActiveTintColor: Colors.map,
            drawerInactiveTintColor: Colors.map + Opacity[5],
            drawerStyle: {
              backgroundColor: Colors.darkest_brown + Opacity[9],
              width: "60%",
            },
            drawerLabelStyle: { fontFamily: "Rye_400Regular", fontSize: 17 },
          }}
        >
          <Drawer.Screen
            name="Main"
            component={MainStack}
            options={({ route }) => {
              const routeName =
                getFocusedRouteNameFromRoute(route) ?? "Chapters";
              const shouldHide = ["Chapter", "MissionDetails", "Type"].includes(
                routeName
              );

              return {
                drawerLabel: language === "es" ? "Inicio" : "Home",
                headerShown: !shouldHide,
                swipeEnabled: !shouldHide,
                drawerType: shouldHide
                  ? "back"
                  : Platform.select({ ios: "front", android: "front" }),

                headerTransparent: !shouldHide,
                headerTitle: shouldHide ? undefined : "",
                headerStyle: {
                  backgroundColor: shouldHide
                    ? Colors.darkest_brown
                    : "transparent",
                },
                headerBackgroundContainerStyle: {
                  backgroundColor: shouldHide
                    ? Colors.darkest_brown
                    : "transparent",
                },
                headerTintColor: Colors.map,
              };
            }}
          />
          <Drawer.Screen
            name="SymbolsGuide"
            component={SymbolsGuide}
            options={{
              drawerLabel:
                language === "es" ? "Guía de símbolos" : "Symbols Guide",
              headerTitle:
                language === "es" ? "Guía de símbolos" : "Symbols Guide",
              headerTransparent: false,
              headerStyle: { backgroundColor: Colors.darkest_brown },
              headerTintColor: Colors.map,
              headerTitleStyle: { fontFamily: "Rye_400Regular" },
              headerTitleAlign: "center",
            }}
          />
          <Drawer.Screen
            name="YourProgress"
            component={YourProgress}
            options={{
              drawerLabel: language === "es" ? "Tu Progreso" : "Your Progress",
              headerTitle: "",
              headerTransparent: false,
              headerStyle: { backgroundColor: Colors.darkest_brown },
              headerTintColor: Colors.map,
            }}
          />
          <Drawer.Screen
            name="About"
            component={About}
            options={{
              drawerLabel: language === "es" ? "Sobre nosotros" : "About us",
              headerTitle: language === "es" ? "Sobre nosotros" : "About us",
              headerTransparent: false,
              headerStyle: { backgroundColor: Colors.darkest_brown },
              headerTintColor: Colors.map,
              headerTitleStyle: { fontFamily: "Rye_400Regular" },
              headerTitleAlign: "center",
            }}
          />
          <Drawer.Screen
            name="NightmareJob"
            component={NightmareJob}
            options={{
              drawerLabel: () => (
                <Text style={styles.nightmareDrawerLabel}>Nightmare Job</Text>
              ),
              headerTitle: "Nightmare Job",
              headerTransparent: false,
              headerStyle: { backgroundColor: Colors.darkest_brown },
              headerTintColor: Colors.map,
              headerTitleStyle: { fontFamily: "Rye_400Regular" },
              headerTitleAlign: "center",
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </ScreenBackground>
  );
};

const styles = StyleSheet.create({
  drawerContentRoot: {
    flex: 1,
  },
  drawerScrollContent: {
    paddingBottom: 12,
  },
  langWrapper: {
    borderTopWidth: 1,
    borderTopColor: Colors.map + Opacity[3],
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 24,
  },
  langTitle: {
    color: Colors.map,
    fontFamily: "Rye_400Regular",
    fontSize: 14,
  },
  langRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  customSwitch: {
    alignSelf: "auto",
  },
  customSwitchTrack: {
    width: 112,
    height: 38,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.map + Opacity[5],
    backgroundColor: Colors.darkest_brown + Opacity[8],
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 14,
    overflow: "hidden",
  },
  customSwitchThumb: {
    position: "absolute",
    top: 3,
    width: 52,
    height: 30,
    borderRadius: 15,
    backgroundColor: Colors.map,
  },
  customSwitchThumbLeft: {
    left: 3,
  },
  customSwitchThumbRight: {
    left: 57,
  },
  customSwitchText: {
    zIndex: 1,
    color: Colors.map + Opacity[5],
    fontFamily: "Rye_400Regular",
    fontSize: 15,
  },
  customSwitchTextActive: {
    color: Colors.darkest_brown,
  },
  nightmareDrawerLabel: {
    color: Colors.yellow + Opacity[8],
    fontFamily: "Rye_400Regular",
    fontSize: 19,
    letterSpacing: 0.3,
  },
});
