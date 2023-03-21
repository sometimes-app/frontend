import { Animated, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, {useEffect, useRef} from "react";

/**
 * Helper for animated text component to individual animate a character or word in a series
 * @param {string} textToAnimate Text to animate
 * @param {int} duration Animation fade in duration
 * @param {*} textSize Font size
 * @param {*} index index to create
 * @returns The view and animation tied to the view in an array
 */
const singleElementAnimation = (textToAnimate, duration, textSize, index) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const animation = new Animated.timing(fadeAnim, {
        toValue: 1,
        duration: duration,
        useNativeDriver: true
    });

    const styles = StyleSheet.create({
        text:{
            fontSize: textSize,
            color: 'lemonchiffon'
        },
      });

    const view = (      
        <Animated.View
            key={index}
            style={[
                {
                    // Bind opacity to animated value
                    opacity: fadeAnim,
                },
            ]}>
            <Text key={index} style={styles.text}>{textToAnimate}</Text>
        </Animated.View>
      )

      return [view, animation]
}

/**
 * Fades text in
 * @param {string} text Text to fade in
 * @param {boolean} byChar Fade text in by word or characters
 * @param {int} textSize Font size for text
 * @param {int} duration Fade in animation duration
 */
const FadeInAnimatedText = ({text, byChar, textSize, duration}) => {

    const splitText = (textToSplit, byChar) => {
        let textArray = [];
        if(byChar){
            textArray = textToSplit.split('');
        }
        else{
            textArray = textToSplit.split(" ");
        }
        return textArray;
    }

    const viewAndAnimations = splitText(text, byChar).map((item, index) => {
        return singleElementAnimation(item, duration, textSize, index)
    })

    useEffect(() => {
        // get all the animations and put them in the sequence
        Animated.sequence(viewAndAnimations.map(viewAndAnimation => (viewAndAnimation[1]))).start()
    })

    return (
        <SafeAreaView style={styles.container}>
            {/* get all the views and populate the entire word or sentence */}
            {viewAndAnimations.map((viewAndAnimation) => (viewAndAnimation[0]))}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    }
  });

export default FadeInAnimatedText