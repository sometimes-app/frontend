import { mockNavigation } from './Tests/mocks/navigation-mock'

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
)
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')

jest.mock('firebase/auth', () => {
  return {
    signInWithEmailAndPassword: jest.fn().mockImplementation(() => {
      return Promise.resolve()
    }),
    createUserWithEmailAndPassword: jest.fn().mockImplementation(() => {
      return Promise.resolve()
    }),
    sendPasswordResetEmail: jest.fn().mockImplementation(() => {
      return Promise.resolve()
    }),
    onAuthStateChanged: jest.fn().mockImplementation(() => {
      return jest.fn()
    }),
    signOut: jest.fn().mockImplementation(() => {
      return jest.fn()
    }),
  }
})

jest.mock('../frontend/firebaseConfig', () => {
  return {
    authentication: {},
  }
})

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native')
  return {
    ...actualNav,
    useNavigation: () => mockNavigation,
  }
})
