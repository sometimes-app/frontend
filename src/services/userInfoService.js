import { Configuration } from '../client/configuration'
import { UserInfoApi } from '../client/api'

export class UserInfoService {
  constructor() {
    const configParams = {
      apiKey: undefined,
      username: undefined,
      password: undefined,
      accessToken: undefined,
      basePath: 'http://10.0.0.65:5229',
      baseOptions: undefined,
      formDataCtor: undefined,
    }

    const config = new Configuration(configParams)
    this.userInfoApi = new UserInfoApi(config)
  }

  /**
   * Gets a user's information
   * @param {string} user uuid
   */
  GetUserInfo(user) {
    return this.userInfoApi.userInfoGet(user)
  }

  /**
   * Gets a user's information
   * @param {UserInfo} userInfo user
   */
  AddUserInfo(userInfo) {
    return this.userInfoApi.userInfoPost(userInfo)
  }
}
