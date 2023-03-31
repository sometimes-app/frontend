import { fireEvent, render, screen } from '@testing-library/react-native'
import { mockNavigation } from '../mocks/navigation-mock'
import FriendsScreen from '../../src/screens/FriendsScreen'
import { describe, beforeEach, it, expect } from '@jest/globals'

describe('CreateMScreen', () => {
  beforeEach(() => {
    render(<FriendsScreen navigation={mockNavigation} />)
  })
  it('should search friends', () => {
    const beforeSearch = screen.queryAllByLabelText('friend-tile')
    fireEvent.changeText(screen.getByPlaceholderText('Search friends'), 'john')
    const afterSearch = screen.queryAllByLabelText('friend-tile')
    expect(afterSearch.length).toBeLessThan(beforeSearch.length)
  })
  it('should navigate to CreateM screen on friend press', () => {
    fireEvent.press(screen.queryAllByLabelText('friend-tile')[0])
    expect(mockNavigation.navigate).toBeCalledTimes(1)
  })
})
