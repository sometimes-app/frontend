import React from 'react'
import renderer from 'react-test-renderer'
import { describe, beforeEach, it, jest, expect } from '@jest/globals'
import { render, screen, fireEvent } from '@testing-library/react-native'
import App from '../App'
import LoginScreen from '../src/screens/LoginScreen'

// describe('<App />', () => {
//   jest.useFakeTimers('modern')

//   beforeEach(() => {
//     //jest.mock(Animated)
//   })

//   it('has 1 child', () => {
//     console.log('HERE')
//     const tree = renderer.create(<App />).toJSON()
//     expect(tree.children.length).toBe(1)
//   })
// })

describe('This should alway pass', () => {
  it('true === true', () => {
    expect(true).toBe(true)
  })
})

// describe('App', () => {
//   beforeEach(() => {
//     render(<App />)
//   })
//   it('should press Login', () => {
//     fireEvent.press(screen.getByText('Login'))
//   })
//   it('should press Create Profile', () => {
//     fireEvent.press(screen.getByText('Create Profile'))
//   })
// })

// describe('Login', () => {
//   beforeEach(() => {
//     render(<App />)
//     fireEvent.press(screen.getByText('Login'))
//   })
//   it('should enter an email', () => {
//     fireEvent.changeText(screen.getByPlaceholderText('Email'), 'Hello@a.com')
//   })
//   it('should navigate to Forgot screen', () => {
//     fireEvent.press(screen.getByText('Forgot password?'))
//   })
// })

// import MainScreen from '../src/screens/MainScreen'

// describe(() => {
//   beforeEach(() => {
//     jest.mock()
//   })
// })
