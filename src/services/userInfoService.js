import { Configuration } from '../client/configuration'
// eslint-disable-next-line no-unused-vars
import { UserInfoApi, UserInfo } from '../client/api'
import { AppSettings } from '../appsettings'

export class UserInfoService {
  #configParams = {
    apiKey: undefined,
    username: undefined,
    password: undefined,
    accessToken: undefined,
    basePath: AppSettings().apiBasePath,
    baseOptions: undefined,
    formDataCtor: undefined,
  }

  #config = new Configuration(this.#configParams)
  #userInfoApi = new UserInfoApi(this.#config)

  /**
   * Gets a user's information
   * @param {string} userUuid
   */
  GetUserInfo(userUuid) {
    return this.#userInfoApi.userInfoGet(userUuid)
  }

  /**
   * Creates a new user
   * @param {UserInfo} userInfo
   */
  AddUserInfo(userInfo) {
    return this.#userInfoApi.userInfoPost(userInfo)
  }

  /**
   * Get's a users friends
   * @param {string} userUuid
   */
  GetUserFriends(userUuid) {
    return this.#userInfoApi.userInfoFriendsGet(userUuid)
  }

  /**
   * Add a new friend to a user
   * @param {string} userUuid user to add friend to
   * @param {string} friendUuid friend to add
   */
  AddFriend(userUuid, friendUuid) {
    return this.#userInfoApi.userInfoAddFriendPost(userUuid, friendUuid)
  }

  /**
   * Removes a friend from a user
   * @param {string} userUuid user to remove friend from
   * @param {string} friendUuid friend to remove
   */
  RemoveFriend(userUuid, friendUuid) {
    return this.#userInfoApi.userInfoRemoveFriendPost(userUuid, friendUuid)
  }
}
