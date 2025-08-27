import { NavigationContainer, getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerParamList } from "../../types";
import { ScreenBackground } from "../components/ScreenBackground";
import { Colors, Opacity } from "../../utils/colors";
import { MainStack } from "../navigation/MainStack";
import { SymbolsGuide } from "./SymbolsGuide";
import { About } from "./About";
import { YourProgress } from "./YourProgress";
import { Platform } from "react-native";

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
            sceneStyle: { backgroundColor: "transparent" },
            drawerType: Platform.select({ ios: "front", android: "front" }),
            drawerActiveTintColor: Colors.map,
            drawerInactiveTintColor: Colors.map + Opacity[5],
            drawerStyle: {
              backgroundColor: Colors.darkest_brown + Opacity[9],
              width: "60%",
            },
          }}
        >
          <Drawer.Screen
            name="Main"
            component={MainStack}
            options={({ route }) => {
              const routeName = getFocusedRouteNameFromRoute(route) ?? "Chapters";
              const shouldHide = ["Chapter", "MissionDetails", "Type"].includes(routeName);

              return {
                drawerLabel: "Home",
                headerShown: !shouldHide,
                swipeEnabled: !shouldHide,
                drawerType: shouldHide ? "back" : Platform.select({ ios: "front", android: "front" }),

                headerTransparent: !shouldHide,
                headerTitle: shouldHide ? undefined : "",
                headerStyle: { backgroundColor: shouldHide ? Colors.darkest_brown : "transparent" },
                headerBackgroundContainerStyle: { backgroundColor: shouldHide ? Colors.darkest_brown : "transparent" },
                headerTintColor: Colors.map,
              };
            }}
          />
          <Drawer.Screen
            name="SymbolsGuide"
            component={SymbolsGuide}
            options={{ drawerLabel: "Symbols Guide" }}
          />
          <Drawer.Screen
            name="YourProgress"
            component={YourProgress}
            options={{ drawerLabel: "Your Progress" }}
          />
          <Drawer.Screen
            name="About"
            component={About}
            options={{ drawerLabel: "About" }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </ScreenBackground>
  );
};
