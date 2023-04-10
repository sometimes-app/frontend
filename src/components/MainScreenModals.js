import { StyleSheet, Text, View, Pressable, Modal } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { colors } from '../styles/styles'
import PropTypes from 'prop-types'

export const TutorialStartModal = ({ isVisible, handlePress }) => {
  return (
    <>
      <Modal visible={isVisible} animationType='fade' transparent={true}>
        <View style={modalStyles.flexView}>
          <View style={modalStyles.modalViewOne}>
            <Text>
              Welcome to Sometimes! A place to go when you need a wholesome pick
              me up.
            </Text>
            <Pressable
              onPress={(event) => {
                handlePress(event)
              }}
            >
              <MaterialIcons
                name='keyboard-arrow-right'
                size={28}
                color={colors.backgroundColor}
                style={{ alignSelf: 'flex-end' }}
              />
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  )
}

export const TutorialStep2Modal = ({ isVisible, handlePress }) => {
  return (
    <>
      <Modal visible={isVisible} animationType='fade' transparent={true}>
        <View style={modalStyles.flexView}>
          <View style={modalStyles.modalViewTwo}>
            <Text>
              Tap the sleeping bear to reveal some kind words from a friend or
              loved one.
            </Text>
            <Pressable
              onPress={(event) => {
                handlePress(event)
              }}
            >
              <MaterialIcons
                name='keyboard-arrow-right'
                size={28}
                color={colors.backgroundColor}
                style={{ alignSelf: 'flex-end' }}
              />
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  )
}

export const TutorialStep3Modal = ({ isVisible, handlePress }) => {
  return (
    <>
      <Modal visible={isVisible} animationType='fade' transparent={true}>
        <View style={modalStyles.flexView}>
          <View style={modalStyles.modalViewThree}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: colors.accentColor,
                borderRadius: 20,
                padding: 15,
              }}
            >
              <Text>
                After 24 hours the bear goes back to sleep and you can reveal
                another message when you need it!
              </Text>
              <Pressable
                onPress={(event) => {
                  handlePress(event)
                }}
              >
                <MaterialIcons
                  name='close'
                  size={22}
                  color={colors.backgroundColor}
                  style={{ alignSelf: 'flex-end' }}
                />
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </>
  )
}

const TutorialPropTypes = {
  isVisible: PropTypes.bool,
  handlePress: PropTypes.func,
}

TutorialStartModal.propTypes = TutorialPropTypes

TutorialStep2Modal.propTypes = TutorialPropTypes

TutorialStep3Modal.propTypes = TutorialPropTypes

const modalStyles = StyleSheet.create({
  flexView: {
    flex: 1,
  },
  modalViewOne: {
    alignSelf: 'flex-end',
    top: '15%',
    right: '5%',
    maxWidth: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 2,
  },
  modalViewTwo: {
    top: '15%',
    left: '5%',
    maxWidth: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 2,
  },
  modalViewThree: {
    alignSelf: 'flex-end',
    top: '65%',
    right: '5%',
    maxWidth: '80%',
  },
})
