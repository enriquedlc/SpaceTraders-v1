import { StyleSheet, Text, View, TextInput, Pressable, Alert } from 'react-native'
import React, { useState } from 'react'
import { registerUser } from '../services/spaceTraders'

const RegisterScreen = ({ storeUserToken, setUserToken }) => {
    const [username, setUsername] = useState('')

    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Your Username'
                style={styles.tokenTextInput}
                value={username}
                onChangeText={userNameText => setUsername(userNameText)}
            />
            <Pressable
                style={styles.registerButton}
                onPress={() => {
                    registerUser(username)
                        .then(response => {
                            if ('error' in response && response.error.code === 40901) {
                                Alert.alert('Error', 'Username has already been claimed.')
                            } else {
                                console.log('respuesta de la funcion', response)
                                storeUserToken(response.token)
                                Alert.alert('Success', 'User registered successfully')
                            }
                        })
                        .catch(error => {
                            console.log(error)
                            Alert.alert('Error', 'User not registered')
                        })
                }}

            >
                <Text>Register</Text>
            </Pressable>
        </View>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    tokenTextInput: {
        width: '50%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginBottom: 30,
    },
    registerButton: {
        backgroundColor: 'lightgreen',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 30,
        width: '50%'
    },
})
