import { View, Text, Image, ScrollView, StyleSheet } from 'react-native'
import React from 'react'

const Fundamental = ({navigation}) => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Text style={styles.smalltext}>Get ahead of the market by understanding the true value of a stock and capitalizing on its price. Learn fundamental analysis strategies used by the most successful investors.</Text>
        <Image style={styles.myimg} source={require('../../assets/fundamental.png')}/>
        <Text style={styles.headline}>What Will You Learn?</Text>
        <Text style={styles.desc}>{'\u29bf'}Analyze a stock's income and cash flow statements</Text>
        <Text style={styles.desc}>{'\u29bf'}Identify weakness hidden in a stock's balance sheet</Text>
        <Text style={styles.desc}>{'\u29bf'}Understand which value ratios identify stocks likely to rise</Text>
        <Text style={styles.desc}>{'\u29bf'}Use fundamental analysis to pinpoint a good stock</Text>
        <Text style={styles.desc}>{'\u29bf'}Watch the value ratios that matter most</Text>
        <Text style={styles.desc}>{'\u29bf'}Move from simply knowing when to buy to knowing what to buy</Text>
        <Text style={styles.smalltext}>Interested?</Text>
        <Text style={styles.contact} onPress={()=>navigation.navigate('Contact Us')}>Contact Us</Text>
      </View>
    </View>
  </ScrollView>
  )
}

export default Fundamental

const styles =StyleSheet.create({
  container:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      alignContent:'center',
      backgroundColor:'#f0f2f5',
      textAlignVertical:'center',
      textAlign:'center',
      marginTop:'5%',
  },
  subcontainer:{
      width:'90%',
      marginLeft:'3%',
      marginRight:'3%',
      alignContent:'center',
      borderWidth:1,
      borderStyle:'solid',
      borderColor:'white',
      padding:20,
      backgroundColor:'white',
  },
  headline:{
    marginTop:20,
    fontSize:30,
    color:'blue',
    textAlign:'left',
    marginBottom:10,
    fontWeight:"600"

  },
  desc:{
    marginTop:10,
    fontSize:20,
    textAlign:'left',
    opacity:0.7,
  },
  myimg:{
    width:'100%',
    height:200,
    marginTop:20
  },
  smalltext:{
    marginTop:20,
    fontSize:23,
    textAlign:'left',
  },
  contact:{
    marginTop:15,
    color:'blue',
    fontSize:25,
    textAlign:'left'
  }

})