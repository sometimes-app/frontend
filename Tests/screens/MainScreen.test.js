import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react-native'
import { mockNavigation } from '../mocks/navigation-mock'
import MainScreen from '../../src/screens/MainScreen'
import { describe, beforeEach, it, expect } from '@jest/globals'

describe('MainScreen', () => {
  beforeEach(async () => {
    await waitFor(() => {
      render(<MainScreen navigation={mockNavigation} />)
    })
  })
  it('should navigate to friends', () => {
    fireEvent.press(screen.getByLabelText('write-message'))
    expect(mockNavigation.navigate).toBeCalledWith('Friends')
  })
  it('should press archive', () => {
    fireEvent.press(screen.getByText('Message Archive'))
  })
  it('should press motivated', () => {
    fireEvent.press(screen.getByRole('button'))
    fireEvent.press(screen.getByTestId('motivated'))
  })
})
