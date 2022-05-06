import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import React from 'react'

const Daytrading = ({navigation}) => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Text style={styles.smalltext}>Comprehensive day trader training from an experienced Wall Street trader. Learn to trade in any market, online and at your own pace.</Text>
        <Image style={styles.myimg} source={require('../../assets/trading.png')}/>
        <Text style={styles.headline}>What Will You Learn?</Text>
        <Text style={styles.desc}>{'\u29bf'}Learn a proven and to the point strategy that includes six different kinds of trades</Text>
        <Text style={styles.desc}>{'\u29bf'}Have the confidence and knowledge to trade on a daily basis</Text>
        <Text style={styles.desc}>{'\u29bf'}Discover how to minimize your risk with every trade</Text>
        <Text style={styles.desc}>{'\u29bf'}Speak the language of the market and trade like a professional</Text>
        <Text style={styles.desc}>{'\u29bf'}Acquire the skills you need to trade any security in any market</Text>
        <Text style={styles.smalltext}>Interested?</Text>
        <Text style={styles.contact} onPress={()=>navigation.navigate('Contact Us')}>Contact Us</Text>
      </View>
    </View>
  </ScrollView>
  )
}

export default Daytrading

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
    fontWeight:'600'

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