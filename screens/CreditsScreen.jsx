import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


const CreditsScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Credits Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
})

export default CreditsScreen