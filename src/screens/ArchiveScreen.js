import {
  View,
  StatusBar,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Text,
  Dimensions,
} from 'react-native'
import Header from '../components/Header'
import { globalStyle, colors } from '../styles/styles'
import { archive } from '../mockData'
const { width, height } = Dimensions.get('screen')

const ArchiveScreen = ({ navigation }) => {
  return (
    <View style={globalStyle.background}>
      <View style={globalStyle.container}>
        <StatusBar style='light' />
        <Header navigation={navigation} showProfile={true} showBack={true} />
        <FlatList
          data={archive}
          horizontal
          pagingEnabled
          keyExtractor={(message) => message.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.messageContainer}>
              <Text style={{ fontSize: 16 }}>{item.message}</Text>
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
    backgroundColor: colors.primaryColor,
    paddingHorizontal: 20,
    paddingVertical: 25,
    marginVertical: 15,
    marginHorizontal: 8,
    borderRadius: 5,
    width: width - 36,
  },
  sender: {
    marginLeft: 3,
    marginTop: 4,
  },
})

export default ArchiveScreen
