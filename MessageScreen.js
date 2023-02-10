import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

const MessageScreen = ( {navigation} ) => {
    return (
      <View style={styles.container}>
        <Text>Message Screen</Text>
        <Button
          title="See Previous Messages"
          onPress={() => {}}
        />
        <Button
          title="Send Message"
          onPress={() => {navigation.navigate('Friends')}}
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

  export default MessageScreen