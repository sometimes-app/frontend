import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { UserInfoService } from '../services/userInfoService'
import { UserInfoServiceContext } from '../contexts'
import MainScreen from '../screens/MainScreen'
import RegisterScreen from '../screens/RegisterScreen'
import CreateMScreen from '../screens/CreateMScreen'
import FriendsScreen from '../screens/FriendsScreen'
import ProfileScreen from '../screens/ProfileScreen'
import LoginScreen from '../screens/LoginScreen'
import WelcomeScreen from '../screens/WelcomeScreen'
import ForgotScreen from '../screens/ForgotPScreen'
import useAuthentication from '../utils/useAuthentication'
import AsyncDemoScreen from '../debugScreens/AsyncDemoScreen'
import ArchiveScreen from '../screens/ArchiveScreen'
import 'react-native-url-polyfill/auto'
// Turn on to hide warnings when creating demos
// import { LogBox } from 'react-native'
// LogBox.ignoreAllLogs() //Ignore all log notifications

const Stack = createNativeStackNavigator()

const Navigation = () => {
  const { user } = useAuthentication()
  const userInfoService = new UserInfoService()

  return (
    <UserInfoServiceContext.Provider value={userInfoService}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          {user ? (
            <>
              <Stack.Screen name='Main' component={MainScreen} />
              <Stack.Screen name='Friends' component={FriendsScreen} />
              <Stack.Screen name='CreateM' component={CreateMScreen} />
              <Stack.Screen name='Profile' component={ProfileScreen} />
              <Stack.Screen name='AsyncDemo' component={AsyncDemoScreen} />
              <Stack.Screen name='Archive' component={ArchiveScreen} />
            </>
          ) : (
            <>
              <Stack.Screen name='Welcome' component={WelcomeScreen} />
              <Stack.Screen name='Login' component={LoginScreen} />
              <Stack.Screen name='Register' component={RegisterScreen} />
              <Stack.Screen name='Forgot' component={ForgotScreen} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </UserInfoServiceContext.Provider>
  )
}

export default Navigation
