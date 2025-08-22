import { Text, StyleSheet, Pressable } from "react-native";
import { Colors, Opacity } from "../../utils/colors";


type Props = {
  onPress: () => void;
  text: string;
};

export const CustomButton = ({ onPress, text }: Props) => {

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      {({ pressed }) => (
        <Text style={[styles.text, pressed && styles.textPressed]}>{text}</Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderColor: Colors.darkest_brown,
    borderRadius: 3,
    padding: 6,
    elevation: 1,
    shadowColor: Colors.dark_brown,
    shadowOffset: {width: -2, height: 2},
    shadowOpacity: .2,
    shadowRadius: 2
  },
  pressed: {
    backgroundColor: Colors.dark_brown + Opacity[8],
    borderColor: Colors.darkest_brown
    ,
    elevation: 4,
    shadowColor: Colors.dark_brown,
    shadowOffset: {width: -2, height: 2},
    shadowOpacity: .8,
    shadowRadius: 2
    
  },
  text: {
    fontFamily: "EduNSWACTFoundation_600SemiBold",
    fontSize: 24,
    color: Colors.darkest_brown,
  },
  textPressed: {
    color: Colors.map,
  },
});
