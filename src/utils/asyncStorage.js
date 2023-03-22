import AsyncStorage from '@react-native-async-storage/async-storage'

export async function getStringValue(key) {
  try {
    return await AsyncStorage.getItem(key)
  } catch (e) {
    console.log(e)
  }
}

export async function setStringValue(key, value) {
  const stringValue = JSON.stringify(value)
  try {
    await AsyncStorage.setItem(key, stringValue)
  } catch (e) {
    console.log(e)
  }
}

export async function getAllKeys() {
  try {
    return await AsyncStorage.getAllKeys()
  } catch (e) {
    console.log(e)
  }
}

export async function removeValue(key) {
  try {
    await AsyncStorage.removeItem(key)
  } catch (e) {
    console.log(e)
  }
}

export async function clearAll() {
  try {
    await AsyncStorage.clear()
  } catch (e) {
    console.log(e)
  }
}
