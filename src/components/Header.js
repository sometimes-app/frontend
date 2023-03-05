import { StyleSheet, View } from 'react-native'
import { Ionicons, Feather } from '@expo/vector-icons'
import Logo from '../components/Logo'

const Header = ({ showBack, navigation, showProfile }) => {
  const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      marginTop: 40,
      justifyContent: 'space-between',
    }
  })

  return (
    <View style={styles.header}>
        {showBack ? <Ionicons name='ios-arrow-back-outline' size={32} color="white" onPress={() => {navigation.goBack()}}/> : <Ionicons name='ios-arrow-back-outline' size={32} color="black" />}
        <Logo />
        {showProfile ? <Feather name='user' size={32} color='white' onPress={() => {navigation.navigate('Profile')}} /> : <Feather name='user' size={32} color='black' onPress={() => {navigation.navigate('Profile')}} />}
      </View>
  )
}

export default Header