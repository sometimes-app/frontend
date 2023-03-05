import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

/** Screen to pick a friend to send a message to. */
const FriendsScreen = ( {navigation} ) => {
    return (
      <View style={styles.container}>
        <Text>Friends Screen</Text>
        <Button
          title="Pick Friend"
          onPress={() => {navigation.navigate('CreateM')}}
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

  export default FriendsScreen