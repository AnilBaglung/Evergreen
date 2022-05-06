import { View, Text, Button, ScrollView, StyleSheet  } from 'react-native'
import React from 'react'

const AboutUs = ({navigation}) => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.subcontainer}>
      <View style={styles.mybutton} ><Button title='What We Do ' color='green' height='50px' onPress={()=>navigation.navigate('What We Do')} /></View>
      <View style={styles.mybutton} ><Button title='Our Team' color='blue' height='50px' onPress={()=>navigation.navigate('Our Team')} /></View>
      <View style={styles.mybutton} ><Button title='What We Offer' color='orange' height='50px' onPress={()=>navigation.navigate('Our Services')} /></View>
      <View style={styles.mybutton} ><Button title='Newsroom' color='brown' height='50px' onPress={()=>navigation.navigate('Newsroom')} /></View>
      </View>
    </View>
    </ScrollView>
  )
}

export default AboutUs

const styles =StyleSheet.create({
  container:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      alignContent:'center',
      backgroundColor:'#f0f2f5',
      textAlignVertical:'center',
      textAlign:'center',
      marginTop:'30%',
  },
  subcontainer:{
      width:'90%',
      marginLeft:'5%',
      marginRight:'5%',
      alignContent:'center',
      borderWidth:1,
      borderStyle:'solid',
      borderColor:'white',
      padding:50,
      backgroundColor:'white',
  },
  mybutton:{
    marginBottom:20
  }

})