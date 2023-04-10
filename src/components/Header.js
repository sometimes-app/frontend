import { StyleSheet, View } from 'react-native'
import { Ionicons, Feather } from '@expo/vector-icons'
import Logo from '../components/Logo'
import PropTypes from 'prop-types'
import { colors } from '../styles/styles'

const Header = ({ showBack, navigation, showProfile }) => {
  const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      marginTop: 50,
      justifyContent: 'space-between',
    },
  })

  // When reduce motion is on the screen flashes white and black on the back btn
  return (
    <View style={styles.header}>
      {showBack ? (
        <Ionicons
          name='ios-arrow-back-outline'
          size={32}
          color={colors.accentColor}
          onPress={() => {
            navigation.goBack()
          }}
          testID='back-button'
        />
      ) : (
        <Ionicons
          name='ios-arrow-back-outline'
          size={32}
          color={colors.backgroundColor}
          testID='back-button'
        />
      )}
      <Logo />
      {showProfile ? (
        <Feather
          name='user'
          size={32}
          color={colors.accentColor}
          onPress={() => {
            navigation.navigate('Profile')
          }}
          testID='profile-button'
        />
      ) : (
        <Feather
          name='user'
          size={32}
          color={colors.backgroundColor}
          testID='profile-button'
        />
      )}
    </View>
  )
}

Header.propTypes = {
  showBack: PropTypes.bool,
  showProfile: PropTypes.bool,
}

Header.defaultProps = {
  showBack: false,
  showProfile: false,
}

export default Header
