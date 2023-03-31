import { fireEvent, render, screen } from '@testing-library/react-native'
import { mockNavigation } from '../mocks/navigation-mock'
import MainScreen from '../../src/screens/MainScreen'
import { describe, beforeEach, it, expect } from '@jest/globals'

describe('MainScreen', () => {
  beforeEach(() => {
    render(<MainScreen navigation={mockNavigation} />)
  })
  it('should navigate to friends', () => {
    fireEvent.press(screen.getByLabelText('write-message'))
    expect(mockNavigation.navigate).toBeCalledWith('Friends')
  })
})
