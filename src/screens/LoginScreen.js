import { StatusBar } from 'expo-status-bar'
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native'
import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { authentication } from '../../firebaseConfig'
import { globalStyle, colors } from '../styles/styles'
import Header from '../components/Header'

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const SignInUser = () => {
    signInWithEmailAndPassword(authentication, email, password).catch((err) => {
      console.log(err)
    })
  }

  return (
    <View style={globalStyle.background}>
      <View style={globalStyle.container}>
        <Header showBack={true} navigation={navigation} showProfile={false} />
        <Text style={styles.titleText}>Login</Text>
        <TextInput
          style={styles.email}
          placeholder='Email'
          value={email}
          onChangeText={setEmail}
          placeholderTextColor={colors.placeholderColor}
        />
        <TextInput
          style={styles.password}
          placeholder='Password'
          value={password}
          secureTextEntry={true}
          onChangeText={setPassword}
          placeholderTextColor={colors.placeholderColor}
        />
        <TouchableOpacity
          style={styles.signIn}
          onPress={() => {
            SignInUser()
          }}
        >
          <Text style={{ fontWeight: 'bold' }}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.forgot}
          onPress={() => {
            navigation.navigate('Forgot')
          }}
        >
          <Text style={styles.forgotText}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style='light' />
    </View>
  )
}

const styles = StyleSheet.create({
  titleText: {
    color: colors.accentColor,
    fontSize: 30,
    fontWeight: 'bold',
    marginHorizontal: '5%',
    marginTop: '5%',
  },
  email: {
    color: colors.accentColor,
    fontSize: 18,
    marginHorizontal: '5%',
    marginTop: '10%',
    paddingBottom: '2%',
    borderBottomColor: 'rgba(255,255,255,.25)',
    borderBottomWidth: 1,
  },
  password: {
    color: colors.accentColor,
    fontSize: 18,
    marginHorizontal: '5%',
    marginTop: '10%',
    paddingBottom: '2%',
    borderBottomColor: 'rgba(255,255,255,.25)',
    borderBottomWidth: 1,
  },
  signIn: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '10%',
    marginHorizontal: '5%',
    backgroundColor: colors.primaryColor,
    borderRadius: 25,
    padding: '4%',
  },
  forgot: {
    padding: '2%',
    marginTop: '3%',
    alignSelf: 'center',
  },
  forgotText: {
    color: colors.accentColor,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
})

export default LoginScreen
