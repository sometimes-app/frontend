import { Configuration } from '../client/configuration'
import { UserInfoApi } from '../client/api'

export class UserInfoService {
  #userInfoApi
  constructor() {
    const configParams = {
      apiKey: undefined,
      username: undefined,
      password: undefined,
      accessToken: undefined,
      basePath: 'http://localhost:5228',
      baseOptions: undefined,
      formDataCtor: undefined,
    }

    const config = new Configuration(configParams)
    this.userInfoApi = new UserInfoApi(config)
  }

  async GetUserInfo() {
    const data = await this.userInfoApi.getUserInfo(
      'e31ed2e1-3214-4cfd-96ee-ecfe16167075'
    )
    console.log(data.data)
    return data.data
  }
}
