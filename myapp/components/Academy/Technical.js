import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react'

const Technical = ({navigation}) => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Text style={styles.smalltext}>Learn basic and advanced technical analysis, chart reading skills, and the technical indicators you need to identify and capitalize on price trends of any tradable security in any market.</Text>
        <Image style={styles.myimg} source={require('../../assets/technical.png')}/>
        <Text style={styles.headline}>What Will You Learn?</Text>
        <Text style={styles.desc}>{'\u29bf'}Identify technical patterns, trends, signals and indicators which drive the behavior of price</Text>
        <Text style={styles.desc}>{'\u29bf'}Make educated projections to set optimal price targets</Text>
        <Text style={styles.desc}>{'\u29bf'}Get out of bad trades quickly and stay in good ones longer</Text>
        <Text style={styles.desc}>{'\u29bf'}Price target and exit strategy</Text>
        <Text style={styles.smalltext}>Interested?</Text>
        <Text style={styles.contact} onPress={()=>navigation.navigate('Contact Us')}>Contact Us</Text>
      </View>
    </View>
  </ScrollView>
  )
}

export default Technical

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