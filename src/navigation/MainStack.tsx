import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import { ChaptersGrid } from "../screens/MissionsGrid";
import { ChapterScreen } from "../screens/ChapterScreen";
import { MissionDetail } from "../screens/MissionDetail";
import { MissionTypeScreen } from "../screens/MissionTypeScreen";
import { Colors } from "../../utils/colors";
import { ScreenBackground } from "../components/ScreenBackground";
const Stack = createNativeStackNavigator<RootStackParamList>();

export const MainStack = () => (
  <ScreenBackground bg={1}>
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: "transparent" },
        headerBackButtonDisplayMode: "minimal",
        headerStyle: { backgroundColor: Colors.darkest_brown },
        headerTintColor: Colors.map,
        headerTitleStyle: { fontFamily: "Rye_400Regular", fontSize: 20 },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="Chapters"
        component={ChaptersGrid}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Chapter"
        component={ChapterScreen}
        listeners={({ navigation }) => ({
          focus: () => navigation.getParent()?.setOptions({ swipeEnabled: false, }),
          blur:  () => navigation.getParent()?.setOptions({ swipeEnabled: true }),
        })}
      />
      <Stack.Screen
        name="MissionDetails"
        component={MissionDetail}
        listeners={({ navigation }) => ({
          focus: () => navigation.getParent()?.setOptions({ swipeEnabled: false }),
          blur:  () => navigation.getParent()?.setOptions({ swipeEnabled: true }),
        })}
      />
      <Stack.Screen
        name="Type"
        component={MissionTypeScreen}
        listeners={({ navigation }) => ({
          focus: () => navigation.getParent()?.setOptions({ swipeEnabled: false }),
          blur:  () => navigation.getParent()?.setOptions({ swipeEnabled: true }),
        })}
      />
    </Stack.Navigator>
  </ScreenBackground>
);

