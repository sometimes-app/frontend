import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

const ProfileScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Profile Screen</Text>
        <Button
          title="Get Motivated"
          onPress={() => {}}
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

  export default ProfileScreen