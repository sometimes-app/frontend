import { fireEvent, render, screen } from '@testing-library/react-native'
import { mockNavigation } from '../mocks/navigation-mock'
import ForgotScreen from '../../src/screens/ForgotPScreen'
import { describe, beforeEach, it, expect } from '@jest/globals'
import { sendPasswordResetEmail } from 'firebase/auth'

describe('CreateMScreen', () => {
  beforeEach(() => {
    render(<ForgotScreen navigation={mockNavigation} />)
  })
  it('should press reset', () => {
    fireEvent.press(screen.getByText('Reset'))
    expect(sendPasswordResetEmail).toBeCalledTimes(1)
  })
})
