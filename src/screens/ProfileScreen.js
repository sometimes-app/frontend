import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Dimensions, TouchableOpacity } from 'react-native';
import { authentication } from '../../firebaseConfig';
import { signOut } from "firebase/auth"
import useAuthentication from '../utils/useAuthentication';
import Header from '../components/Header';


/** Screen where the profile can be viewed. */
const ProfileScreen = ( {navigation} ) => {
  const { user } = useAuthentication();
  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Header navigation={navigation} showBack={true}/>
        <View style={styles.profilePhoto}>
          <Text style={styles.initials}>
            JD
          </Text>
        </View>
        <Text style={styles.name}>
          John Doe
        </Text>
        <Text style={styles.username} >
          john321
        </Text>
        <TouchableOpacity style={styles.signOut}>
          <Text style={styles.signOutText}>
            Sign Out
          </Text>
        </TouchableOpacity>
      </View>
      {/* <Text>{user?.email}</Text>
      <Button
        title="Async Demo"
        onPress={() => {navigation.navigate('AsyncDemo')}}
      />
      <Button title="Sign Out" onPress={() => signOut(authentication)} /> */}
      <StatusBar style="light" />
    </View>
  )
  }

  const styles = StyleSheet.create({
    background: {
      backgroundColor: 'black',
      flex: 1,
    },
    container: {
      flex: 1,
      marginHorizontal: 10
    },
    profilePhoto: {
      backgroundColor: 'lemonchiffon',
      height: Dimensions.get('window').width * .4,
      width: Dimensions.get('window').width * .4,
      alignSelf: 'center',
      borderRadius: 100,
      marginTop: 40,
      justifyContent: 'center',
    },
    initials: {
      fontSize: 60,
      alignSelf: 'center'
    },
    name: {
      color: 'white',
      alignSelf: 'center',
      paddingTop: 20,
      fontSize: 30,
      fontWeight: 'bold'
    },
    username: {
      color: 'white',
      alignSelf: 'center',
      paddingTop: 5,
    },
    signOut: {
      backgroundColor: 'lemonchiffon',
      alignSelf: 'center',
      padding: 10,
      borderRadius: 5,
      margin: 10,
    },
    signOutText: {
      fontSize: 24,
    }
  });

  export default ProfileScreen

  