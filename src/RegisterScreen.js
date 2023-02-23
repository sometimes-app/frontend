import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { createUserWithEmailAndPassword } from "firebase/auth"
import { authentication } from './../firebaseConfig'

/** Register Screen */
const RegisterScreen = ( {navigation} ) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const RegisterUser = () => {
    createUserWithEmailAndPassword(authentication, email, password)
      .then(res=> {
        console.log(res)
      })
      .catch(err => {
          console.log(err)
      })
    }

    return (
      <View style={styles.container}>
        <Text>Register Screen</Text>
            <View>
                <TextInput placeholder='Email' value={email} onChangeText={setEmail}/>
                <TextInput placeholder='Password' value={password} secureTextEntry={true} onChangeText={setPassword}/>
                <TouchableOpacity onPress={()=>{RegisterUser()}}>
                    <Text>Sign Up</Text>
                </TouchableOpacity>
            </View>
            < StatusBar style='auto'/>
        <Button
          title="Back"
          onPress={() => {navigation.navigate('Login')}}
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

  export default RegisterScreen