import { describe, beforeEach, it, expect } from '@jest/globals'
import { render, screen, fireEvent } from '@testing-library/react-native'
import ProfileScreen from '../../src/screens/ProfileScreen'
import { mockNavigation } from '../mocks/navigation-mock'
import { signOut } from 'firebase/auth'

describe('Profile', () => {
  beforeEach(() => {
    render(<ProfileScreen />)
  })

  it('should sign out', () => {
    fireEvent.press(screen.getByText('Sign Out'))
    expect(signOut).toBeCalledTimes(1)
  })
})
