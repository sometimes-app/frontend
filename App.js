import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainScreen from './src/MainScreen'
import RegisterScreen from './src/RegisterScreen'
import CreateMScreen from './src/CreateMScreen'
import FriendsScreen from './src/FriendsScreen'
import ProfileScreen from './src/ProfileScreen'
import LoginScreen from './src/LoginScreen'
import WelcomeScreen from './src/WelcomeScreen'
import { useAuthentication } from './src/useAuthentication'

const Stack = createNativeStackNavigator();

export default function App() {
  const { user } = useAuthentication();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        {user ? (
          <>
            <Stack.Screen name='Main' component={MainScreen} />
            <Stack.Screen name='Friends' component={FriendsScreen} />
            <Stack.Screen name='CreateM' component={CreateMScreen} />
            <Stack.Screen name='Profile' component={ProfileScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name='Welcome' component={WelcomeScreen} />
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Register' component={RegisterScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}