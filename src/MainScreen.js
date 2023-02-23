import { StatusBar } from 'expo-status-bar';
import { useState } from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { authentication } from '../firebaseConfig';
import { useAuthentication } from './useAuthentication';
import { signOut } from "firebase/auth"


/** Screen where messages are seen. */
const MainScreen = ( {navigation} ) => {
  const { user } = useAuthentication();
  return (
    <View style={styles.container}>
      <Text>Main Screen</Text>
      <Text>Welcome {user?.email}!</Text>
      <Button
        title="Get Motivated"
        onPress={() => {}}
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