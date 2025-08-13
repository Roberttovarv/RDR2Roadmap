import { Text, View } from "react-native"
import { MissionList } from "./missions list/MissionList"

export const MainScreen = () => {
    return (
        <View>
            <Text>Hola mundo</Text>
            <MissionList />
        </View>
    )
}