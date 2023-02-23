import { StyleSheet, Text, View, Image } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

const UserShipsList = ({ userShips, setUserShips }) => {

    const shipsByClassImage = [
        //require('../assets/appIcons/shipIcons/classmk-0.png'),
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
        <View style={styles.viewUserShipsContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                <Image style={styles.userShipsIcon} source={require('../../../assets/appIcons/shipIcons/shipIconTittles/spaceship(4).png')}></Image>
                <Text style={styles.userShipsText}>Your Ships</Text>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={userShips.ships}
                renderItem={(ship) => {
                    return (
                        <View style={styles.userShipItem}>
                            {/* {getPlanetImage(planet.item.name)} */}
                            {/* <Image style={styles.userShipIndividualIcon} source={getShipImage(ship.item.type)} ></Image> */}
                            <Image style={styles.userShipIndividualIcon} source={getShipImageByClass(ship.item.class)} ></Image>
                            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={styles.userShipItemText}>manufacturer: {ship.item.manufacturer}</Text>
                                <Text style={styles.userShipItemText}>class: {ship.item.class}</Text>
                            </View>
                        </View>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    viewUserShipsContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        backgroundColor: '#3f1dcb',
        borderRadius: 7,
        height: 100,
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
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: 70,
        backgroundColor: 'lightgrey',
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 20,
        borderRadius: 10,
        padding: 10,
    },
    userShipIndividualIcon: {
        width: 30,
        height: 30,
        marginRight: 8
    },
})

export default UserShipsList
