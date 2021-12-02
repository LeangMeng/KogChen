import { NativeBaseProvider } from 'native-base'
import React, { useState } from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import Routes from './src/Container/Routes'

const App = () => {
  const [hidden, setHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState();
  const [statusBarTransition, setStatusBarTransition] = useState();
  return (
    <NativeBaseProvider>
      <StatusBar
          animated={true}
          backgroundColor="grey"
          barStyle={statusBarStyle}
          showHideTransition={statusBarTransition}
          hidden={hidden} />
      <Routes/>
    </NativeBaseProvider>
  )
}

export default App

const styles = StyleSheet.create({})
