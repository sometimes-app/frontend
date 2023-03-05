import { StatusBar } from 'expo-status-bar';
import { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Keyboard, KeyboardAvoidingView, TouchableOpacity, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { suggestedMessages } from '../mockData'
import Header from '../components/Header';

/** Create Message Screen. */
const CreateMScreen = ( { navigation, route} ) => {
  const { ReceiverId } = route.params
  const inputRef = useRef();
  const [message, setMessage] = useState('');
  useEffect(()=>{
    setTimeout(() => {
      inputRef.current?.focus()
    }, 550)
  }, [])
  const handleSend = () => {
    if (message.length === 0) {
      alert('You need to enter a message first')
    } else {
      navigation.navigate('Main')
      console.log(ReceiverId)
    }
  }
  const handleSuggestion = () => {
    console.log(suggestedMessages)
    const random = Math.floor(Math.random() * (suggestedMessages.length))
    setMessage(suggestedMessages[random])
  }
  return (
    <KeyboardAvoidingView behavior='padding' style={styles.background}>
      <Header navigation={navigation} showBack={true} showProfile={true}/>
      <Pressable style={styles.container} onPress={() => {Keyboard.dismiss()}}>
        <TextInput  
            onChange={setMessage}
            ref={inputRef}
            value={message}
            placeholder={'Type your message here'}
            style={styles.message}
            keyboardAppearance={'dark'}
            multiline={true} />
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.suggestion} onPress={handleSuggestion}>
            <Text style={{ fontSize: 20 }}>Suggestion</Text>
          </TouchableOpacity>
          <FontAwesome name='send' color={'white'} size={22} style={styles.send} onPress={handleSend}/>
        </View>
        
        {/* <Button
          title="Send"
          onPress={() => {navigation.navigate('Main')}}
        />
        <Button
          title="Back"
          onPress={() => {navigation.navigate('Friends')}}
        /> */}
      </Pressable>
      <StatusBar style="light" />
    </KeyboardAvoidingView>
  )
}

  const styles = StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: 'black',
    },
    container: {
      marginTop: 10,
      marginHorizontal: 10,
      marginBottom: 20,
      flex: 1
    },
    message: {
      fontSize: 24,
      color: 'white',
      borderColor: 'white',
      borderWidth: 2,
      borderRadius: 10,
      padding: 10,
      flex: 1
    },
    suggestion: {
      backgroundColor: 'lemonchiffon',
      padding: 10,
      margin: 10,
      borderRadius: 5,
    },
    buttons: {
      flexDirection: 'row',
      // backgroundColor: 'blue',
      justifyContent: 'space-between',
    },
    send: {
      alignSelf: 'center',
      marginRight: 10
    }
  });

  export default CreateMScreen