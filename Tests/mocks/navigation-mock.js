import { jest } from '@jest/globals'

export const mockNavigation = {
  navigate: jest.fn(function (navigate) {
    return navigate
  }),
}
