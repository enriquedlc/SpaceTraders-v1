import React from 'react'

import { Image, View, Text, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

const PlanetsNearbyList = ({ planetsNearby }) => {

    const planetsNearbyImages = [
        require('../../../assets/appIcons/HomeIcons/planetsNearbyIcons/carth.png'),
        require('../../../assets/appIcons/HomeIcons/planetsNearbyIcons/koria.png'),
        require('../../../assets/appIcons/HomeIcons/planetsNearbyIcons/prime.png'),
        require('../../../assets/appIcons/HomeIcons/planetsNearbyIcons/ucarro.png')
    ]

    function getPlanetImage2(planetName) {
        const planetNames = ['carth', 'koria', 'prime', 'ucarro'];

        const idx = planetNames.indexOf(planetName.toLowerCase());

        if (idx === -1) {
            return null;
        }
        return planetsNearbyImages[idx];
    }

    const getPlanetImage = (planet) => {
        const planetImage = planet === 'Carth' ? planetsNearbyImages[0] : planet === 'Koria' ? planetsNearbyImages[1] : planet === 'Prime' ? planetsNearbyImages[2] : planetsNearbyImages[3]
        return <Image source={planetImage} style={styles.individualPlanetNearbyIcon} ></Image>
    }

    return (
        <View style={styles.viewPlanetsNearbyContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingBottom: 10 }}>
                <Image source={require('../../../assets/appIcons/HomeIcons/planeta.png')} style={styles.planetsNearbyIcon} ></Image>
                <Text style={styles.viewPlanetsNearbyText}>Planets Nearby</Text>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={planetsNearby.locations}
                renderItem={(planet) => {
                    return (
                        <View style={styles.viewPlanetsNearbyItem}>
                            {/* {getPlanetImage(planet.item.name)} */}
                            <Image source={getPlanetImage2(planet.item.name)} style={styles.individualPlanetNearbyIcon} ></Image>
                            <Text style={styles.planetsNearbyItemText}>{planet.item.name}</Text>
                        </View>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    viewPlanetsNearbyContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '46%',
        height: 240,
        backgroundColor: 'lightgrey',
        marginTop: 25,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10
    },
    planetsNearbyIcon: {
        marginTop: 10,
        width: 50,
        height: 50,
    },
    viewPlanetsNearbyItem: {
        flexDirection: 'row',
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        backgroundColor: 'lightgrey',
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 20,
        borderRadius: 10,
        padding: 10,
    },
    individualPlanetNearbyIcon: {
        width: 30,
        height: 30,
        marginRight: 8
    },
    viewPlanetsNearbyText: {
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 2,
    },
    planetsNearbyItemText: {
        fontSize: 14,
    }
})

export default PlanetsNearbyList