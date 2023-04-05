import { StatusBar } from 'expo-status-bar'
import { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import useAuthentication from '../utils/useAuthentication'
import {
  getStringValue,
  setStringValue,
  removeValue,
} from '../utils/asyncStorage'
import { FontAwesome5, EvilIcons } from '@expo/vector-icons'
import FadeInAnimatedText from '../components/FadeInAnimatedText'
import RevealMessage from '../components/RevealMessage'
import Header from '../components/Header'
import { globalStyle, colors } from '../styles/styles'
import { UserInfoService } from '../services/userInfoService'

/** Screen where messages are seen. */
const MainScreen = ({ navigation }) => {
  const [lastMessageTime, setLastMessageTime] = useState()
  useAuthentication()

  const userInfoService = new UserInfoService()

  useEffect(() => {
    getStringValue('lastMessageTime').then((res) => setLastMessageTime(res))
    userInfoService
      .GetUserInfo()
      .then((data) => {
        console.log(data.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  const handleMotivatedPress = async () => {
    const now = Math.floor(Date.now() / 1000)
    setStringValue('lastMessageTime', now)
    setLastMessageTime(now)
  }

  const handleReset = () => {
    removeValue('lastMessageTime').then(() => setLastMessageTime(1))
  }

  let buttonOrMessage
  const twentyFourHoursAgo = Math.floor(Date.now() / 1000) - 86400
  if (lastMessageTime === undefined || lastMessageTime > twentyFourHoursAgo) {
    buttonOrMessage = (
      <FadeInAnimatedText
        text={'You can do it'}
        byChar={true}
        duration={100}
        textSize={28}
      />
    )
  } else {
    buttonOrMessage = (
      <View style={styles.buttonContainer}>
        <RevealMessage
          handlePress={handleMotivatedPress}
          testID={'motivated'}
        />
      </View>
    )
  }

  return (
    <View style={globalStyle.background}>
      <View style={globalStyle.container}>
        <Header navigation={navigation} showProfile={true} />
        {buttonOrMessage}
        <Button
          title='reset'
          onPress={() => {
            handleReset()
          }}
        />
        <View style={styles.bottomButtons}>
          <TouchableOpacity
            style={styles.previous}
            onPress={() => {
              navigation.navigate('Archive')
            }}
          >
            <EvilIcons name='archive' color='black' size={32} />
            <Text style={styles.previousText}>Message Archive</Text>
          </TouchableOpacity>
          <TouchableOpacity
            accessibilityLabel='write-message'
            onPress={() => {
              navigation.navigate('Friends')
            }}
          >
            <FontAwesome5 name='pen-fancy' size={32} color='white' />
          </TouchableOpacity>
        </View>
        <StatusBar style='light' />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomButtons: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginBottom: 20,
  },
  previous: {
    backgroundColor: colors.primaryColor,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
  },
  previousText: {
    fontSize: 20,
    marginLeft: 10,
  },
})

export default MainScreen
