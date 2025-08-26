import React from "react";
import { Pressable, View, StyleSheet, ViewStyle } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Colors } from "../../utils/colors";

type Props = {
  value: boolean;
  onChange: (next: boolean) => void;
  size?: number;
  borderWidth?: number;
  disabled?: boolean;
};

export const CustomCheckbox = ({
  value,
  onChange,
  size = 22,
  borderWidth = 3,
  disabled = false,
}: Props) => {
  return (
    <Pressable
      onPress={() => !disabled && onChange(!value)}
      hitSlop={10}
      accessibilityRole="checkbox"
      accessibilityState={{ checked: value, disabled }}
      style={({ pressed }) => [
        styles.box,
        {
          width: size,
          height: size,
          borderWidth,
          borderColor: Colors.darkest_brown,
          backgroundColor: "transparent",
          opacity: disabled ? 0.5 : pressed ? 0.7 : 1,
        },
      ]}
    >
      {value && (
        <View style={styles.iconWrap}>
          <Entypo name="check" size={size - 6} color={Colors.darkest_brown} />
        </View>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  box: {
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  iconWrap: {},
});
