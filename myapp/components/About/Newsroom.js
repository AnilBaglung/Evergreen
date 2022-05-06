import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Newsroom = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nothing To Display</Text>
      <Text style={styles.text1}>We will update soon.</Text>
    </View>
  )
}

export default Newsroom

const styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent:'center',
    backgroundColor:'#f0f2f5',
  },
  text:{
    marginTop:'20%',
    fontSize:30
  },
  text1:{
    marginTop:10,
    fontSize :18
  }
})