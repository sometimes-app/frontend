import { createContext } from 'react'
import { useContext } from 'react'
// eslint-disable-next-line no-unused-vars
import { UserInfoService } from './services/userInfoService'

export const UserInfoServiceContext = createContext()

/**
 * Gets the current context user info service
 * @return {UserInfoService}
 */
export const GetUserInfoService = () => {
  return useContext(UserInfoServiceContext)
}
