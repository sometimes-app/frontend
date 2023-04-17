import { StyleSheet, View } from 'react-native'
import { Ionicons, Feather } from '@expo/vector-icons'
import Logo from '../components/Logo'
import PropTypes from 'prop-types'
import { colors } from '../styles/styles'
import { useNavigation } from '@react-navigation/native'

const Header = ({ showBack, showProfile, showFriends }) => {
  const navigation = useNavigation()
  const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      marginTop: 50,
      justifyContent: 'space-between',
    },
  })

  let leftButton

  if (showBack) {
    leftButton = (
      <Ionicons
        name='ios-arrow-back-outline'
        size={32}
        color={colors.primaryColor}
        onPress={() => {
          navigation.goBack()
        }}
        testID='back-button'
      />
    )
  } else if (showFriends) {
    leftButton = (
      <Feather
        name='users'
        size={32}
        color={colors.primaryColor}
        onPress={() => navigation.navigate('Friends')}
        testID='friends-button'
      />
    )
  } else {
    leftButton = (
      <Ionicons
        name='ios-arrow-back-outline'
        size={32}
        color={colors.backgroundColor}
        testID='back-button'
      />
    )
  }

  // When reduce motion is on the screen flashes white and black on the back btn
  return (
    <View style={styles.header}>
      {leftButton}
      <Logo />
      {showProfile ? (
        <Feather
          name='user'
          size={32}
          color={colors.primaryColor}
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
  showFriends: PropTypes.bool,
}

Header.defaultProps = {
  showBack: false,
  showProfile: false,
  showFriends: false,
}

export default Header
