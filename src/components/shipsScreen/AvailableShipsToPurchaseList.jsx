import { StyleSheet, Text, View, Image } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'


const AvailableShipsToPurchaseList = ({ availableShipsToPurchase, setAvailableShipsToPurchase }) => {

    const shipsByClassImage = [
        // require('../assets/appIcons/shipIcons/classmk-0.png'),
        require('../../../assets/appIcons/shipIcons/classmk-1.png'),
        require('../../../assets/appIcons/shipIcons/classmk-2.png'),
        require('../../../assets/appIcons/shipIcons/classmk-3.png'),
        require('../../../assets/appIcons/shipIcons/classmk-4.png')
    ]

    const getShipImageByClass = (shipClass) => {
        const classes = ['MK-I', 'MK-II', 'MK-III', 'MK-IV', 'MK-V']

        const idx = classes.indexOf(shipClass)

        if (idx === -1) {
            return null
        }
        return shipsByClassImage[idx]
    }

    return (
        <View style={styles.viewAvailableShipsContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                <Image style={styles.userShipsIcon} source={require('../../../assets/appIcons/shipIcons/shipIconTittles/launch.png')} ></Image>
                <Text style={styles.userShipsText}>Available Ships</Text>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={availableShipsToPurchase.ships}
                renderItem={(ship) => {
                    return (
                        <View style={styles.userShipItem}>
                            {/* {getPlanetImage(planet.item.name)} */}
                            {/* <Image style={styles.userShipIndividualIcon} source={getShipImage(ship.item.type)} ></Image> */}
                            <Image style={styles.userShipIndividualIcon} source={getShipImageByClass(ship.item.class)} ></Image>
                            <View style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                <Text style={styles.userShipItemText}>Type: {ship.item.type}</Text>
                                <Text style={styles.userShipItemText}>Speed: {ship.item.speed}</Text>
                                <Text style={styles.userShipItemText}>Weapons: {ship.item.weapons}</Text>
                                <Text style={styles.userShipItemText}>Cargo: {ship.item.maxCargo}</Text>
                            </View>
                        </View>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    viewAvailableShipsContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        backgroundColor: '#3f1dcb',
        borderRadius: 7,
        height: 100,
        marginTop: 20,
        marginBottom: 10,
        borderColor: 'black',
        borderWidth: 1,
    },
    userShipsIcon: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
        marginRight: 10,
    },
    userShipsText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    userShipItem: {
        flexDirection: 'row',
        width: 315,
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 100,
        backgroundColor: 'lightgrey',
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 20,
        borderRadius: 10,
        padding: 10,
    },
    userShipIndividualIcon: {
        width: 50,
        height: 50,
        marginRight: 25,
        marginLeft: 60,
    },
})

export default AvailableShipsToPurchaseList