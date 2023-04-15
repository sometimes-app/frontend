import { StatusBar } from 'expo-status-bar'
import { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import useAuthentication from '../utils/useAuthentication'
import {
  getStringValue,
  setStringValue,
  removeValue,
} from '../utils/asyncStorage'
import { EvilIcons, Octicons } from '@expo/vector-icons'
import FadeInAnimatedText from '../components/FadeInAnimatedText'
import Bear from '../components/Bear'
import Header from '../components/Header'
import { globalStyle, colors } from '../styles/styles'
import {
  TutorialStartModal,
  TutorialStep2Modal,
  TutorialStep3Modal,
} from '../components/TutorialModals'
import { GetUserInfoService } from '../contexts'
import { useNavigation } from '@react-navigation/native'

/** Screen where messages are seen. */
const MainScreen = () => {
  const [lastMessageTime, setLastMessageTime] = useState()
  const [seenInstructions, setSeenInstructions] = useState(true)
  const [showModalTwo, setShowModalTwo] = useState(false)
  const [showModalThree, setShowModalThree] = useState(false)
  useAuthentication()

  const navigation = useNavigation()
  const userInfoService = GetUserInfoService()

  useEffect(() => {
    getStringValue('lastMessageTime').then((res) => setLastMessageTime(res))
    getStringValue('seenInstructions').then((res) => {
      if (res === null) {
        setSeenInstructions(false)
      }
    })

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
        <Bear handlePress={handleMotivatedPress} />
      </View>
    )
  }

  return (
    <View style={globalStyle.background}>
      <View style={globalStyle.container}>
        <Header showProfile={true} showFriends={true} />
        <TutorialStartModal
          isVisible={!seenInstructions}
          handlePress={() => {
            setSeenInstructions(true)
            setStringValue('seenInstructions', 'true')
            setShowModalTwo(true)
          }}
        ></TutorialStartModal>
        <TutorialStep2Modal
          isVisible={showModalTwo}
          handlePress={() => {
            setShowModalTwo(false)
            setShowModalThree(true)
          }}
        ></TutorialStep2Modal>
        <TutorialStep3Modal
          isVisible={showModalThree}
          handlePress={() => {
            setShowModalThree(false)
          }}
        ></TutorialStep3Modal>
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
            <EvilIcons name='archive' color={colors.accentColor} size={32} />
            <Text style={styles.previousText}>Message Archive</Text>
          </TouchableOpacity>
          <TouchableOpacity
            accessibilityLabel='write-message'
            style={styles.newMessage}
            onPress={() => {
              navigation.navigate('CreateM', {
                ReceiverId: null,
                ReceiverName: null,
              })
            }}
          >
            <Octicons name='pencil' size={24} color='white' />
            <Text style={styles.newMessageText}>Write Message</Text>
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
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 40,
    marginHorizontal: 20,
  },
  previous: {
    display: 'flex',
    alignItems: 'center',
  },
  previousText: {
    color: colors.accentColor,
  },
  newMessage: { display: 'flex', alignItems: 'center' },
  newMessageText: { color: colors.accentColor },
})

export default MainScreen
