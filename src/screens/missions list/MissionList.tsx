import { FlatList, StyleSheet, View } from "react-native"
import missionsData from "../../../assets/db.json"
import { Text } from "react-native"
import { Mission } from "../../../types"
import { DEVICE_LANGUAGE } from "../../../device"
import { Colors } from "../../../utils/colors"

export const MissionList = () => {

    const renderItem = ({item}: {item: Mission}) => {
        const {mission_es, mission_en, sym, deadline} = item

        const title = DEVICE_LANGUAGE === "es" ? mission_es: mission_en

        return (
        <View style={styles.listContainer}>
            <View style={styles.listSide}>
            <Text>{sym}</Text>
            </View>
            <View style={styles.listCenter}>
            <Text>{title}</Text>
            </View>
            <View style={styles.listSide}>
            <Text>{deadline}</Text>
            </View>
        </View>
        )
    }

    return (
        <FlatList data={missionsData as Mission[]} keyExtractor={(item) => item.ID.toString()} renderItem={renderItem}/>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        flexDirection: "row",
        padding: 12,
        gap: 8,
        backgroundColor: Colors.fuel_yellow,
        alignItems: "center"
    },
    listSide: {
        flex: 1.5,
        justifyContent: "center",
        alignItems: "center"
    },
    listCenter: {
        flex: 7,
        justifyContent: "center",
        alignItems: "center"
    },
})