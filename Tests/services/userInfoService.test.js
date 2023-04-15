import { describe, it, expect, beforeEach, afterEach } from '@jest/globals'
import { UserInfoService } from '../../src/services/userInfoService'
import mockAxios from '../../__mocks__/axios'
import { apiBasePath } from '../../ignore.json'

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
  })

  it('should make a request to get user info', async () => {
    // Arrange
    const userInfo = { userInfo: '' }
    httpResponse.data = userInfo
    mockAxios.mockResponseFor(apiBasePath + 'UserInfo', httpResponse)

    // Act
    const result = await service.GetUserInfo('fakeUuid')

    // Expect
    expect(result.data).toEqual(userInfo)
  })
})
