import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import AvailableLoans from './src/components/availableLoans/AvailableLoansList';
import CreditsScreen from './src/screens/CreditsScreen';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import ShipsScreen from './src/screens/ShipsScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';

import * as SecureStore from 'expo-secure-store';
import { RootSiblingParent } from 'react-native-root-siblings';
const STORED_TOKEN_KEY = 'userTokenStored';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

// ASYNC STORAGE

import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigationRef, getUserProfileInfo, getServerStatus, getPlanetsNearby, getTopPlayers, getLoansToPay, getUserShips, getAvailableShipsToPurchase } from './src/services/spaceTraders';

const saveData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log(e);
  }
}

const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e)
  }
}

const Drawer = createDrawerNavigator();

export default function App() {

  const [userToken, setUserToken] = useState('');
  const [profile, setProfile] = useState({ user: { username: '', credits: '', shipCount: '', joinedAt: '' } })
  const [serverStatus, setServerStatus] = useState(false)
  const [planetsNearby, setPlanetsNearby] = useState({ locations: [{ name: '' }] })
  const [topPlayers, setTopPlayers] = useState({ netWorth: [{ rank: 0, username: '', credits: 0 }] })
  const [loanToPay, setLoanToPay] = useState({ loans: [{ status: '', repaymentAmount: 0 }] })
  const [userShips, setUserShips] = useState({ ships: [{}] })
  const [availableShipsToPurchase, setAvailableShipsToPurchase] = useState({ ships: [{}] })

  useEffect(() => {
    const retrieveStoredToken = async () => {
      const storedToken = await getData(STORED_TOKEN_KEY);
      setUserToken(storedToken);
    }
    const retrieveUserProfileInfo = async () => {
      const userProfile = await getUserProfileInfo(userToken);
      console.log(userProfile)
      setProfile(userProfile);
    }
    const fetchServerStatus = async () => {
      setServerStatus(await getServerStatus())
    }
    const fetchPlanetsNearby = async () => {
      setPlanetsNearby(await getPlanetsNearby(userToken))
    }
    const fetchTopPlayers = async () => {
      setTopPlayers(await getTopPlayers(userToken))
    }
    const fetchLoanToPay = async () => {
      console.log(loanToPay)
      setLoanToPay(await getLoansToPay(userToken))
    }
    const fetchUserShips = async () => {
      setUserShips(await getUserShips(userToken))
    }
    const fetchAvailableShipsToPurcase = async () => {
      setAvailableShipsToPurchase(await getAvailableShipsToPurchase(userToken))
    }
    if (userToken) {
      retrieveStoredToken();
    }
    retrieveUserProfileInfo();
    fetchServerStatus()
    fetchPlanetsNearby()
    fetchTopPlayers()
    fetchLoanToPay()
    fetchUserShips()
    fetchAvailableShipsToPurcase()
  }, [userToken])

  const storeUserToken = (token) => {
    saveData(STORED_TOKEN_KEY, token);
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
                <Stack.Screen name="Home" >
                  {() => <HomeScreen
                    profile={profile}
                    setProfile={setProfile}
                    serverStatus={serverStatus}
                    planetsNearby={planetsNearby}
                    setPlanetsNearby={setPlanetsNearby}
                    topPlayers={topPlayers}
                    setTopPlayers={setTopPlayers}
                    loanToPay={loanToPay}
                    setLoanToPay={setLoanToPay}
                  />}
                </Stack.Screen>
                <Stack.Screen name="Profile">
                  {() => <ProfileScreen profile={profile} setProfile={setProfile} getData={getData} userToken={userToken} />}
                </Stack.Screen>
                <Stack.Screen name="Credits" component={CreditsScreen} />
                <Stack.Screen name="Ships">
                  {() => <ShipsScreen
                    profile={profile}
                    userShips={userShips}
                    setUserShips={setUserShips}
                    availableShipsToPurchase={availableShipsToPurchase}
                    setAvailableShipsToPurchase={setAvailableShipsToPurchase}
                  />}
                </Stack.Screen>
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
