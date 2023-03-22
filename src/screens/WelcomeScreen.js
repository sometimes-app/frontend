import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import FadeInAnimatedText from '../components/FadeInAnimatedText';
import { globalStyle } from '../styles/styles';

/** Screen to pick a profile or create one. */
const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={globalStyle.background}>
      <View style={globalStyle.container}>
        <FadeInAnimatedText
          text={'Sometimes'}
          byChar={false}
          duration={1000}
          textSize={32}
        ></FadeInAnimatedText>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('Register');
            }}
          >
            <Text>Create Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('Login');
            }}
          >
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="light" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 30,
  },
  button: {
    display: 'flex',
    padding: 10,
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 15,
    minWidth: 150,
    alignItems: 'center',
  },
});

export default WelcomeScreen;
