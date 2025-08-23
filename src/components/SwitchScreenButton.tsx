import { Text, StyleSheet, Pressable, View } from "react-native";
import { Colors } from "../../utils/colors";
import { useState } from "react";

type Props = {
  arg1: string;
  arg2: string;
  screen: boolean;
  onPress: (value: boolean) => void
};

export const SwitchScreenButton = ({ arg1, arg2, screen, onPress }: Props) => {


  return (
    <>
      <View style={styles.root}>
        <View style={styles.buttonsContainer}>
          <Pressable
            onPress={() => onPress(true)}
            style={[styles.button, screen && styles.pressed]}
          >
            <Text style={[styles.text, screen && styles.textPressed]}>
              {arg1}
            </Text>
          </Pressable>
          <View style={styles.middleLine} />
          <Pressable
            onPress={() => onPress(false)}
            style={[styles.button, !screen && styles.pressed]}
          >
            <Text style={[styles.text, !screen && styles.textPressed]}>
              {arg2}
            </Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    alignSelf: "center",
    flexDirection: "row",
    borderWidth: 3,
    borderRadius: 5,
    borderColor: "black",
    width: "60%",
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: -2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 0,
    backgroundColor: Colors.brown,
    marginBottom: 8,
    marginTop: -20,
    marginLeft: 5
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "stretch",
    width: "100%",
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.darkest_brown,
    padding: 6,
  },
  text: {
    fontFamily: "Smokum_400Regular",
    fontSize: 24,
    color: Colors.map,
    textAlign: "center",
  },
  pressed: {
    backgroundColor: "black",
    elevation: 4,
  },
  textPressed: {
    color: Colors.fuel_yellow,
  },
  middleLine: {
    width: 4,
    height: "100%",
    backgroundColor: "black",
  },
});
