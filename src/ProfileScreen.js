import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { authentication } from '../firebaseConfig';
import { signOut } from "firebase/auth"
import useAuthentication from './useAuthentication';


/** Screen where the profile can be viewed. */
const ProfileScreen = ( {navigation} ) => {
  const { user } = useAuthentication();
  return (
    <View style={styles.container}>
      <Text>{user?.email}</Text>
      <Button
        title="Back"
        onPress={() => {navigation.navigate('Main')}}
      />
      <Button
        title="Async Demo"
        onPress={() => {navigation.navigate('AsyncDemo')}}
      />
      <Button title="Sign Out" onPress={() => signOut(authentication)} />
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

  export default ProfileScreen

  