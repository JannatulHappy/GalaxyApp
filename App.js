import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from './src/theme/colors'
import { spacing } from './src/theme/spacing'
import {typography} from './src/theme/typography';
const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
      <Text>Hello World</Text>
      <StatusBar style="auto"></StatusBar>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    backgroundColor:colors.darkOrange,
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    padding:spacing[4]
  },
  text:{
    padding:spacing[4],
    fontSize:34,
    fontFamily: typography.primaryBold,
  }
})