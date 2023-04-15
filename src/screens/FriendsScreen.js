import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Dimensions,
  TouchableOpacity,
  Keyboard,
  ScrollView,
} from 'react-native'
import { useState } from 'react'
import { friendRequests, friends } from '../mockData'
import { globalStyle, colors } from '../styles/styles'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import Header from '../components/Header'
import { useNavigation } from '@react-navigation/native'

import PropTypes from 'prop-types'

const FriendsScreen = () => {
  const navigation = useNavigation()

  const [searchQuery, setSearchQuery] = useState('')
  const handleSearch = (text) => {
    setSearchQuery(text)
  }
  const filter = (list) => {
    return list.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }
  const filteredFriends = friends.filter((friend) =>
    friend.name.toLowerCase().includes(searchQuery.toLowerCase())
  )
  const filteredRequests = friendRequests.filter((request) =>
    request.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const RightActions = ({ onPress }) => {
    return (
      <TouchableOpacity onPress={onPress} style={styles.rightAction}>
        <View>
          <Text style={{ color: colors.accentColor, fontWeight: '500' }}>
            Remove
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  RightActions.propTypes = {
    onPress: PropTypes.func.isRequired,
  }

  return (
    <View style={globalStyle.background}>
      <View style={globalStyle.container}>
        <Header showBack={true} navigation={navigation} showProfile={true} />
        <TextInput
          style={styles.searchBar}
          placeholder='Search or add friends'
          value={searchQuery}
          onChangeText={handleSearch}
          placeholderTextColor='rgba(255,255,255,.8)'
        />
        <ScrollView
          onScroll={() => {
            Keyboard.dismiss()
          }}
          keyboardShouldPersistTaps='handled'
        >
          {filteredRequests.length > 0 && (
            <View style={{ marginTop: 15, flexDirection: 'row' }}>
              <Text style={{ color: colors.accentColor, marginRight: 2 }}>
                REQUESTS
              </Text>
              {!searchQuery && (
                <Text style={{ color: colors.accentColor }}>
                  ({filteredRequests.length})
                </Text>
              )}
            </View>
          )}
          {filteredRequests.map((item) => (
            <Swipeable
              renderRightActions={() => (
                <RightActions onPress={() => console.log('delete', item)} />
              )}
              key={item.id}
            >
              <View style={styles.friendTile}>
                <View style={styles.initialsContainer}>
                  <Text style={styles.initials}>
                    {item.nameFirst[0]}
                    {item.nameLast[0]}
                  </Text>
                </View>
                <View style={{ justifyContent: 'center', marginLeft: 8 }}>
                  <Text style={styles.friendName}>{item.name}</Text>
                  <Text style={styles.username}>{item.username}</Text>
                </View>
                <View
                  style={{
                    // backgroundColor: 'red',
                    flex: 1,
                    justifyContent: 'center',
                  }}
                >
                  <View
                    style={{
                      backgroundColor: colors.modalBackground,
                      padding: 8,
                      borderRadius: 20,
                      alignSelf: 'flex-end',
                      marginRight: 5,
                    }}
                  >
                    <Text style={{ color: colors.accentColor }}>Add</Text>
                  </View>
                </View>
              </View>
            </Swipeable>
          ))}
          {filteredFriends.length > 0 && (
            <View style={{ marginTop: 15, flexDirection: 'row' }}>
              <Text style={{ color: colors.accentColor, marginRight: 2 }}>
                MY FRIENDS
              </Text>
              {!searchQuery && (
                <Text style={{ color: colors.accentColor }}>
                  ({filteredFriends.length})
                </Text>
              )}
            </View>
          )}
          {filteredFriends.map((item) => (
            <Swipeable
              renderRightActions={() => (
                <RightActions onPress={() => console.log('delete', item)} />
              )}
              key={item.id}
              keyboardShouldPersistTaps='handled'
            >
              <TouchableHighlight
                style={styles.friendTile}
                onPress={() => {
                  navigation.navigate('CreateM', {
                    ReceiverId: item.id,
                    ReceiverName: item.name,
                  })
                }}
                underlayColor='rgb(50,50,50)'
                activeOpacity={0.1}
                accessibilityLabel={'friend-tile'}
              >
                <>
                  <View style={styles.initialsContainer}>
                    <Text style={styles.initials}>
                      {item.nameFirst[0]}
                      {item.nameLast[0]}
                    </Text>
                  </View>
                  <View style={{ justifyContent: 'center', marginLeft: 8 }}>
                    <Text style={styles.friendName}>{item.name}</Text>
                    <Text style={styles.username}>{item.username}</Text>
                  </View>
                </>
              </TouchableHighlight>
            </Swipeable>
          ))}
          {/* <FlatList
            data={filteredFriends}
            onScroll={() => {
              Keyboard.dismiss()
            }}
            keyboardShouldPersistTaps='handled'
            keyExtractor={(friend) => friend.id.toString()}
            renderItem={({ item }) => (
              <Swipeable
                renderRightActions={() => (
                  <RightActions onPress={() => console.log('delete', item)} />
                )}
              >
                <TouchableHighlight
                  style={styles.friendTile}
                  onPress={() => {
                    navigation.navigate('CreateM', {
                      ReceiverId: item.id,
                      ReceiverName: item.name,
                    })
                  }}
                  underlayColor='rgb(50,50,50)'
                  activeOpacity={0.1}
                  accessibilityLabel={'friend-tile'}
                >
                  <>
                    <View style={styles.initialsContainer}>
                      <Text style={styles.initials}>
                        {item.nameFirst[0]}
                        {item.nameLast[0]}
                      </Text>
                    </View>
                    <View style={{ justifyContent: 'center', marginLeft: 8 }}>
                      <Text style={styles.friendName}>{item.name}</Text>
                      <Text style={styles.username}>{item.username}</Text>
                    </View>
                  </>
                </TouchableHighlight>
              </Swipeable>
            )}
          /> */}
        </ScrollView>
        <StatusBar style='light' />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  searchBar: {
    height: 50,
    width: '100%',
    borderRadius: 10,
    paddingLeft: 20,
    marginVertical: 20,
    fontSize: 20,
    color: colors.accentColor,
    backgroundColor: 'rgba(255,255,255,0.15)',
    alignSelf: 'center',
  },
  friendName: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.accentColor,
  },
  friendTile: {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'flex-end',
    marginVertical: 10,
    backgroundColor: colors.backgroundColor,
  },
  initials: {
    fontSize: 24,
  },
  initialsContainer: {
    borderRadius: 50,
    backgroundColor: colors.primaryColor,
    height: Dimensions.get('window').height * 0.08,
    width: Dimensions.get('window').height * 0.08,
    alignItems: 'center',
    justifyContent: 'center',
  },
  username: {
    color: 'rgba(255, 255, 255, 0.75)',
    fontSize: 14,
    marginLeft: 2,
  },
  rightAction: {
    backgroundColor: '#c20000',
    justifyContent: 'center',
    marginVertical: 10,
    padding: 10,
  },
})

export default FriendsScreen
