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

import { RootSiblingParent } from 'react-native-root-siblings';
const STORED_TOKEN_KEY = 'userTokenStored';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import { getAvailableLoans, getAvailableShipsToPurchase, getLoansToPay, getPlanetsNearby, getServerStatus, getTopPlayers, getUserProfileInfo, getUserShips, navigationRef } from './src/services/spaceTraders';

import SecureController from './src/secure/SecureController';

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
  const [availableLoans, setAvailableLoans] = useState({ loans: [{}] })

  useEffect(() => {
    const retrieveStoredTokenSecure = () => {
      const userTokenSaved = SecureController.getValueFor(STORED_TOKEN_KEY);
      setUserToken(userTokenSaved);
    }
    const retrieveUserProfileInfo = async () => {
      const userProfile = await getUserProfileInfo(userToken);
      console.log(userProfile)
      if (userProfile.user !== undefined) {
        setProfile(userProfile);
      }
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
      console.log('fasdfasdfasdfasdfasdfasdfasuiduhfua iogsd gfaouysdgfyu a sgdyufauy9sdg', userToken)
      setAvailableShipsToPurchase(await getAvailableShipsToPurchase(userToken))
    }
    const fetchAvailableLoans = async () => {
      setAvailableLoans(await getAvailableLoans(userToken))
      console.log('talaso saludos desde marte', availableLoans)
    }
    if (userToken) {
      // retrieveStoredToken();
      retrieveStoredTokenSecure();
    }
    retrieveUserProfileInfo();
    fetchServerStatus()
    fetchPlanetsNearby()
    fetchTopPlayers()
    fetchLoanToPay()
    fetchUserShips()
    fetchAvailableShipsToPurcase()
    fetchAvailableLoans()
  }, [userToken])

  // const storeUserToken = (token) => {
  //   saveData(STORED_TOKEN_KEY, token);
  //   setUserToken(token);
  // }

  const deleteUserToken = () => {
    setUserToken('');
    SecureController.deleteData(STORED_TOKEN_KEY);
  }

  const storeUserTokenSecure = (token) => {
    if (token) {
      SecureController.saveData(STORED_TOKEN_KEY, token);
      setUserToken(token);
    }
  }

  return (
    <RootSiblingParent>
      <NavigationContainer ref={navigationRef}>
        <Drawer.Navigator initialRouteName="Profile">
          {
            userToken !== '' ? (
              <Stack.Group>
                <Stack.Screen name="Available Loans">
                  {() => <AvailableLoans
                    availableLoans={availableLoans}
                    userToken={userToken}
                  />}
                </Stack.Screen>
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
                  {() => <ProfileScreen profile={profile} setProfile={setProfile} userToken={userToken} />}
                </Stack.Screen>
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
                      <Pressable onPress={() => deleteUserToken()}>
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
                  {() => <LoginScreen onLogin={storeUserTokenSecure} />}
                </Stack.Screen>
                <Stack.Screen name="Register">
                  {() => <RegisterScreen setUserToken={setUserToken} storeUserToken={storeUserTokenSecure} />}
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
