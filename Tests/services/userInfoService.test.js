import { describe, it, expect, beforeEach, afterEach } from '@jest/globals'
import { UserInfoService } from '../../src/services/userInfoService'
// eslint-disable-next-line no-unused-vars
import { UserInfo } from '../../src/client/api'
import axios from 'axios'

describe('Async Storage', () => {
  let service = new UserInfoService()
  let httpResponse = {
    data: '',
    status: 0,
    statusText: 'string',
    headers: {},
    config: {},
  }

  beforeEach(() => {
    service = new UserInfoService()
    httpResponse = {
      data: '',
      status: 0,
      statusText: 'string',
      headers: {},
      config: {},
    }
  })

  afterEach(() => {
    service = null
    axios.request.mockClear()
  })

  it('should make a request to get user info', async () => {
    // Arrange
    const userInfo = { userInfo: '' }
    httpResponse.data = userInfo
    axios.request.mockReturnValueOnce(httpResponse)

    // Act
    const result = await service.GetUserInfo('fakeUuid')

    // Expect
    expect(result.data).toEqual(userInfo)
  })

  it('should make a request to add user info', async () => {
    // Arrange
    const userInfo = { userInfo: '' }
    httpResponse.data = userInfo
    axios.request.mockReturnValueOnce(httpResponse)
    const requestUserInfo = {
      uuid: 'boo',
      firstName: 'foo',
      lastName: 'bar',
      userName: 'jaime',
      profilePicUrl: '',
      friends: [],
    }

    // Act
    const result = await service.AddUserInfo(requestUserInfo)

    // Expect
    expect(result.data).toEqual(userInfo)
    expect(axios.request).toHaveBeenCalled()
  })
})
