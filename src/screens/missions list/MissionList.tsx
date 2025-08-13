import { FlatList, View } from "react-native"
import missionsData from "../../../assets/db.json"
import { Text } from "react-native"
import { Mission } from "../../../types"
import { DEVICE_LANGUAGE } from "../../../device"

export const MissionList = () => {

    const renderItem = ({item}: {item: Mission}) => {
        const {mission_es, mission_en, sym, deadline} = item

        const title = DEVICE_LANGUAGE === "es" ? mission_es: mission_en

        return (
        <View>
            <Text>{title}</Text>
        </View>
        )
    }

    return (
        <FlatList data={missionsData as Mission[]} keyExtractor={(item) => item.ID.toString()} renderItem={renderItem}/>
    )
}