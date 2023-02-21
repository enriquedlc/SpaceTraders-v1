import { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import CreditsScreen from './screens/CreditsScreen';
import ShipsScreen from './screens/ShipsScreen'
import LoginScreen from './screens/LoginScreen'
import LogoutScreen from './screens/LogoutScreen'
import AvailableLoans from './screens/components/availableLoans/AvailableLoansList';
import InitialScreen from './screens/InitialScreen';

import { RootSiblingParent } from 'react-native-root-siblings';
import * as SecureStore from 'expo-secure-store';
const STORED_TOKEN_KEY = 'userToken';

async function save(key, value) {
  await SecureStore.setItemAsync(key, value);
}

async function getValueFor(key) {
  const result = await SecureStore.getItemAsync(key);
  if (result) {
    console.log("🔐 Here's your value 🔐 \n" + result);
    return result;
  } else {
    console.log('No values stored under that key.');
    return '';
  }
}

const Drawer = createDrawerNavigator();

export default function App() {

  const [userToken, setUserToken] = useState('');

  useEffect(() => {
    const retrieveStoredToken = async () => {
      const storedToken = await getValueFor('userToken');
      setUserToken(storedToken);
    }
    retrieveStoredToken();
  }, [])

  const storeUserToken = (token) => {
    setUserToken(token);
    save(STORED_TOKEN_KEY, token);
  }

  const logout = async () => {
    setUserToken('');
    await SecureStore.deleteItemAsync(STORED_TOKEN_KEY);
  }

  return (
    <RootSiblingParent>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='Initial' style={styles.container}>
          {
            userToken === '' ?
              <>
                <Drawer.Screen name='Initial' component={InitialScreen}></Drawer.Screen>
              </> :
              <>
                <Drawer.Screen name='Login' component={() => <LoginScreen onLogin={storeUserToken} />} />
                <Drawer.Screen name='Register' component={RegisterScreen}></Drawer.Screen>
                <Drawer.Screen name='Home' component={HomeScreen}></Drawer.Screen>
                <Drawer.Screen name='Profile' component={ProfileScreen}></Drawer.Screen>
                <Drawer.Screen name='Credits' component={CreditsScreen}></Drawer.Screen>
                <Drawer.Screen name='Available Loans' component={AvailableLoans}></Drawer.Screen>
                <Drawer.Screen name='Ships' component={ShipsScreen}></Drawer.Screen>
                <Drawer.Screen name='Logout' component={() => <LogoutScreen onLogout={logout} />} />
              </>
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
