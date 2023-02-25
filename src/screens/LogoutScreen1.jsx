import React from 'react'
import { Image, View, Text, StyleSheet } from 'react-native'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import * as SecureStore from 'expo-secure-store';


const STORED_TOKEN_KEY = 'userToken';

const LogoutScreen = ({ onLogout, setUserToken }) => {

    const logout = async () => {
        setUserToken('');
        await SecureStore.deleteItemAsync(STORED_TOKEN_KEY);
    }

    return (
        <View style={styles.container}>
            <Pressable onPress={logout}>
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