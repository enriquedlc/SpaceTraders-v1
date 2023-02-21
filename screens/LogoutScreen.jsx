import React from 'react'
import { Image, View, Text, StyleSheet } from 'react-native'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'


const LogoutScreen = ({ onLogout }) => {
    return (
        <View style={styles.container}>
            <Pressable onPress={onLogout}>
                <Text>Logout</Text>
            </Pressable>
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