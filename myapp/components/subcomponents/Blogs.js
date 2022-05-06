import { View, Text, Button, ScrollView, StyleSheet } from 'react-native'
import React from 'react'

const Blogs = ({navigation}) => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <View style={styles.mybutton} ><Button title='Investing For Beginners' color='green' height='50px' onPress={()=>navigation.navigate('Investing For Beginners')} /></View>
        <View style={styles.mybutton}><Button title='Personal Finance' color='red' style={styles.mybutton} onPress={()=>navigation.navigate('Personal Finance')}/></View>
        <View style={styles.mybutton}><Button title='Day Trading' color='blue' style={styles.mybutton} onPress={()=>navigation.navigate('Day Trading')}/></View>
        <View style={styles.mybutton}><Button title='Technical Analysis' color='orange' style={styles.mybutton} onPress={()=>navigation.navigate('Technical Analysis')}/></View>
        <View ><Button title='Fundamental Analysis' color='violet' style={styles.mybutton} onPress={()=>navigation.navigate('Fundamental Analysis')}/></View>
      </View>
    </View>
    </ScrollView>
  )
}

export default Blogs

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