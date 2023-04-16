import { fireEvent, render, screen } from '@testing-library/react-native'
import { mockNavigation } from '../mocks/navigation-mock'
import { mockRoute } from '../mocks/route-mock'
import CreateMScreen from '../../src/screens/CreateMScreen'
import { describe, beforeEach, it, expect } from '@jest/globals'

describe('CreateMScreen', () => {
  beforeEach(() => {
    render(<CreateMScreen route={mockRoute} />)
  })
  it('should press suggestion', () => {
    const messageBox = screen.getByPlaceholderText(
      'Everyone is rooting for you...'
    )
    fireEvent.press(screen.getByText('Suggestion'))
    expect(messageBox.value).not.toBe('')
  })
  it('should navigate to main on send', () => {
    fireEvent.changeText(
      screen.getByPlaceholderText('Everyone is rooting for you...'),
      'my custom message'
    )
    fireEvent.press(screen.getByTestId('sendButton'))
    expect(mockNavigation.navigate).toBeCalledWith('Main')
  })
})
