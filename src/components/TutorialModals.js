import { StyleSheet, Text, View, Pressable, Modal } from 'react-native'
import { colors } from '../styles/styles'
import PropTypes from 'prop-types'

export const TutorialStartModal = ({ isVisible, handlePress }) => {
  return (
    <>
      <Modal visible={isVisible} animationType='fade' transparent={true}>
        <Pressable
          testID='tutorialModal1Press'
          onPress={(event) => {
            handlePress(event)
          }}
          style={styles.pressStyle}
        >
          <View style={styles.modalView}>
            <Text style={styles.textStyle}>
              Welcome to Sometimes! A place to go when you need a wholesome pick
              me up.
            </Text>
          </View>
        </Pressable>
      </Modal>
    </>
  )
}

export const TutorialStep2Modal = ({ isVisible, handlePress }) => {
  return (
    <>
      <Modal visible={isVisible} animationType='fade' transparent={true}>
        <Pressable
          testID='tutorialModal2Press'
          onPress={(event) => {
            handlePress(event)
          }}
          style={styles.pressStyle}
        >
          <View style={styles.modalView}>
            <Text style={styles.textStyle}>
              Tap the sleeping bear to reveal some kind words from a friend or
              loved one.
            </Text>
          </View>
        </Pressable>
      </Modal>
    </>
  )
}

export const TutorialStep3Modal = ({ isVisible, handlePress }) => {
  return (
    <>
      <Modal visible={isVisible} animationType='fade' transparent={true}>
        <Pressable
          testID='tutorialModal3Press'
          onPress={(event) => {
            handlePress(event)
          }}
          style={styles.pressStyle}
        >
          <View style={styles.modalView}>
            <Text style={styles.textStyle}>
              After 24 hours the bear goes back to sleep and you can reveal
              another message when you need it!
            </Text>
          </View>
        </Pressable>
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

const styles = StyleSheet.create({
  pressStyle: {
    display: 'flex',
    flex: 1,
  },
  modalView: {
    alignSelf: 'center',
    top: '20%',
    // right: '5%',
    maxWidth: '80%',
    backgroundColor: colors.modalBackground,
    borderRadius: 15,
    padding: 12,
    // paddingTop: 15,
    // paddingBottom: 2,
    borderColor: colors.primaryColor,
    borderWidth: 2,
  },
  textStyle: {
    color: colors.primaryColor,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '300',
  },
})
