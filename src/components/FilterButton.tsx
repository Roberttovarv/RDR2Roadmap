import React, { useRef, useState } from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { Colors, Opacity } from "../../utils/colors";
import { DEVICE_LANGUAGE } from "../../device";

type Lang = "es" | "en";
export type FilterKey = "all" | "completed" | "not_completed";
type Props = {
  value: FilterKey;
  onChange: (next: FilterKey) => void;
};

const titles = {
  filter: { en: "Filter", es: "Filtrar" },
  all: { en: "All", es: "Todas" },
  completed: { en: "Completed", es: "Completadas" },
  not_completed: { en: "Not completed", es: "No completadas" },
} as const;

export const FilterButton = ({value, onChange}: Props) => {
  const LANG = DEVICE_LANGUAGE as Lang;
  const triggerRef = useRef<View>(null);

  const [shown, setShown] = useState(false);
  const [anchor, setAnchor] = useState({ x: 0, y: 0, w: 0, h: 0 });
  const [menuH, setMenuH] = useState(0);

  const { width: winW, height: winH } = useWindowDimensions();

  const MENU_W = 200;
  const MARGIN = 8;
  const GAP = 6;

  const open = () => {
    triggerRef.current?.measureInWindow((x, y, w, h) => {
      setAnchor({ x, y, w, h });
      setShown(true);
    });
  };

  const calcMenuPos = () => {
    let left = anchor.x + anchor.w;
    left = Math.max(MARGIN, Math.min(left, winW - MARGIN - MENU_W)) + 10;

    let top = anchor.y + anchor.h + GAP;
    if (top + menuH > winH - MARGIN) {
      top = Math.max(MARGIN, anchor.y - menuH - GAP);
    }
    return { left, top };
  };

  const pos = calcMenuPos();

  const pick = (key: FilterKey) => {
    onChange(key)
    setShown(false);
  };

  return (
    <View>
      <Pressable
        ref={triggerRef}
        onPress={open}
        style={({ pressed }) => (pressed ? { opacity: 0.5 } : undefined)}
        hitSlop={10}
      >
        <Text style={styles.filterButton}>{titles.filter[LANG]}</Text>
      </Pressable>

      <Modal
        visible={shown}
        transparent
        animationType="fade"
        onRequestClose={() => setShown(false)}
      >
           <Pressable style={StyleSheet.absoluteFillObject} onPress={() => setShown(false)} />
        <View style={StyleSheet.absoluteFill}>
          <View
            style={[styles.dropdown, { width: MENU_W, left: pos.left, top: pos.top }]}
            onLayout={(e) => setMenuH(e.nativeEvent.layout.height)}
          >
            {(["all", "completed", "not_completed"] as const).map((k) => (
              <Pressable key={k} onPress={() => pick(k)} style={({ pressed }) => (pressed ? styles.rowPressed : undefined)}>
                <Text style={[styles.itemText, value === k && styles.selected]}>
                  {titles[k][LANG]}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>

      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  filterButton: {
    fontFamily: "Rye_400Regular",
    fontSize: 20,
    color: Colors.map,
    textAlign: "right",
  },
  dropdown: {
    position: "absolute",
    backgroundColor: Colors.darkest_brown + Opacity[7],
    borderRadius: 8,
    paddingVertical: 10,
    paddingRight: 12,
    shadowColor: Colors.darkest_brown,
    shadowOpacity: 0.7,
    shadowRadius: 2,
    shadowOffset: { width: -2, height: 4 },
    elevation: 2,
  },
  rowPressed: { opacity: 0.5 },
  itemText: {
    fontFamily: "Rye_400Regular",
    fontSize: 18,
    color: Colors.map,
    textAlign: "right",
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  selected: { color: Colors.fuel_yellow },
});
