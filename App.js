import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TestSqlite from './src/views/TestSqlite'
import HeaderView from './src/views/HeaderView'
import TestLocation from './src/views/TestLocation'
import UserContext from './src/contexts/UserContext'

const App = () => {
  return (
   

    <View style={styles.container}>

      <HeaderView/>
    </View>
    
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    padding: 12,
    flex: 1
  }
})