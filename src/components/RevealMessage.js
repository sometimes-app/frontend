import { useEffect, useRef } from "react";
import { Animated, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";

const RevealMessage = ({ handlePress }) => {
  const scale = useRef(new Animated.Value(1)).current

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scale, { toValue: 1.3, useNativeDriver: true, duration: 1000 }),
        Animated.timing(scale, { toValue: 1, useNativeDriver: true, duration: 1000 }),
      ])
    ).start()
  }, [])

  const styles = StyleSheet.create({
    button: {
      backgroundColor: 'lemonchiffon',
      height: Dimensions.get('window').height * .2,
      width: Dimensions.get('window').height * .2,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 100,
      transform: [{ scale }]
    },
  })

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}/>
  )
}

export default RevealMessage