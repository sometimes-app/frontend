import { StatusBar } from 'expo-status-bar'
import { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Pressable,
  Modal,
} from 'react-native'
import useAuthentication from '../utils/useAuthentication'
import {
  getStringValue,
  setStringValue,
  removeValue,
} from '../utils/asyncStorage'
import { FontAwesome5, EvilIcons, MaterialIcons } from '@expo/vector-icons'
import FadeInAnimatedText from '../components/FadeInAnimatedText'
import Bear from '../components/Bear'
import Header from '../components/Header'
import { globalStyle, colors } from '../styles/styles'

/** Screen where messages are seen. */
const MainScreen = ({ navigation }) => {
  const [lastMessageTime, setLastMessageTime] = useState()
  const [seenInstructions, setSeenInstructions] = useState(true)
  const [showModalTwo, setShowModalTwo] = useState(false)
  const [showModalThree, setShowModalThree] = useState(false)
  useAuthentication()

  useEffect(() => {
    getStringValue('lastMessageTime').then((res) => setLastMessageTime(res))
    getStringValue('seenInstructions').then((res) => {
      if (res === null) setSeenInstructions(false)
    })
  }, [])

  const handleMotivatedPress = () => {
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
        <Header navigation={navigation} showProfile={true} />
        <Modal
          visible={!seenInstructions}
          animationType='fade'
          transparent={true}
        >
          <View style={modalStyles.flexView}>
            <View style={modalStyles.modalViewOne}>
              <Text>
                Welcome to Sometimes! A place to go when you need a wholesome
                pick me up.
              </Text>
              <Pressable
                onPress={() => {
                  setSeenInstructions(true)
                  setStringValue('seenInstructions', 'true')
                  setShowModalTwo(true)
                }}
              >
                <MaterialIcons
                  name='keyboard-arrow-right'
                  size={28}
                  color={colors.backgroundColor}
                  style={{ alignSelf: 'flex-end' }}
                />
              </Pressable>
            </View>
          </View>
        </Modal>
        <Modal visible={showModalTwo} animationType='fade' transparent={true}>
          <View style={modalStyles.flexView}>
            <View style={modalStyles.modalViewTwo}>
              <Text>
                Tap the sleeping bear to reveal some kind words from a friend or
                loved one.
              </Text>
              <Pressable
                onPress={() => {
                  setShowModalTwo(false)
                  setShowModalThree(true)
                }}
              >
                <MaterialIcons
                  name='keyboard-arrow-right'
                  size={28}
                  color={colors.backgroundColor}
                  style={{ alignSelf: 'flex-end' }}
                />
              </Pressable>
            </View>
          </View>
        </Modal>
        <Modal visible={showModalThree} animationType='fade' transparent={true}>
          <View style={modalStyles.flexView}>
            <View style={modalStyles.modalViewThree}>
              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: 'white',
                  borderRadius: 20,
                  padding: 15,
                }}
              >
                <Text>
                  After 24 hours the bear goes back to sleep and you can reveal
                  another message when you need it!
                </Text>
                <Pressable
                  onPress={() => {
                    setShowModalThree(false)
                  }}
                >
                  <MaterialIcons
                    name='close'
                    size={22}
                    color={colors.backgroundColor}
                    style={{ alignSelf: 'flex-end' }}
                  />
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
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

const modalStyles = StyleSheet.create({
  flexView: {
    flex: 1,
  },
  modalViewOne: {
    alignSelf: 'flex-end',
    top: '15%',
    right: '5%',
    maxWidth: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 2,
  },
  modalViewTwo: {
    top: '15%',
    left: '5%',
    maxWidth: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 2,
  },
  modalViewThree: {
    alignSelf: 'flex-end',
    top: '65%',
    right: '5%',
    maxWidth: '80%',
  },
})

export default MainScreen
