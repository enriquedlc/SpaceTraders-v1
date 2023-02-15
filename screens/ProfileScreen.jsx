import { useEffect, useState } from 'react'
import { Image, View, Text, StyleSheet, ImageBackground } from 'react-native'

import { getUserProfileInfo } from '../services/spaceTraders'

const ProfileScreen = () => {
  const [profile, setProfile] = useState({ user: { username: '', credits: '', shipCount: '', joinedAt: '' } })

  useEffect(() => {
    const fetchUserAccount = async () => {
      const userProfile = await getUserProfileInfo()
      setProfile(userProfile)
    }
    fetchUserAccount()
  }, [])

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', marginBottom: 7 }}>
        <ImageBackground source={require('../assets/appIcons/profilePhotos/project.png')} style={styles.profileImage}></ImageBackground>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.descriptionUserText}>{profile.user.username}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Image source={require('../assets/appIcons/descriptionIcons/coins.png')} style={{ width: 20, height: 20, marginLeft: 10, marginTop: 10 }}></Image>
        <Text style={styles.descriptionUserText}>Credits: {profile.user.credits}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Image source={require('../assets/appIcons/descriptionIcons/startup.png')} style={{ width: 20, height: 20, marginTop: 10 }}></Image>
        <Text style={styles.descriptionUserText}>Ship Count: {profile.user.shipCount}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Image source={require('../assets/appIcons/descriptionIcons/link.png')} style={{ width: 20, height: 20, marginTop: 10 }}></Image>
        <Text style={styles.descriptionUserText}>{profile.user.joinedAt.substring(0, 10)}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  descriptionUserText: {
    padding: 7,
    fontSize: 15,
    fontWeight: 'bold',
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 50,
    backgroundColor: 'lightgrey',
  }
})

export default ProfileScreen