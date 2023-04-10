import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react-native'
import { mockNavigation } from '../mocks/navigation-mock'
import MainScreen from '../../src/screens/MainScreen'
import { describe, beforeEach, it, expect } from '@jest/globals'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getStringValue, setStringValue } from '../../src/utils/asyncStorage'

describe('MainScreen', () => {
  beforeEach(async () => {
    await waitFor(() => {
      render(<MainScreen navigation={mockNavigation} />)
    })
  })
  it('should navigate to friends', async () => {
    await waitFor(() => {
      fireEvent.press(screen.getByLabelText('write-message'))
    })
    expect(mockNavigation.navigate).toBeCalledWith('Friends')
  })

  describe('Tutorial', () => {
    beforeEach(async () => {
      AsyncStorage.clear()
      await waitFor(() => {
        render(<MainScreen navigation={mockNavigation} />)
      })
    })

    it('should show the tutorial the first time you start the app', async () => {
      await waitFor(() => {
        screen.getByText(/Welcome to Sometimes!/i)
      })
    })

    it('should NOT show the tutorial the first time you start the app', async () => {
      setStringValue('seenInstructions', 'true')
      let tutorialModal
      await waitFor(() => {
        render(<MainScreen navigation={mockNavigation} />)
      })
      await waitFor(() => {
        tutorialModal = screen.queryByText(/Welcome to Sometimes!/i)
      })
      expect(tutorialModal).toBeFalsy()
    })

    it('should show the second and third modal after clicking each modal', async () => {
      await waitFor(() => {
        screen.getByText(/Welcome to Sometimes!/i)
        fireEvent.press(screen.getByTestId('tutorialModal1Press'))
        screen.getByText(/Tap the sleeping bear to reveal/i)
        fireEvent.press(screen.getByTestId('tutorialModal2Press'))
        screen.getByText(/After 24 hours the bear goes/i)
        fireEvent.press(screen.getByTestId('tutorialModal3Press'))
      })
      expect(await getStringValue('seenInstructions')).toEqual('true')
    })
  })
})
