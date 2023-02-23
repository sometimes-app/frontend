import { StatusBar } from 'expo-status-bar';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth"
import { authentication } from '../firebaseConfig'

const LoginScreen = ( {navigation} ) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const SignInUser = () => {
        signInWithEmailAndPassword(authentication, email, password)
        .then(res=> {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <>
            <View style={styles.container}>
                <TextInput placeholder='Email' value={email} onChangeText={setEmail}/>
                <TextInput placeholder='Password' value={password} secureTextEntry={true} onChangeText={setPassword}/>
                <TouchableOpacity onPress={()=>{SignInUser()}}>
                    <Text>Sign In</Text>
                </TouchableOpacity>
            </View>
            < StatusBar style='auto'/>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default LoginScreen