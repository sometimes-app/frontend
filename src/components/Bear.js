import { Image, Pressable, Dimensions } from 'react-native'
import PropTypes from 'prop-types'
import bearGIF from '../../assets/bear.gif'
import bearLoadingPNG from '../../assets/bear_loading.png'

const Bear = ({ handlePress }) => {
  const { width, height } = Dimensions.get('screen')

  return (
    <Pressable onPress={handlePress}>
      <Image
        source={bearGIF}
        defaultSource={bearLoadingPNG}
        style={{ width: width, maxHeight: height * 0.5, resizeMode: 'contain' }}
      ></Image>
    </Pressable>
  )
}

Bear.propTypes = {
  handlePress: PropTypes.func,
}

export default Bear
