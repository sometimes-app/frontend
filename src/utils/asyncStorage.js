import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getMyStringValue (key) {
  try {
      return await AsyncStorage.getItem(key)
  } catch(e) {
      console.log(e)
  }
}

export async function setStringValue (key, value) {
  const stringValue = JSON.stringify(value)
  try {
    await AsyncStorage.setItem(key, stringValue)
  } catch(e) {
    console.log(e)
  }
}

export async function getAllKeys () {
  let keys = []
  try {
    keys = await AsyncStorage.getAllKeys()
    console.log(keys)
    return await AsyncStorage.getAllKeys()
  } catch(e) {
    // read key error
  }
  
}

export async function removeValue (key) {
  try {
    await AsyncStorage.removeItem(key)
  } catch(e) {
    console.log(e)
  }
  console.log('Done')
}

export async function clearAll () {
  try {
    await AsyncStorage.clear()
  } catch(e) {
    console.log(e)
  }
}