import React from 'react'
import renderer from 'react-test-renderer'
import { describe, beforeEach, it, jest } from '@jest/globals'

import App from '../App'

describe('<App />', () => {
  jest.useFakeTimers('modern')

  beforeEach(() => {
    //jest.mock(Animated)
  })

  it('has 1 child', () => {
    console.log('HERE')
    const tree = renderer.create(<App />).toJSON()
    expect(tree.children.length).toBe(1)
  })
})

// import MainScreen from '../src/screens/MainScreen'

// describe(() => {
//   beforeEach(() => {
//     jest.mock()
//   })
// })
