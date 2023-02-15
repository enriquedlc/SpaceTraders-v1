import { View, Text, StyleSheet, Button, Pressable } from 'react-native'
import React from 'react'

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.loginButton} title="Login" onPress={() => navigation.navigate('Home')} >
        <Text>Login</Text>
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
    loginButton: {
        width: 130,
        height: 50,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default LoginScreen