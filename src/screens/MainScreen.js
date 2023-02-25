import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, Dimensions } from 'react-native';
import useAuthentication from '../utils/useAuthentication';
import { getStringValue, setStringValue, removeValue } from '../utils/asyncStorage';
import { FontAwesome5, Feather } from '@expo/vector-icons';
import FadeInAnimatedText from '../components/FadeInAnimatedText';

/** Screen where messages are seen. */
const MainScreen = ( {navigation} ) => {
  const [lastMessageTime, setLastMessageTime] = useState()
  const { user } = useAuthentication();

  useEffect(()=>{
    getStringValue('lastMessageTime')
      .then(res => setLastMessageTime(res))
  },[])

  const handleMotivatedPress = () => {
    const now = Math.floor(Date.now() / 1000)
    setStringValue('lastMessageTime', now)
    setLastMessageTime(now)
  }

  const handleReset = () => {
    removeValue('lastMessageTime')
      .then(() => setLastMessageTime(1))
  }

  let buttonOrMessage;
  const twentyFourHoursAgo = Math.floor(Date.now() / 1000) - 86400
  if (lastMessageTime === undefined || (lastMessageTime > twentyFourHoursAgo)) {
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
        <TouchableOpacity onPress={handleMotivatedPress} style={styles.button}>
          <Text>Get Motivated!</Text>
        </TouchableOpacity>
      </View>

    )
  }

  return (
    <View style={styles.page}>
      <Feather style={styles.profile} name='user' size={32} color='white' onPress={() => {navigation.navigate('Profile')}} />
      {buttonOrMessage}
      <Button 
        title='reset'
        onPress={() => {handleReset()}}
      />
      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.previous} onPress={() => {}}>
          <Text style={styles.previousText}>
            See Previous Messages
          </Text>
        </TouchableOpacity>
        <FontAwesome5 name="pen-fancy" size={32} color="white" onPress={() => {navigation.navigate('Friends')}} />
      </View>
      {/* <Ionicons name='ios-arrow-back-outline' size={32} color="white" /> */}
      <StatusBar style="light" />
    </View>
  )
}

  const styles = StyleSheet.create({
    page: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'stretch',
    },
    profile: {
      alignSelf: 'flex-end',
      paddingRight: 25,
      paddingTop: 40

    },
    buttonContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    button: {
      backgroundColor: 'lemonchiffon',
      height: Dimensions.get('window').height * .2,
      width: Dimensions.get('window').height * .2,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 100
    },
    messageContainer: {
      flex: 1,
    },
    bottomButtons: {
      justifyContent: 'space-around',
      flexDirection: 'row'
    },
    previous: {
      marginBottom: 60,
      backgroundColor: 'lemonchiffon',
      padding: 10,
      borderRadius: 5,
      flex: 1,
      marginHorizontal: 20

    },
    previousText: {
      fontSize: 20
    }
  });

  export default MainScreen