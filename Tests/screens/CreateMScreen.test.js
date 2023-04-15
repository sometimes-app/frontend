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
    fireEvent.press(screen.getByText('Suggestion'))
    const messageBox = screen.getByPlaceholderText('Type your message here')
    expect(messageBox.value).not.toBe('')
  })
  it('should navigate to main on send', () => {
    fireEvent.changeText(
      screen.getByPlaceholderText('Type your message here'),
      'test'
    )
    fireEvent.press(screen.getByTestId('sendButton'))
    expect(mockNavigation.navigate).toBeCalledWith('Main')
  })
})
