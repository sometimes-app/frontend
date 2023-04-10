import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  getStringValue,
  setStringValue,
  removeValue,
  getAllKeys,
  clearAll,
} from '../../src/utils/asyncStorage'
import { describe, it, expect } from '@jest/globals'

describe('Async Storage', () => {
  it('should get string from async', async () => {
    await getStringValue('testKey')
    expect(AsyncStorage.getItem).toBeCalledWith('testKey')
  })
  it('should get string in async', async () => {
    await setStringValue('testKey', 5)
    expect(AsyncStorage.setItem).toBeCalledWith('testKey', '5')
  })
  it('should get all keys', async () => {
    await getAllKeys()
    expect(AsyncStorage.getAllKeys).toBeCalledTimes(1)
  })
  it('should remove a value', async () => {
    await removeValue('testKey')
    expect(AsyncStorage.removeItem).toBeCalledWith('testKey')
  })
  it('should clear all', async () => {
    await clearAll()
    expect(AsyncStorage.clear).toBeCalledTimes(1)
  })
})
