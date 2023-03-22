import { StyleSheet, View } from 'react-native'
import { Ionicons, Feather } from '@expo/vector-icons'
import Logo from '../components/Logo'
import PropTypes from 'prop-types'

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
          color='white'
          onPress={() => {
            navigation.goBack()
          }}
        />
      ) : (
        <Ionicons name='ios-arrow-back-outline' size={32} color='black' />
      )}
      <Logo />
      {showProfile ? (
        <Feather
          name='user'
          size={32}
          color='white'
          onPress={() => {
            navigation.navigate('Profile')
          }}
        />
      ) : (
        <Feather
          name='user'
          size={32}
          color='black'
          onPress={() => {
            navigation.navigate('Profile')
          }}
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
