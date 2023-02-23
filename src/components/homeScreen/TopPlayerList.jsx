import React from 'react'

import { Image, View, Text, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

const medalImages = [
    require('../../../assets/appIcons/HomeIcons/places/1st_place.png'),
    require('../../../assets/appIcons/HomeIcons/places/2nd_place.png'),
    require('../../../assets/appIcons/HomeIcons/places/3rd_place.png'),
    require('../../../assets/appIcons/HomeIcons/places/medal.png')
]

const TopPlayerList = ({ topPlayers }) => {

    const getMedal = (rank) => {
        const medalImg = rank > 3 ? medalImages[3] : medalImages[rank - 1];
        return <Image style={styles.topPlayerMedalIcon} source={medalImg} />
    }

    const sanitizedUsername = (username) => {
        const sanitizedName = username.length > 13 ? username.substring(0, 12) + '...' : username
        return sanitizedName
    }

    return (
        <View style={styles.topPlayerContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingBottom: 10 }}>
                <Image source={require('../../../assets/appIcons/HomeIcons/podium.png')} style={styles.topPlayerPodiumIcon} ></Image>
                <Text style={styles.topPlayerHeaderText}>Top Players</Text>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={topPlayers.netWorth}
                renderItem={(player) => {
                    return (
                        <View style={styles.topPlayerItem}>
                            {/* <Image source={{ uri: Asset.fromModule(player.item.medalImage).uri }} style={styles.topPlayerMedalIcon} ></Image> */}
                            {/* <Image source={require('../../assets/appIcons/HomeIcons/places/medal.png')} style={styles.topPlayerMedalIcon} ></Image> */}
                            {getMedal(player.item.rank)}
                            <Text style={styles.topPlayerText}>{sanitizedUsername(player.item.username)}</Text>
                            <Text style={styles.topPlayerText}>NetWorth: {player.item.netWorth}</Text>
                        </View>
                    )
                }
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    topPlayerContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '92%',
        height: 350,
        backgroundColor: 'lightgrey',
        marginTop: 20,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5
    },
    topPlayerPodiumIcon: {
        marginTop: 10,
        width: 50,
        height: 50,
    },
    topPlayerMedalIcon: {
        width: 30,
        height: 30,
    },
    topPlayerItem: {
        flexDirection: 'row',
        width: 320,
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 50,
        backgroundColor: 'lightgrey',
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 20,
        borderRadius: 10,
        padding: 10,
    },
    topPlayerHeaderText: {
        fontSize: 18,
        marginLeft: 12,
        fontWeight: 'bold',
        marginTop: 10
    },
    topPlayerText: {
        fontSize: 14,
        marginLeft: 10,
    },
})

export default TopPlayerList
