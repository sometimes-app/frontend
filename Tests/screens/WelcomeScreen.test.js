import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react-native'
import { mockNavigation } from '../mocks/navigation-mock'
import WelcomeScreen from '../../src/screens/WelcomeScreen'
import { describe, beforeEach, it, expect } from '@jest/globals'

describe('Welcome Screen', () => {
  beforeEach(async () => {
    await waitFor(() => {
      render(<WelcomeScreen />)
    })
  })
  it('should press login', async () => {
    await waitFor(() => {
      fireEvent.press(screen.getByText('Login'))
    })
    expect(mockNavigation.navigate).toHaveBeenCalledWith('Login')
  })
  it('should press register', async () => {
    await waitFor(() => {
      fireEvent.press(screen.getByText('Create Profile'))
    })
    expect(mockNavigation.navigate).toHaveBeenCalledWith('Register')
  })
})
