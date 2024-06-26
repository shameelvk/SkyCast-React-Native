import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppStackNavigation from './src/routes/AppStackNavigation'

const App = () => {
  return (
    <NavigationContainer>
      <AppStackNavigation/>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})