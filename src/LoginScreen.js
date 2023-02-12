import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import FadeInAnimatedText from './FadeInAnimatedText';

const LoginScreen = ( {navigation} ) => {
    return (
      <View style={styles.container}>
        <FadeInAnimatedText 
          text={'Sometimes'} 
          byChar={true} 
          duration={1000}
          textSize={32}
        >
        </FadeInAnimatedText>

        <Text>Login Screen</Text>
        <Button
          title="Create Profile"
          onPress={() => {navigation.navigate('CreateP')}}
        />
        <Button
          title="Login"
          onPress={() => {navigation.navigate('Main')}}
        />
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

  export default LoginScreen