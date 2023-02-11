import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainScreen from './src/MainScreen'
import LoginScreen from './src/LoginScreen'
import CreatePScreen from './src/CreatePScreen'
import CreateMScreen from './src/CreateMScreen'
import FriendsScreen from './src/FriendsScreen'
import ProfileScreen from './src/ProfileScreen'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='CreateP' component={CreatePScreen} />
        <Stack.Screen name='Main' component={MainScreen} />
        <Stack.Screen name='Friends' component={FriendsScreen} />
        <Stack.Screen name='CreateM' component={CreateMScreen} />
        <Stack.Screen name='Profile' component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}