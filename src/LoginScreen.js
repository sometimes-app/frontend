import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import AnimatedText from './AnimatedText';

const LoginScreen = ( {navigation} ) => {
    return (
      <View style={styles.container}>
        <AnimatedText text={'Sometimes'}></AnimatedText>

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