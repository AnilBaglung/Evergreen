import { View, Text, ScrollView, Image, StyleSheet} from 'react-native'
import React from 'react'

const Personalfinance = ({navigation}) => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Text style={styles.smalltext}>A complete collection of courses to learn how to budget your money, overcome debt and balance between savings and investments</Text>
        <Image style={styles.myimg} source={require('../../assets/finance.jpg')}/>
        <Text style={styles.headline}>What Will You Learn?</Text>
        <Text style={styles.desc}>{'\u29bf'}Creating a customized budget that aligns with your income and expenses</Text>
        <Text style={styles.desc}>{'\u29bf'}How to save at a young age and leverage compounding interests to make your wealth grow</Text>
        <Text style={styles.desc}>{'\u29bf'}How to increase your earning power</Text>
        <Text style={styles.desc}>{'\u29bf'}Ways to controll your personal debt </Text>
        <Text style={styles.desc}>{'\u29bf'}Develop a personalized savings plan based on your income, expenses and debt</Text>
        <Text style={styles.smalltext}>Interested?</Text>
        <Text style={styles.contact} onPress={()=>navigation.navigate('Contact Us')}>Contact Us</Text>
      </View>
    </View>
  </ScrollView>
  )
}

export default Personalfinance

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