import AsyncStorage from "@react-native-async-storage/async-storage";
import seed from "../../assets/db.json";
import { Mission } from "../../types";

const MISSIONS_KEY = "missions:v1";
const SEEDED_KEY = "missions_seeded:v1";

export const initMissions = async () => {
  try {
    const seeded = await AsyncStorage.getItem(SEEDED_KEY);
    if (!seeded) {
      await AsyncStorage.setItem(
        MISSIONS_KEY,
        JSON.stringify(seed as Mission[])
      );
      await AsyncStorage.setItem(SEEDED_KEY, "true");
    }
  } catch (e) {
    console.error("InitMissions error", e);
  }
};

export const getAllMissions = async (): Promise<Mission[]> => {
  try {
    const raw = await AsyncStorage.getItem(MISSIONS_KEY);
    return raw ? (JSON.parse(raw) as Mission[]) : [];
  } catch (e) {
    console.error("getAllMissions error:", e);
    return [];
  }
};

export const saveAllMissions = async (missions: Mission[]) => {
  try {
    await AsyncStorage.setItem(MISSIONS_KEY, JSON.stringify(missions));
  } catch (e) {
    console.error("saveAllMissions error:", e);
  }
};

export const getMissionsByChapter = async (chapter: string | number) => {
  const all = await getAllMissions();
  return all.filter((mission) => String(mission.chapter) === String(chapter));
};

const SYMBOLS = new Set(["*", "BOUNTY", "DEBT", "GANG", "?"]);
export const getMissionsByType = async (sym: string) => {
  const all = await getAllMissions();
  const hasSymbol = SYMBOLS.has(sym);
  if (hasSymbol) return all.filter((mission) => mission.sym === sym);
  return all.filter((mission) => !SYMBOLS.has(mission.sym));
};

export const updateMission = async (id: number, patch: Partial<Mission>) => {
  const all = await getAllMissions();
  const next = all.map((mission) =>
    mission.ID === id ? { ...mission, ...patch } : mission
  );
  await saveAllMissions(next);
  return next;
};

export const toggleCompleted = async (id: number, value: boolean) => {
  const all = await getAllMissions();
  const next = all.map((mission) =>
    mission.ID === id
      ? { ...mission, completed: value ?? !mission.completed }
      : mission
  );
  await saveAllMissions(next);
  return next;
};

export const resetMissions = async () => {
    await AsyncStorage.setItem(MISSIONS_KEY, JSON.stringify(seed as Mission[]))
}