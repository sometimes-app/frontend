import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import FadeInAnimatedText from './FadeInAnimatedText';

/** Screen to pick a profile or create one. */
const LoginScreen = ( {navigation} ) => {
    return (
      <View style={styles.container}>
        <FadeInAnimatedText 
          text={'Sometimes'} 
          byChar={false} 
          duration={1000}
          textSize={32}
        >
        </FadeInAnimatedText>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('CreateP')}}>
          <Text>Create Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('Main')}}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style='light' />
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginBottom: 30
    },
    button: {
      display: 'flex',
      padding: 10,
      margin: 5,
      backgroundColor: 'white',
      borderRadius: 15,
      minWidth: 150,
      alignItems: 'center'
    }
  });

  export default LoginScreen