import { fireEvent, render, screen } from '@testing-library/react-native'
import { mockNavigation } from '../mocks/navigation-mock'
import RegisterScreen from '../../src/screens/RegisterScreen'
import { describe, beforeEach, it, expect } from '@jest/globals'
import { createUserWithEmailAndPassword } from 'firebase/auth'

describe('Register Screen', () => {
  beforeEach(() => {
    render(<RegisterScreen />)
  })
  it('should press register', () => {
    fireEvent.press(screen.getByText('Sign Up'))
    expect(createUserWithEmailAndPassword).toHaveBeenCalledTimes(1)
  })

  it('should press the go back screen', () => {
    fireEvent.press(screen.getByTestId('back-button'))
    expect(mockNavigation.goBack).toHaveBeenCalledTimes(1)
  })
})
