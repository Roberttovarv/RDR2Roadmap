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
        headerBackButtonDisplayMode: "minimal",
        contentStyle: { backgroundColor: "transparent" },
        headerStyle: { backgroundColor: Colors.darkest_brown },
        headerTintColor: Colors.map,
        headerTitleStyle: { fontFamily: "Rye_400Regular", fontSize: 20 },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen name="Chapters" component={ChaptersGrid} />
      <Stack.Screen name="Chapter" component={ChapterScreen} />
      <Stack.Screen name="MissionDetails" component={MissionDetail} />
      <Stack.Screen name="Type" component={MissionTypeScreen} />
    </Stack.Navigator>
  </ScreenBackground>
);
