import { fireEvent, render, screen } from '@testing-library/react-native'
import { mockNavigation } from '../mocks/navigation-mock'
import ArchiveScreen from '../../src/screens/ArchiveScreen'
import { describe, beforeEach, it, expect } from '@jest/globals'
import { archive } from '../../src/mockData'

describe('Archive Screen', () => {
  beforeEach(() => {
    render(<ArchiveScreen navigation={mockNavigation} />)
  })
  it('renders a message from the archive', () => {
    const message = archive[0].message
    const renderedMessage =
      screen.getAllByTestId('archive-message')[0].props.children[0].props
        .children
    expect(renderedMessage).toBe(message)
  })

  it('renders the sender of the message', () => {
    const sender = archive[0].sender
    const renderedSender =
      screen.getAllByTestId('archive-message')[0].props.children[1].props
        .children[1]
    expect(renderedSender).toBe(`${sender}`)
  })
})
