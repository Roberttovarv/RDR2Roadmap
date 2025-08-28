import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { SymbolsGuide } from "../screens/SymbolsGuide";
import { Colors, Opacity } from "../../utils/colors";

export const GuideModal = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Pressable
        onPress={() => setVisible(true)}
        style={({ pressed }) => [
          styles.openButton,
          pressed && { backgroundColor: Colors.map },
        ]}
      >
        <Text style={styles.openButtonText}>?</Text>
      </Pressable>

      <Modal
        visible={visible}
        animationType="slide"
        transparent
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles.modalRoot}>
          <Pressable
            onPress={() => setVisible(false)}
            style={styles.backdrop}
          />
          <View style={styles.sheet}>
            <Pressable
              onPress={() => {
                setTimeout(() => {
                  setVisible(false);
                }, 50);
              }}
              style={({ pressed }) => [
                styles.closeBtn,
                pressed && {
                  opacity: 0.5,
                  backgroundColor: Colors.fuel_yellow + Opacity[5],
                },
              ]}
            >
              <Text style={styles.closeBtnText}>X</Text>
            </Pressable>

            <View style={styles.content}>
              <SymbolsGuide />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  openButton: {
    position: "absolute",
    right: 12,
    bottom: 12,
    backgroundColor: Colors.map + Opacity[5],
    borderRadius: 50,
    width: 40,
    height: 40,
    borderColor: Colors.darkest_brown,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  openButtonText: {
    color: Colors.darkest_brown,
    fontSize: 22,
    fontFamily: "Rye_400Regular",
    textAlign: "center",

  },
  modalRoot: {
    flex: 1,
    justifyContent: "flex-end",
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
  },
  sheet: {
    height: "64%",
    backgroundColor: Colors.map,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: "hidden",
    paddingTop: 24,
  },
  closeBtn: {
    position: "absolute",
    top: 12,
    right: 12,
    zIndex: 10,
    borderRadius: 50,
    width: 32,
    height: 32,
    borderColor: Colors.darkest_brown,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  closeBtnText: {
    fontSize: 16,
    color: Colors.darkest_brown,
    fontFamily: "Rye_400Regular",
  },
  content: {
    flex: 1,
    marginTop: 30,
  },
});
