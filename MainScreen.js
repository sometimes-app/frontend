import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

const MainScreen = ( {navigation} ) => {
    return (
      <View style={styles.container}>
        <Text>Main Screen</Text>
        <Button
          title="Get Motivated"
          onPress={() => {}}
        />
        <Button
          title="See Previous Messages"
          onPress={() => {}}
        />
        <Button
          title="Help a friend"
          onPress={() => {navigation.navigate('Friends')}}
        />
        <Button
          title="Profile"
          onPress={() => {navigation.navigate('Profile')}}
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