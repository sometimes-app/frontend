import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { authentication } from '../../firebaseConfig'
import { colors, globalStyle } from '../styles/styles'
import Header from '../components/Header'

/** Register Screen */
const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const RegisterUser = () => {
    createUserWithEmailAndPassword(authentication, email, password).catch(
      (err) => {
        console.log(err)
      }
    )
  }

  return (
    <View style={globalStyle.background}>
      <View style={globalStyle.container}>
        <Header showBack={true} navigation={navigation} showProfile={false} />
        <Text style={styles.titleText}>Create an account</Text>
        <TextInput
          style={styles.email}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="gray"
        />
        <TextInput
          style={styles.password}
          placeholder="Password"
          value={password}
          secureTextEntry={true}
          onChangeText={setPassword}
          placeholderTextColor="gray"
        />
        <TouchableOpacity
          style={styles.signUp}
          onPress={() => {
            RegisterUser()
          }}
        >
          <Text style={{ fontWeight: 'bold' }}>Sign Up</Text>
        </TouchableOpacity>
        <StatusBar style="light" />
      </View>
      <StatusBar style="light" />
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
  signUp: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '10%',
    marginHorizontal: '5%',
    backgroundColor: colors.primaryColor,
    borderRadius: 25,
    padding: '4%',
  },
})

export default RegisterScreen
