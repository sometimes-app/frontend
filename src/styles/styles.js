import { StyleSheet } from 'react-native'

/**
 * @summary
 * @param backgroundColor black
 * @param accentColor white
 * @param primaryColor lemonchiffon
 */
export const colors = {
  primaryColor: 'lemonchiffon',
  accentColor: 'white',
  backgroundColor: 'black',
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
