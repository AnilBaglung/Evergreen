import { View, Text, StyleSheet, Button, ScrollView } from 'react-native'
import React from 'react'


const Investingcalculator = ({navigation}) => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <View style={styles.mybutton} ><Button title='Compound Interest' color='green'  onPress={()=>navigation.navigate('Compound Interest')} /></View>
        <View style={styles.mybutton}><Button title='SIP Calculator' color='red'  onPress={()=>navigation.navigate('SIP Calculator')}/></View>
        <View style={styles.mybutton}><Button title='Simple Interest Calculator' color='blue'  onPress={()=>navigation.navigate('Simple Interest')}/></View>
        <View style={styles.mybutton}><Button title='ROI Calculator' color='orange'  onPress={()=>navigation.navigate('ROI Calculator')}/></View>
        <View style={styles.mybutton}><Button title='EMI Calculator' color='dimgrey'  onPress={()=>navigation.navigate('EMI Calculator')}/></View>
        <View><Button title='Intrinsic value ' color='magenta'  onPress={()=>navigation.navigate('Intrinsic Value')}/></View>
      </View>
    </View>
    </ScrollView>
  )
}

export default Investingcalculator

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
