import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'

const Stocks = () => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Text style={styles.headline}>Equity Advisory</Text>
        <Text style={styles.description}>A successful  investment strategy relies on a considered, consistent approach that is flexible enough to be tailored to each client's unique circumstances. However our investment philosophy always remains the same: It is goals-focused, balanced , disciplined, transparent and value driven.</Text>
        <Image style={styles.myimg} source={require('../../assets/stock.jpg')}/>
        <Text style={styles.description}>A long-term portfolio of 15 - 20 young companies with the potential to grow exponentially which can create wealth inthe medium to long term. The essence is to spotyoung companies and watch them grow.</Text>
      </View>
    </View>
  </ScrollView>
  )
}

export default Stocks

const styles =StyleSheet.create({
  container:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      alignContent:'center',
      backgroundColor:'#f0f2f5',
      textAlignVertical:'center',
      textAlign:'center',
      marginTop:'10%',
  },
  subcontainer:{
      width:'90%',
      marginLeft:'5%',
      marginRight:'5%',
      alignContent:'center',
      borderWidth:1,
      borderStyle:'solid',
      borderColor:'white',
      padding:30,
      backgroundColor:'white',
  },
  headline:{
    fontSize:25,
    color:'blue',
    textAlign:'left',
    marginBottom:10,

  },
  description:{
    marginTop:20,
    fontSize:18,
    textAlign:'left'
  },
  myimg:{
    width:'100%',
    height:200,
    marginTop:20
  }

})