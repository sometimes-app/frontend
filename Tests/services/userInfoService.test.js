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

  let axiosRequest = {
    data: {
      uuid: 'boo',
      firstName: 'foo',
      lastName: 'bar',
      userName: 'jaime',
      profilePicUrl: '',
      friends: [],
    },
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    url: 'http://localhost:8080/UserInfo',
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

    axiosRequest = {
      data: JSON.stringify(requestUserInfo),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      url: 'http://localhost:8080/UserInfo',
    }

    // Act
    const result = await service.AddUserInfo(requestUserInfo)

    // Expect
    expect(result.data).toEqual(userInfo)
    expect(axios.request).toHaveBeenCalledWith(axiosRequest)
  })

  it('should make a request to get user friends', async () => {
    // Arrange
    const userInfo = { userInfo: '' }
    httpResponse.data = userInfo
    axios.request.mockReturnValueOnce(httpResponse)

    const uuid = 'fake user Id'

    axiosRequest = {
      headers: { uuid: uuid },
      method: 'GET',
      url: 'http://localhost:8080/UserInfo/Friends',
    }

    // Act
    const result = await service.GetUserFriends(uuid)

    // Expect
    expect(result.data).toEqual(userInfo)
    expect(axios.request).toHaveBeenCalledWith(axiosRequest)
  })

  it('should make a request to add a friend', async () => {
    // Arrange
    const userInfo = { userInfo: '' }
    httpResponse.data = userInfo
    axios.request.mockReturnValueOnce(httpResponse)

    const uuid = 'fake user Id'
    const fakeFriendUuid = 'fake user Ids'

    axiosRequest = {
      headers: { uuid: uuid, friendUuid: fakeFriendUuid },
      method: 'POST',
      url: 'http://localhost:8080/UserInfo/AddFriend',
    }

    // Act
    const result = await service.AddFriend(uuid, fakeFriendUuid)

    // Expect
    expect(result.data).toEqual(userInfo)
    expect(axios.request).toHaveBeenCalledWith(axiosRequest)
  })

  it('should make a request to remove a friend', async () => {
    // Arrange
    const userInfo = { userInfo: '' }
    httpResponse.data = userInfo
    axios.request.mockReturnValueOnce(httpResponse)

    const uuid = 'fake user Id'
    const fakeFriendUuid = 'fake user Ids'

    axiosRequest = {
      headers: { uuid: uuid, friendUuid: fakeFriendUuid },
      method: 'POST',
      url: 'http://localhost:8080/UserInfo/RemoveFriend',
    }

    // Act
    const result = await service.RemoveFriend(uuid, fakeFriendUuid)

    // Expect
    expect(result.data).toEqual(userInfo)
    expect(axios.request).toHaveBeenCalledWith(axiosRequest)
  })
})
