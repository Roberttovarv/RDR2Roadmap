// MissionTypeScreen.tsx
import { StyleSheet, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import { TypeMissionList } from "../components/MissionType/TypeMissionList";

type Props = NativeStackScreenProps<RootStackParamList, "Type">;

export const MissionTypeScreen = ({ route }: Props) => {
  const { sym } = route.params;

  return (
    <View style={styles.root}>
      <TypeMissionList sym={sym} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1 },
});
