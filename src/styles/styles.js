import { StyleSheet } from 'react-native'

/**
 * @summary
 * @param backgroundColor black
 * @param accentColor white
 * @param primaryColor lemonchiffon
 */
export const colors = {
  // primaryColor: 'lemonchiffon',
  primaryColor: 'white',
  accentColor: 'white',
  backgroundColor: 'black',
  placeholderColor: 'gray',
  modalBackground: 'rgb(35,35,35)',
}

export const globalStyle = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
})
