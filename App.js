import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Routes from './src/navigations/Routes'

const App = () => {
  return (
    <View style={styles.appContainer}>
      <Routes />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  }
})
