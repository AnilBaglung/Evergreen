import { View, Text, Image, ScrollView, StyleSheet  } from 'react-native'
import React from 'react'

const Whatwedo = () => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        
        <Text style={styles.headline}>
          Embedded Finance
        </Text>
        <Text style={styles.text}>
          In this day and age, financial products should be widely and easily accessible to people when they need them. Except, it really isn’t the case in most parts of South Asia. That’s where we comes in.
        </Text>
        <Image source={require('../../assets/1.png')} style={styles.myimage}></Image>
        <Text style={styles.text}>
        We are nepal based Investment advisory company with mission to Provide need-based solutions at the right value, gaining lifetime client relationships through a happy team & service excellence.We want to be most admired and recommended wealth creation and protection brand.
        </Text>
      </View>
    </View>
    </ScrollView>
  )
}

export default Whatwedo

const styles = StyleSheet.create({
  container:{
    display:'flex',
    justifyContent: 'center',
    textAlign:'center',
    alignItems:'center',
    backgroundColor:'#f0f2f5'
  },
  subcontainer:{
    marginTop:'5%',
    borderWidth:1,
    borderStyle:'solid',
    borderColor:'white',
    backgroundColor:'white',
    textAlign:'left',
    width:'100%',
    padding:50
  },
  myimage:{
    marginTop:30,
    marginBottom:30,
    width:'100%',
    height:160
    
  },
  headline:{
    marginTop :20,
    marginBottom:25,
    color:'blue',
    fontSize:25,
    fontWeight:'600'
  },
  text:{
    fontSize:18,
    textAlign:'left',
    opacity:0.7,
    lineHeight:20
  }





})