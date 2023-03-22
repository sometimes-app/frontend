import { StatusBar } from 'expo-status-bar';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import React, { useState } from 'react';
import { sendPasswordResetEmail } from "firebase/auth"
import { authentication } from '../../firebaseConfig'
import { globalStyle, colors } from '../styles/styles'; 
import Header from '../components/Header';

const ForgotScreen = ( {navigation} ) => {
  const [email, setEmail] = useState('')

  const SignInUser = () => {
    sendPasswordResetEmail(authentication, email)
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <View style={globalStyle.background}>
      <View style={globalStyle.container}>
        <Header showBack={true} navigation={navigation} showProfile={false}/>
        <Text style={styles.titleText}>Reset Password</Text>
        <TextInput style={styles.email} placeholder='Email' value={email} onChangeText={setEmail} placeholderTextColor='gray'/>
        <TouchableOpacity style={styles.signIn} onPress={()=>{SignInUser()}}>
            <Text style={{ fontWeight: 'bold' }}>Reset</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style='light'/>
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
    signIn: {
      display: 'flex',
      alignItems: 'center',
      marginTop: '10%',
      marginHorizontal: '5%',
      backgroundColor: colors.primaryColor,
      borderRadius: 25,
      padding: '4%'
    },
})

export default ForgotScreen