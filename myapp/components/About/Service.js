import { View, Text, StyleSheet, Button, ScrollView } from 'react-native'
import React from 'react'

const Service = ({navigation}) => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <View style={styles.mybutton} ><Button title='Insurence' color='green' height='50px' onPress={()=>navigation.navigate('Insurence')} /></View>
        <View style={styles.mybutton}><Button title='Managed Fund' color='red' style={styles.mybutton} onPress={()=>navigation.navigate('Managed Fund')}/></View>
        <View style={styles.mybutton}><Button title='Real Estate' color='blue' style={styles.mybutton} onPress={()=>navigation.navigate('Real Estate')}/></View>
        <View style={styles.mybutton}><Button title='Stocks' color='orange' style={styles.mybutton} onPress={()=>navigation.navigate('Stocks')}/></View>
        <View style = {styles.mybutton}><Button title='Other Assets' color='violet' style={styles.mybutton} onPress={()=>navigation.navigate('Other Assets')}/></View>
      </View>
    </View>
    </ScrollView>
  )
}

export default Service

const styles = StyleSheet.create({
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