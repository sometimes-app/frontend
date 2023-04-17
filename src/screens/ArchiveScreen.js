import {
  View,
  StatusBar,
  FlatList,
  StyleSheet,
  Text,
  Dimensions,
} from 'react-native'
import Header from '../components/Header'
import { globalStyle, colors } from '../styles/styles'
import { archive } from '../mockData'
const { width } = Dimensions.get('screen')

const ArchiveScreen = () => {
  return (
    <View style={globalStyle.background}>
      <View style={globalStyle.container}>
        <StatusBar style='light' />
        <Header showProfile={true} showBack={true} />
        <FlatList
          data={archive}
          horizontal
          pagingEnabled
          keyExtractor={(message) => message.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.messageContainer} testID={'archive-message'}>
              <Text style={styles.message}>{item.message}</Text>
              <Text style={styles.sender}>- {item.sender}</Text>
            </View>
          )}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  messageContainer: {
    paddingHorizontal: 20,
    paddingVertical: 25,
    marginVertical: 20,
    marginHorizontal: 8,
    marginBottom: 60,
    borderRadius: 10,
    width: width - 36,
    justifyContent: 'center',
  },
  sender: {
    color: colors.primaryColor,
    marginLeft: 3,
    marginTop: 4,
    fontSize: 16,
  },
  message: {
    color: colors.primaryColor,
    fontSize: 26,
  },
})

export default ArchiveScreen
