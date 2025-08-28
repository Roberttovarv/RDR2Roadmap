import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerParamList } from "../../types";
import { ScreenBackground } from "../components/ScreenBackground";
import { Colors, Opacity } from "../../utils/colors";
import { MainStack } from "../navigation/MainStack";
import { SymbolsGuide } from "./SymbolsGuide";
import { About } from "./About";
import { YourProgress } from "./YourProgress";
import { Platform } from "react-native";
import { LANG } from "../../device";

export const MainScreen = () => {
  const Drawer = createDrawerNavigator<DrawerParamList>();
  return (
    <ScreenBackground bg={2}>
      <NavigationContainer>
        <Drawer.Navigator
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
                drawerLabel: LANG === "es" ? "Inicio" : "Home",
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
              drawerLabel: LANG === "es" ? "Guía de símbolos" : "Symbols Guide",
              headerTitle: LANG === "es" ? "Guía de símbolos" : "Symbols Guide",
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
              drawerLabel: LANG === "es" ? "Tu Progreso" : "Your Progress",
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
              drawerLabel: LANG === "es" ? "Sobre nosotros" : "About us",
              headerTitle: LANG === "es" ? "Sobre nosotros" : "About us",
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
