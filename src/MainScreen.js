import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

const MainScreen = ( {navigation} ) => {
    return (
      <View style={styles.container}>
        <Text>Main Screen</Text>
        <Button
          title="Get Motivated"
          onPress={() => {navigation.navigate('Message')}}
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

  export default MainScreen