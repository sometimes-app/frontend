import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';
import { authentication } from '../firebaseConfig';
import useAuthentication from './useAuthentication';
import { signOut } from "firebase/auth"
import { getMyStringValue, setStringValue, getAllKeys, removeValue } from './utils/asyncStorage';

/** Screen where messages are seen. */
const MainScreen = ( {navigation} ) => {
  const [lastMessageTime, setLastMessageTime] = useState()
  const { user } = useAuthentication();

  useEffect(()=>{
    getMyStringValue('lastMessageTime')
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
  if (lastMessageTime === undefined || (lastMessageTime > Math.floor(Date.now() / 1000) - 86400)) {
    buttonOrMessage = (
      <Text>You can do it!</Text>
    )
  } else {
    buttonOrMessage = (
      <TouchableOpacity onPress={handleMotivatedPress}>
        <Text>Get Motivated!</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <Text>Main Screen</Text>
      <Text>Welcome {user?.email}!</Text>
      {buttonOrMessage}
      <Button 
        title='reset'
        onPress={() => {handleReset()}}
      />
      <Button
        title="See Previous Messages"
        onPress={() => {}}
      />
      <Button
        title="Help a friend"
        onPress={() => {navigation.navigate('Friends')}}
      />
      <Button
        title="Profile"
        onPress={() => {navigation.navigate('Profile')}}
      />
      <Button title="Sign Out" style={styles.button} onPress={() => signOut(authentication)} />
      <StatusBar style="auto" />
    </View>
  )
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  export default MainScreen



  const RegisterUser = () => {
    createUserWithEmailAndPassword(authentication, email, password)
      .then(res=> {
        console.log(res)
      })
      .catch(err => {
          console.log(err)
      })
    }

  