import React from 'react'
import { describe, beforeEach, it, jest, expect } from '@jest/globals'
import { render, screen, fireEvent } from '@testing-library/react-native'
import LoginScreen from '../../src/screens/LoginScreen'
import { mockNavigation } from '../mocks/navigation-mock'

describe('Login', () => {
  beforeEach(() => {
    render(<LoginScreen navigation={mockNavigation} />)
  })

  it('should press Forgot Password', () => {
    fireEvent.press(screen.getByText('Forgot password?'))
    expect(mockNavigation.navigate).toHaveBeenCalledWith('Forgot')
  })
})
