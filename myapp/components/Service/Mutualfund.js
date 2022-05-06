import { View, Text, ScrollView, Image, StyleSheet} from 'react-native'
import React from 'react'

const Mutualfund = () => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Text style={styles.headline}>Managed Fund </Text>
        <Text style={styles.description}>A Managed Funds specialist has the knowledge and expertise to review and amend portfolios as world markets change and can manage new risks and capture new opportunities for you.</Text>
        <Text style={styles.description}>Managed Funds are a great way to grow wealth and diversify your investments, whether you’re saving for a home deposit, looking for a way to give a child a leg-up on the property ladder, or preparing for your retirement.</Text>
        <Image style={styles.myimg} source={require('../../assets/11.jpg')}/>
        <Text style={styles.description}>We work with experienced Investment Managers who are experts in putting together Managed Funds portfolios that suit our clients’ individual needs, whether you’re seeking stable, regular income from your investments or are focused on long-term capital growth.</Text>
      </View>
    </View>
  </ScrollView>
  )
}

export default Mutualfund

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