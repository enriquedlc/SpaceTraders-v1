import { Image, View, Text, StyleSheet } from 'react-native'

import UserShipsList from '../components/shipsScreen/UserShipsList'
import AvailableShipsToPurchaseList from '../components/shipsScreen/AvailableShipsToPurchaseList'

const ShipsScreen = ({ profile, userShips, setUserShips, availableShipsToPurchase, setAvailableShipsToPurchase }) => {

    return (
        <View style={styles.container}>
            <View style={styles.userCredits}>
                <Image source={require('../../assets/appIcons/HomeIcons/loanToPayIcons/currency.png')} style={{ width: 37, height: 30, marginRight: 10 }} />
                <Text style={styles.creditText}>Credits: {profile.user.credits}</Text>
            </View>
            <View style={styles.userShipsAndAvailableShipsToPurchaseContainer}>
                <UserShipsList
                    userShips={userShips}
                    setUserShips={setUserShips}
                />
                <AvailableShipsToPurchaseList
                    availableShipsToPurchase={availableShipsToPurchase}
                    setAvailableShipsToPurchase={setAvailableShipsToPurchase}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: 'darkblue'
    },
    userCredits: {
        flexDirection: 'row',
        width: '85%',
        height: '7%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1565c0',
        borderRadius: 10,
    },
    creditText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    userShipsAndAvailableShipsToPurchaseContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '87%',
        marginTop: 20,
    }
})

export default ShipsScreen