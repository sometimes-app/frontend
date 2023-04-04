import { fireEvent, render, screen } from '@testing-library/react-native'
import { mockNavigation } from '../mocks/navigation-mock'
import RegisterScreen from '../../src/screens/RegisterScreen'
import { describe, beforeEach, it, expect } from '@jest/globals'
import { createUserWithEmailAndPassword } from 'firebase/auth'

describe('Register Screen', () => {
  beforeEach(() => {
    render(<RegisterScreen navigation={mockNavigation} />)
  })
  it('should press register', () => {
    fireEvent.press(screen.getByText('Sign Up'))
    expect(createUserWithEmailAndPassword).toHaveBeenCalledTimes(1)
  })
})
