import { View, Text, ScrollView, StyleSheet, Image} from 'react-native'
import React from 'react'

const Realestate = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Text style={styles.headline}>Real Estate Advisory</Text>
        <Text style={styles.description}>For years, mortgage lenders and consumers have relied on our expertise to provide high-quality valuations on a wide variety of real estate in Nepal. By continuously keeping up with local real estate trends and staying current on valuation techniques through accredited courses, we've been consistently able to deliver reliable home valuations for people just like you. </Text>
        <Image style={styles.myimg} source={require('../../assets/13.jpg')}/>
        <Text style={styles.description}>Our client’s deal with real estate that is located across the nation. Therefore, our employees are located across the nation in major cities with access to regional airports. Our dispersion cuts time and cost while increasing local knowledge.</Text>
      </View>
    </View>
    </ScrollView>
  )
}

export default Realestate

const styles =StyleSheet.create({
  container:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      alignContent:'center',
      backgroundColor:'#f0f2f5',
      textAlignVertical:'center',
      textAlign:'center',
      marginTop:'10%',
  },
  subcontainer:{
      width:'90%',
      marginLeft:'5%',
      marginRight:'5%',
      alignContent:'center',
      borderWidth:1,
      borderStyle:'solid',
      borderColor:'white',
      padding:30,
      backgroundColor:'white',
  },
  headline:{
    fontSize:25,
    color:'blue',
    textAlign:'left',
    marginBottom:10,

  },
  description:{
    marginTop:20,
    fontSize:18,
    textAlign:'left'
  },
  myimg:{
    width:'100%',
    height:200,
    marginTop:20
  }

})