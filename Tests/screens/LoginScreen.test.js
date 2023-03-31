import React from 'react'
import { describe, beforeEach, it, expect, jest } from '@jest/globals'
import { render, screen, fireEvent } from '@testing-library/react-native'
import LoginScreen from '../../src/screens/LoginScreen'
import { mockNavigation } from '../mocks/navigation-mock'
import { signInWithEmailAndPassword } from 'firebase/auth'

describe('Login', () => {
  beforeEach(() => {
    render(<LoginScreen navigation={mockNavigation} />)
  })

  it('should press Forgot Password', () => {
    fireEvent.press(screen.getByText('Forgot password?'))
    expect(mockNavigation.navigate).toHaveBeenCalledWith('Forgot')
  })
  it('should run signInWithEmailAndPassword', () => {
    fireEvent.press(screen.getByText('Sign In'))
    expect(signInWithEmailAndPassword).toBeCalledTimes(1)
  })
})
