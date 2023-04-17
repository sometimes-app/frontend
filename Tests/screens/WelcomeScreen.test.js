import { fireEvent, render, screen } from '@testing-library/react-native'
import { mockNavigation } from '../mocks/navigation-mock'
import WelcomeScreen from '../../src/screens/WelcomeScreen'
import { describe, beforeEach, it, expect, jest } from '@jest/globals'

describe('Welcome Screen', () => {
  beforeEach(() => {
    render(<WelcomeScreen />)
  })
  it('should press login', () => {
    fireEvent.press(screen.getByText('Login'))
    expect(mockNavigation.navigate).toHaveBeenCalledWith('Login')
  })
  it('should press register', () => {
    fireEvent.press(screen.getByText('Create Profile'))
    expect(mockNavigation.navigate).toHaveBeenCalledWith('Register')
  })
})
