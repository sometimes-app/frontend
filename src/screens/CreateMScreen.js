import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

/** Create Message Screen. */
const CreateMScreen = ( {navigation} ) => {
    return (
      <View style={styles.container}>
        <Text>Create Message Screen</Text>
        <Button
          title="Send"
          onPress={() => {navigation.navigate('Main')}}
        />
        <Button
          title="Back"
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

  export default CreateMScreen