import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

const CreatePScreen = ( {navigation} ) => {
    return (
      <View style={styles.container}>
        <Text>Create Profile Screen</Text>
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

  export default CreatePScreen