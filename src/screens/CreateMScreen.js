import { StatusBar } from 'expo-status-bar';
import { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { suggestedMessages } from '../mockData';
import Header from '../components/Header';
import { globalStyle, colors } from '../styles/styles';
import PropTypes from 'prop-types';

/**
 * @summary
 * @param {} param0
 * @returns
 */
const CreateMScreen = ({ navigation, route }) => {
  const { ReceiverId } = route.params;
  const inputRef = useRef();
  const [message, setMessage] = useState('');
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      inputRef.current?.focus();
    }, 550);
  }, []);

  Keyboard.addListener('keyboardDidHide', () => {
    setKeyboardVisible(false);
  });

  Keyboard.addListener('keyboardDidShow', () => {
    setKeyboardVisible(true);
  });

  const handleSend = () => {
    navigation.navigate('Main');
    console.log(ReceiverId);
    console.log(navigation);
  };

  const handleSuggestion = () => {
    console.log(suggestedMessages);
    const random = Math.floor(Math.random() * suggestedMessages.length);
    setMessage(suggestedMessages[random]);
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={globalStyle.background}>
      <View style={globalStyle.container}>
        <Header navigation={navigation} showBack={true} showProfile={true} />
        <Pressable
          style={
            keyboardVisible
              ? styles.messageContainerKeyboardVisible
              : styles.messageContainerKeyboardInvisible
          }
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <TextInput
            onChangeText={setMessage}
            ref={inputRef}
            value={message}
            placeholder={'Type your message here'}
            style={styles.message}
            keyboardAppearance={'dark'}
            multiline={true}
          />
          <View style={styles.buttons}>
            <TouchableOpacity
              style={styles.suggestion}
              onPress={handleSuggestion}
            >
              <Text style={{ fontSize: 20 }}>Suggestion</Text>
            </TouchableOpacity>
            <FontAwesome
              name="send"
              color={'white'}
              size={22}
              style={
                message.length != 0 ? styles.sendActive : styles.sendDisabled
              }
              onPress={handleSend}
              disabled={message.length == 0}
            />
          </View>
        </Pressable>
        <StatusBar style="light" />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  messageContainerKeyboardVisible: {
    marginTop: 10,
    flex: 1,
  },
  messageContainerKeyboardInvisible: {
    marginTop: 10,
    marginBottom: 20,
    flex: 1,
  },
  message: {
    fontSize: 24,
    color: colors.accentColor,
    borderColor: colors.accentColor,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    flex: 1,
  },
  suggestion: {
    backgroundColor: colors.primaryColor,
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sendActive: {
    alignSelf: 'center',
    marginRight: 10,
  },
  sendDisabled: {
    alignSelf: 'center',
    marginRight: 10,
    opacity: 0.2,
  },
});

CreateMScreen.propTypes = {
  route: PropTypes.object.isRequired,
};

export default CreateMScreen;
