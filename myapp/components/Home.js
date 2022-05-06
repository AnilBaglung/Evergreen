import { View, Text, ScrollView, StyleSheet, Button } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <ScrollView>
    <View style={styles.homecontainer}>
      <View style={styles.subcontainer}>
        <View style={styles.mybutton} ><Button title='Investing Calculator' color='green' height='50px' onPress={()=>navigation.navigate('Calculator')} /></View>
        <View style={styles.mybutton}><Button title='Academy' color='red' style={styles.mybutton} onPress={()=>navigation.navigate('Academy')}/></View>
        <View style={styles.mybutton}><Button title='FAQ' color='blue' style={styles.mybutton} onPress={()=>navigation.navigate('FAQ')}/></View>
        <View style={styles.mybutton}><Button title='About Us' color='orange' style={styles.mybutton} onPress={()=>navigation.navigate('About Us')}/></View>
        <View ><Button title='Contact Us' color='violet' style={styles.mybutton} onPress={()=>navigation.navigate('Contact Us')}/></View>
      </View>
    </View>
    </ScrollView>
  )
}

export default Home

const styles =StyleSheet.create({
  homecontainer:{
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