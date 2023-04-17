import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native'
import { authentication } from '../../firebaseConfig'
import { signOut } from 'firebase/auth'
import useAuthentication from '../utils/useAuthentication'
import Header from '../components/Header'
import { globalStyle, colors } from '../styles/styles'
import { GetUserInfoService } from '../contexts'
import { useEffect, useState } from 'react'

/** Screen where the profile can be viewed. */
const ProfileScreen = () => {
  const { user } = useAuthentication()
  const userInfoService = GetUserInfoService()
  const [userInfo, setUserInfo] = useState()

  useEffect(() => {
    if (user) {
      userInfoService
        .GetUserInfo(user.uid)
        .then((res) => {
          setUserInfo(res.data)
        })
        .catch((err) => console.error(err))
    }
  }, [user])

  if (!userInfo) return null

  return (
    <View style={globalStyle.background}>
      <View style={globalStyle.container}>
        <Header showBack={true} />
        {userInfo.profilePicUrl ? (
          <Image
            source={{
              uri: userInfo.profilePicUrl,
            }}
            style={styles.profilePhoto}
          />
        ) : (
          <View style={styles.profilePhoto}>
            <Text style={styles.initials}>
              {userInfo.firstName[0]}
              {userInfo.lastName[0]}
            </Text>
          </View>
        )}
        <Text style={styles.name}>
          {userInfo.firstName} {userInfo.lastName}
        </Text>
        <Text style={styles.username}>{userInfo.userName}</Text>
        <TouchableOpacity
          style={styles.signOut}
          onPress={() => signOut(authentication)}
        >
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
      {/* <Text>{user?.email}</Text>
      <Button
        title="Async Demo"
        onPress={() => {navigation.navigate('AsyncDemo')}}
      /> */}
      <StatusBar style='light' />
    </View>
  )
}

const styles = StyleSheet.create({
  profilePhoto: {
    backgroundColor: colors.primaryColor,
    height: Dimensions.get('window').width * 0.4,
    width: Dimensions.get('window').width * 0.4,
    alignSelf: 'center',
    borderRadius: 100,
    marginTop: 40,
    justifyContent: 'center',
  },
  initials: {
    fontSize: 60,
    alignSelf: 'center',
  },
  name: {
    color: colors.accentColor,
    alignSelf: 'center',
    paddingTop: 20,
    fontSize: 30,
    fontWeight: 'bold',
  },
  username: {
    color: colors.accentColor,
    alignSelf: 'center',
    paddingTop: 5,
  },
  signOut: {
    backgroundColor: colors.primaryColor,
    alignSelf: 'center',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  signOutText: {
    fontSize: 24,
  },
})

export default ProfileScreen
