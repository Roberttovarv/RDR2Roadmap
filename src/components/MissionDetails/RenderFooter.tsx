import { View } from "react-native"
import { RenderCompleted } from "./RenderCompleted"
import { RenderChapterNumber } from "./RenderChapterNumber"
import { Colors } from "../../../utils/colors"
import { Mission } from "../../../types"

export const RenderFooter = ({mission}: {mission: Mission}) => {
    return (
        <View
          style={{ justifyContent: "flex-end", alignItems: "center" }}
        >
          <View
            style={{
              flexDirection: "row",
              borderColor: Colors.dark_brown,
              borderWidth: 5,
              borderRadius: 3,
              width: "80%",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 100,
            }}
          >
            <RenderCompleted completed={mission.completed} />
            <View
              style={{
                width: 3,
                height: "100%",
                backgroundColor: Colors.dark_brown,
                marginHorizontal: 8,
              }}
            />
            <RenderChapterNumber chapter={mission.chapter} />
          </View>
        </View>
    )
}