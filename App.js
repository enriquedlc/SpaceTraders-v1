import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import CreditsScreen from './screens/CreditsScreen';
import ShipsScreen from './screens/ShipsScreen'
import LoginScreen from './screens/LoginScreen'
import LogoutScreen from './screens/LogoutScreen'
import AvailableLoans from './screens/components/availableLoans/AvailableLoansList';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Available Loans' style={styles.container}>
        <Drawer.Screen name='Home' component={HomeScreen}></Drawer.Screen>
        <Drawer.Screen name='Profile' component={ProfileScreen}></Drawer.Screen>
        <Drawer.Screen name='Credits' component={CreditsScreen}></Drawer.Screen>
        <Drawer.Screen name='Available Loans' component={AvailableLoans}>

        </Drawer.Screen>
        <Drawer.Screen name='Ships' component={ShipsScreen}></Drawer.Screen>
        <Drawer.Screen name='Login' component={LoginScreen}></Drawer.Screen>
        <Drawer.Screen name='Logout' component={LogoutScreen}></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
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
