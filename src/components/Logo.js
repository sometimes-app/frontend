import { StyleSheet, Text } from 'react-native'
import React from 'react'

const Logo = () => {
  return <Text style={styles.logo}>Sometimes</Text>
}

const styles = StyleSheet.create({
  logo: {
    color: 'white',
    fontSize: 30,
  },
})

export default Logo
