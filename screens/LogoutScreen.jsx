import React from 'react'
import { Image, View, Text, StyleSheet } from 'react-native'


const LogoutScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Logout Screen</Text>
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

export default LogoutScreen