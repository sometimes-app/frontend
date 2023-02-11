import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainScreen from './MainScreen'
import LoginScreen from './LoginScreen'
import CreatePScreen from './CreatePScreen'
import CreateMScreen from './CreateMScreen'
import FriendsScreen from './FriendsScreen'
import ProfileScreen from './ProfileScreen'

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