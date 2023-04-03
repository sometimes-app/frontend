import { fireEvent, render, screen } from '@testing-library/react-native'
import { mockNavigation } from '../mocks/navigation-mock'
import ArchiveScreen from '../../src/screens/ArchiveScreen'
import { describe, beforeEach, it, expect } from '@jest/globals'
import { archive } from '../mockData'

describe('Archive Screen', () => {
  beforeEach(() => {
    render(<ArchiveScreen navigation={mockNavigation} />)
  })
  it('renders a message from the archive', () => {
    const message = archive[0].message
    const renderedMessage =
      screen.getByTestId('archive-message').props.children[0].props.children
    expect(renderedMessage).toBe(message)
  })

  it('renders the sender of the message', () => {
    const sender = archive[0].sender
    const renderedSender =
      screen.getByTestId('archive-message').props.children[1].props.children
    expect(renderedSender).toBe(`- ${sender}`)
  })
})
