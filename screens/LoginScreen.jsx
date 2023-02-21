import { View, Text, Image, StyleSheet, Pressable, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

import Toast from 'react-native-toast-message';

const LoginScreen = ({ onLogin }) => {

  const [userToken, setUserToken] = useState('')

  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Error',
      text2: 'Please enter a valid Token',
    });
  }

  const tokenHandler = () => {
    if (userToken !== '') {
      onLogin(userToken);
      console.log('talaso')
    } else {
      console.log('else talaso')
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Error',
        text2: 'Please enter a valid Token',
        visibilityTime: 4000,
        autoHide: true,
        topOffset: 30,
        bottomOffset: 40,
      });
    }
  }

  return (
    <>
      {/* <Image
        source={require('../assets/video/backgroundspacevid.gif')} // specify the path to your video file
        style={styles.video}
      /> */}
      <View style={styles.container}>
        <TextInput
          placeholder='Your Token'
          value={userToken}
          onChangeText={setUserToken}
        />
        <Pressable style={styles.loginButton} title="Show toast" onPress={() => tokenHandler()} >
          <Text>Login</Text>
        </Pressable>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  loginButton: {
    width: 130,
    height: 50,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {
    position: 'absolute',
    height: '100%',
    width: '100%'
  },
})

export default LoginScreen