import { render, screen, fireEvent } from '@testing-library/react-native'
import { mockNavigation } from '../mocks/navigation-mock'
import Header from '../../src/components/Header'
import { describe, it, expect } from '@jest/globals'

describe('Header component', () => {
  beforeEach(() => {
    mockNavigation.goBack.mockClear()
    mockNavigation.navigate.mockClear()
  })

  it('should render without errors', () => {
    render(<Header />)
  })

  it('should not navigate back when back button is pressed and showBack is false', () => {
    render(<Header navigation={mockNavigation} />)
    const backButton = screen.getByTestId('back-button')
    fireEvent.press(backButton)
    expect(mockNavigation.goBack).not.toHaveBeenCalled()
  })

  it('should navigate back when back button is pressed', () => {
    render(<Header showBack navigation={mockNavigation} />)
    const backButton = screen.getByTestId('back-button')
    fireEvent.press(backButton)
    expect(mockNavigation.goBack).toHaveBeenCalledTimes(1)
  })

  it('should not navigate to profile when profile button is pressed and showProfile is false', () => {
    render(<Header navigation={mockNavigation} />)
    const profileButton = screen.getByTestId('profile-button')
    fireEvent.press(profileButton)
    expect(mockNavigation.navigate).not.toHaveBeenCalled()
  })

  it('should navigate to profile when profile button is pressed', () => {
    render(<Header showProfile navigation={mockNavigation} />)
    const profileButton = screen.getByTestId('profile-button')
    fireEvent.press(profileButton)
    expect(mockNavigation.navigate).toHaveBeenCalledWith('Profile')
  })
})
