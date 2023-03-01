import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { useState } from 'react';
import Logo from '../components/Logo'


const FriendsScreen = ( {navigation} ) => {
  const [searchQuery, setSearchQuery] = useState('');
  const friends = [
    { id: 1, nameLast: 'Doe', nameFirst: 'John', name: 'John Doe', username: 'john321' },
    { id: 2, nameLast: 'Smith', nameFirst: 'Jane', name: 'Jane Smith', username: 'MissSmith' },
    { id: 3, nameLast: 'Wilson', nameFirst: 'Bob', name: 'Bob Wilson', username: 'WetWilly' },
    { id: 4, nameLast: 'Doe', nameFirst: 'John', name: 'John Doe', username: 'john321' },
    { id: 5, nameLast: 'Smith', nameFirst: 'Jane', name: 'Jane Smith', username: 'MissSmith' },
    { id: 6, nameLast: 'Wilson', nameFirst: 'Bob', name: 'Bob Wilson', username: 'WetWilly' },
    { id: 7, nameLast: 'Doe', nameFirst: 'John', name: 'John Doe', username: 'john321' },
    { id: 8, nameLast: 'Smith', nameFirst: 'Jane', name: 'Jane Smith', username: 'MissSmith' },
    { id: 9, nameLast: 'Wilson', nameFirst: 'Bob', name: 'Bob Wilson', username: 'WetWilly' },
    { id: 10, nameLast: 'Doe', nameFirst: 'John', name: 'John Doe', username: 'john321' },
    { id: 11, nameLast: 'Smith', nameFirst: 'Jane', name: 'Jane Smith', username: 'MissSmith' },
    { id: 12, nameLast: 'Wilson', nameFirst: 'Bob', name: 'Bob Wilson', username: 'WetWilly' },
  ];
  const handleSearch = (text) => {
    setSearchQuery(text);
  };
  const filteredFriends = friends.filter((friend) =>
    friend.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <View style={styles.container}>
        <Logo />
        <TextInput
          style={styles.searchBar}
          placeholder="Search friends"
          value={searchQuery}
          onChangeText={handleSearch}
          placeholderTextColor='rgba(255,255,255,.8)'
        />
        <Text style={{color: 'white', marginTop: 15}}>
          MY FRIENDS ({friends.length})
        </Text>
        <View style={styles.listContainer}>
          <FlatList
            data={filteredFriends}
            keyExtractor={(friend) => friend.id.toString()}
            renderItem={({ item }) => (
                <TouchableOpacity style={styles.friendTile} onPress={() => {navigation.navigate('CreateM')}}>
                  <View style={styles.initialsContainer}>
                    <Text style={styles.initials}>{item.nameFirst[0]}{item.nameLast[0]}</Text>
                  </View>
                  <View style={{justifyContent:'center', marginLeft: 8}}>
                    <Text style={styles.friendName}>{item.name}</Text>
                    <Text style={styles.username}>{item.username}</Text>
                  </View>
                </TouchableOpacity>
            )}
          />
        </View>
        <StatusBar style="light" />
      </View>
      
    </>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  searchBar: {
    height: 50,
    width: '90%',
    borderRadius: 10,
    paddingLeft: 20,
    marginVertical: 20,
    fontSize: 20,
    color: 'white',
    backgroundColor: 'rgba(255,255,255,0.15)',
    alignSelf:'center'
  },
  friendName: {
    // borderColor: 'blue',
    // borderWidth: 1,
    fontSize: 16,
    fontWeight: '600',
    color: 'white'
  },
  listContainer: {
  },
  friendTile: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'flex-start',
    // borderColor: 'red',
    // borderWidth: 1
  },
  initials: {
    fontSize: 24
  },
  initialsContainer: {
    borderRadius: 50,
    backgroundColor: 'lemonchiffon',
    height: Dimensions.get('window').height * .08,
    width: Dimensions.get('window').height * .08,
    alignItems: 'center',
    justifyContent: 'center',
    // borderColor: 'red',
    // borderWidth: 1
  },
  username: {
    color: 'rgba(255, 255, 255, 0.75)',
    fontSize: 14,
    marginLeft: 2
  } 
});

export default FriendsScreen