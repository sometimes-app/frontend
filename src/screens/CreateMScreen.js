import { StatusBar } from 'expo-status-bar'
import { useState, useEffect, useRef } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  TouchableOpacity,
  Pressable,
  FlatList,
  TouchableHighlight,
  Dimensions,
  Image,
} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { suggestedMessages } from '../mockData'
import Header from '../components/Header'
import { globalStyle, colors } from '../styles/styles'
import PropTypes from 'prop-types'
import { friends } from '../mockData'
import { useNavigation } from '@react-navigation/native'
import { GetUserInfoService } from '../contexts'
import useAuthentication from '../utils/useAuthentication'

/**
 * @summary
 * @param {} param0
 * @returns
 */
const CreateMScreen = ({ route }) => {
  const { ReceiverId, ReceiverName } = route.params
  const inputRef = useRef()
  const searchRef = useRef()
  const [message, setMessage] = useState('')
  const [search, setSearch] = useState('')
  const [receiver, setReceiver] = useState('')
  const [keyboardVisible, setKeyboardVisible] = useState(false)
  const [friends, setFriends] = useState([])

  const navigation = useNavigation()
  const userInfoService = GetUserInfoService()
  const { user } = useAuthentication()

  const filteredFriends = friends.filter((friend) => {
    if (friend.firstName.toLowerCase().includes(search.toLowerCase()))
      return true
    if (friend.lastName.toLowerCase().includes(search.toLowerCase()))
      return true
    if (friend.userName.toLowerCase().includes(search.toLowerCase()))
      return true
    if (friend.name.toLowerCase().includes(search.toLowerCase())) return true
  })

  const tempFormat = (friends) => {
    return friends.map((friend, index) => {
      friend.name = friend.firstName + ' ' + friend.lastName
      friend.id = index
      return friend
    })
  }

  useEffect(() => {
    if (ReceiverName) setReceiver(ReceiverName)
    setTimeout(() => {
      inputRef.current?.focus()
    }, 550)
  }, [])

  useEffect(() => {
    if (user) {
      userInfoService
        .GetUserFriends(user.uid)
        .then((res) => setFriends(tempFormat(res.data)))
    }
  }, [user])

  useEffect(() => {
    console.log(friends)
  }, [friends])

  Keyboard.addListener('keyboardDidHide', () => {
    setKeyboardVisible(false)
  })

  Keyboard.addListener('keyboardDidShow', () => {
    setKeyboardVisible(true)
  })

  const handleSend = () => {
    navigation.navigate('Main')
  }

  const handleSuggestion = () => {
    const random = Math.floor(Math.random() * suggestedMessages.length)
    setMessage(suggestedMessages[random])
  }
  const handlePress = (id, name) => {
    setReceiver(name)
    setSearch('')
  }

  return (
    <KeyboardAvoidingView behavior='padding' style={globalStyle.background}>
      <View style={globalStyle.container}>
        <Header showBack={true} showProfile={true} />
        <Pressable
          style={
            keyboardVisible
              ? styles.messageContainerKeyboardVisible
              : styles.messageContainerKeyboardInvisible
          }
          onPress={() => {
            Keyboard.dismiss()
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 10,
              marginVertical: 5,
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                color: colors.accentColor,
                fontSize: 14,
              }}
            >
              To:
            </Text>
            {!receiver ? (
              <TextInput
                onChangeText={setSearch}
                ref={searchRef}
                value={search}
                placeholder={'Search'}
                style={styles.to}
                keyboardAppearance={'dark'}
                placeholderTextColor={colors.placeholderColor}
              />
            ) : (
              <Pressable
                onPress={() => {
                  setReceiver('')
                  setTimeout(() => {
                    searchRef.current?.focus()
                  }, 550)
                }}
                style={styles.receiverContainer}
              >
                <Text style={styles.receiver}>{receiver}</Text>
              </Pressable>
            )}
          </View>
          {!search ? (
            <>
              <TextInput
                onChangeText={setMessage}
                ref={inputRef}
                value={message}
                placeholder={'Everyone is rooting for you...'}
                style={styles.message}
                keyboardAppearance={'dark'}
                multiline={true}
                placeholderTextColor={colors.placeholderColor}
              />
              <View style={styles.buttons}>
                <TouchableOpacity
                  style={styles.suggestion}
                  onPress={handleSuggestion}
                >
                  <Text style={{ fontSize: 20 }}>Suggestion</Text>
                </TouchableOpacity>
                <FontAwesome
                  name='send'
                  color={'white'}
                  size={22}
                  style={
                    message.length != 0
                      ? styles.sendActive
                      : styles.sendDisabled
                  }
                  onPress={handleSend}
                  disabled={message.length == 0}
                  testID='sendButton'
                />
              </View>
            </>
          ) : (
            <FlatList
              data={filteredFriends}
              // onScroll={() => {
              //   Keyboard.dismiss()
              // }}
              keyboardShouldPersistTaps='handled'
              keyExtractor={(friend) => friend.id.toString()}
              renderItem={({ item }) => (
                <TouchableHighlight
                  style={styles.friendTile}
                  onPress={() => {
                    handlePress(item.id, item.name)
                  }}
                  underlayColor='rgb(50,50,50)'
                  activeOpacity={0.1}
                  accessibilityLabel={'friend-tile'}
                >
                  <>
                    {item.profilePicUrl ? (
                      <Image
                        source={{
                          uri: item.profilePicUrl,
                        }}
                        style={styles.initialsContainer}
                      />
                    ) : (
                      <View style={styles.initialsContainer}>
                        <Text style={styles.initials}>
                          {item.firstName[0]}
                          {item.lastName[0]}
                        </Text>
                      </View>
                    )}
                    <View style={{ justifyContent: 'center', marginLeft: 8 }}>
                      <Text style={styles.friendName}>{item.name}</Text>
                      <Text style={styles.username}>{item.userName}</Text>
                    </View>
                  </>
                </TouchableHighlight>
              )}
            />
          )}
        </Pressable>
        <StatusBar style='light' />
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  messageContainerKeyboardVisible: {
    marginTop: 10,
    flex: 1,
  },
  messageContainerKeyboardInvisible: {
    marginTop: 10,
    marginBottom: 20,
    flex: 1,
  },
  to: {
    fontSize: 14,
    color: colors.accentColor,
    padding: 5,
    display: 'flex',
    flex: 1,
  },
  receiverContainer: {
    backgroundColor: colors.modalBackground,
    borderRadius: 5,
    padding: 5,
    marginLeft: 2,
  },
  receiver: { fontSize: 14, color: colors.accentColor },
  message: {
    fontSize: 24,
    color: colors.accentColor,
    flex: 1,
    margin: 10,
  },
  suggestion: {
    backgroundColor: colors.primaryColor,
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sendActive: {
    alignSelf: 'center',
    marginRight: 10,
  },
  sendDisabled: {
    alignSelf: 'center',
    marginRight: 10,
    opacity: 0.2,
  },
  friendName: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.accentColor,
  },
  listContainer: {},
  friendTile: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: 10,
    backgroundColor: colors.backgroundColor,
  },
  initials: {
    fontSize: 18,
  },
  initialsContainer: {
    borderRadius: 50,
    backgroundColor: colors.primaryColor,
    height: Dimensions.get('window').height * 0.05,
    width: Dimensions.get('window').height * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
  },
  username: {
    color: 'rgba(255, 255, 255, 0.75)',
    fontSize: 12,
    marginLeft: 2,
  },
})

CreateMScreen.propTypes = {
  route: PropTypes.object.isRequired,
}

export default CreateMScreen
