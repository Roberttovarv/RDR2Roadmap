import { RenderGivenBy } from "./RenderGivenBy";
import { RenderDeadline } from "./RenderDeadline";
import { RenderNotes } from "./RenderNotes";
import { RenderLocation } from "./RenderLocation";
import { Mission } from "../../../types";
import { LANG } from "../../../device";
import { View } from "react-native";

export const RenderBody = ({mission} : {mission: Mission}) => {
      const notes_raw = LANG === "es" ? mission.notes_es : mission.notes_en;
      const start =
        LANG === "es" ? mission.starting_at_es : mission.starting_at_en;
      const end =
        LANG === "es" ? mission.ending_at_es : mission.ending_at_en;
        
        return (
  <View>
    <RenderGivenBy sym={mission.sym} given_by={mission.given_by} />
    <RenderLocation sym={mission.sym} start={start} end={end} />
    <RenderNotes notes_raw={notes_raw} />
    <RenderDeadline deadline={mission.deadline} />
  </View>
);}
