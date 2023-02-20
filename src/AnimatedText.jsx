import { Animated, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useRef} from "react";



/**
 * Fades text in
 * @param {string} text Text to fade in
 * @param {boolean} byChar Fade text in by word or characters
 */
const AnimatedText = ({text}) => {

    useEffect(() => {
        fadeIn()
    })

    const fadeAnim = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 2500,
            useNativeDriver: true,
        }).start();
    }

    return (
        <SafeAreaView style={styles.container}>
            <Animated.View style={[
                {
                    opacity: fadeAnim
                }
            ]}>
                <Text style={styles.fadingText}>{text}</Text>
            </Animated.View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    fadingText:{
        fontSize: 32,
        color: 'white'
    },
  });

export default AnimatedText