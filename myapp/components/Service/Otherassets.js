import { View, Text , StyleSheet, ScrollView, Image} from 'react-native'
import React from 'react'

const Otherassets = () => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Text style={styles.headline}>Gold and Bond Advisory</Text>
        <Text style={styles.description}>Choosing the right investment can certainly make a difference. Likewise, so is the choosing the right investment professional. We believe our portfolio management approach, focus on insightful financial planning, and commitment to our clients and community are all reasons we can make a difference. </Text>
        <Image style={styles.myimg} source={require('../../assets/metal.jpg')}/>
        <Text style={styles.description}>As we edge toward a post-pandemic world, many investors are looking for ways to prepare for future uncertainties. A solution for some may include investing in precious metals, such as gold and silver. We advise you to divesify your portfolio to minimise risk and hedge Inflation as well as your other investment.</Text>
      </View>
    </View>
  </ScrollView>
  )
}

export default Otherassets

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


