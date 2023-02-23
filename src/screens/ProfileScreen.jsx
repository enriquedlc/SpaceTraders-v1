import { Image, View, Text, StyleSheet, ImageBackground } from 'react-native'

const ProfileScreen = ({ profile }) => {

  return (
    <View style={styles.container}>
      <View style={styles.rowCharacteristic}>
        <ImageBackground source={require('../../assets/appIcons/profilePhotos/project.png')} style={styles.profileImage}></ImageBackground>
      </View>
      <View style={styles.statsContainer}>
        <View style={styles.rowCharacteristic}>
          <Text style={styles.descriptionUserText}>{profile.user.username}</Text>
        </View>
        <View style={styles.rowCharacteristic}>
          <Image source={require('../../assets/appIcons/descriptionIcons/coins.png')} style={styles.descriptionIcon}></Image>
          <Text style={styles.descriptionUserText}>Credits: {profile.user.credits}</Text>
        </View>
        <View style={styles.rowCharacteristic}>
          <Image source={require('../../assets/appIcons/descriptionIcons/link.png')} style={styles.descriptionIcon}></Image>
          <Text style={styles.descriptionUserText}>{profile.user.joinedAt.substring(0, 10)}</Text>
        </View>
        <View style={styles.rowCharacteristic}>
          <Image source={require('../../assets/appIcons/descriptionIcons/startup.png')} style={styles.descriptionIconBox}></Image>
          <Text style={styles.descriptionUserText}>Ship Count: {profile.user.shipCount}</Text>
        </View>
        <View style={styles.rowCharacteristic}>
          <Image source={require('../../assets/appIcons/descriptionIcons/building.png')} style={styles.descriptionIconBox}></Image>
          <Text style={styles.descriptionUserText}>Building Count: {profile.user.structureCount}</Text>
        </View>
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
  },
  statsContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
  },
  rowCharacteristic: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  descriptionIconBox: {
    width: 20,
    height: 20,
  },
  descriptionIcon: {
    width: 20,
    height: 20,
    marginTop: 5,
  },
})

export default ProfileScreen