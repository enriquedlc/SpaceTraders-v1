import { useState, useEffect } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import CreditsScreen from './src/screens/CreditsScreen';
import ShipsScreen from './src/screens/ShipsScreen'
import LoginScreen from './src/screens/LoginScreen'
import LogoutScreen from './src/screens/LogoutScreen1'
import AvailableLoans from './src/components/availableLoans/AvailableLoansList'
import WelcomeScreen from './src/screens/WelcomeScreen';
import RegisterScreen from './src/screens/RegisterScreen';

import { RootSiblingParent } from 'react-native-root-siblings';
import * as SecureStore from 'expo-secure-store';
const STORED_TOKEN_KEY = 'userTokenStored';

/**
 * test 
 */

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();


// async function saveData(key, value) {
//   await SecureStore.setItemAsync(key, value);
// }

// async function getData(key) {
//   const result = await SecureStore.getItemAsync(key);
//   if (result) {
//     console.log("🔐 Here's your value 🔐 \n" + result);
//     return result;
//   } else {
//     console.log('No values stored under that key.');
//     return '';
//   }
// }

// ASYNC STORAGE

import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigationRef } from './src/services/spaceTraders';

// const saveData = async (key, value) => {
//   try {
//     const savedData = AsyncStorage.setItem(key, JSON.stringify(value));
//     console.log('====> save data',);
//     return savedData;
//   } catch (e) {
//     console.log('====> save data error', e);
//   }
// }

const saveData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    console.log('====> save data');
  } catch (e) {
    console.log('====> save data error', e);
  }
}

const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    console.log('====> get data', jsonValue);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log('====> get data error', e);
  }
}

const Drawer = createDrawerNavigator();

export default function App() {

  const [userToken, setUserToken] = useState('');

  useEffect(() => {
    const retrieveStoredToken = async () => {
      const storedToken = await getData(STORED_TOKEN_KEY);
      setUserToken(storedToken);
    }
    retrieveStoredToken();
  }, [])

  const storeUserToken = (token) => {
    saveData(STORED_TOKEN_KEY, token);
    console.log('storeUserToken STATE', userToken)
    setUserToken(token);
  }

  const logout = async () => {
    await SecureStore.deleteItemAsync(STORED_TOKEN_KEY);
  }

  return (
    <RootSiblingParent>
      <NavigationContainer ref={navigationRef}>
        <Drawer.Navigator initialRouteName="Profile">
          {
            userToken !== '' ? (
              <Stack.Group>
                <Stack.Screen name="Available Loans" component={AvailableLoans} />
                <Stack.Screen name="Home" component={HomeScreen} getData={getData} ></Stack.Screen>
                <Stack.Screen name="Profile">
                  {() => <ProfileScreen getData={getData} userToken={userToken} />}
                </Stack.Screen>
                <Stack.Screen name="Credits" component={CreditsScreen} />
                <Stack.Screen name="Ships" component={ShipsScreen} />
                {/* <Stack.Screen name="Logout" component={() => <LogoutScreen onLogout={logout} setUserToken={setUserToken} />} /> */}
                <Stack.Screen name="Logout">
                  {() => (
                    <View style={styles.container}>
                      <Pressable onPress={logout}>
                        <Text>Logout</Text>
                      </Pressable>
                    </View>
                  )}
                </Stack.Screen>
              </Stack.Group>
            ) : (
              <Stack.Group>
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="Login">
                  {() => <LoginScreen onLogin={storeUserToken} />}
                </Stack.Screen>
                <Stack.Screen name="Register">
                  {() => <RegisterScreen setUserToken={setUserToken} storeUserToken={storeUserToken} />}
                </Stack.Screen>
              </Stack.Group>
            )
          }
        </Drawer.Navigator>
      </NavigationContainer>
    </RootSiblingParent>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
