import { View, Text, ScrollView, StyleSheet, Image} from 'react-native'
import React from 'react'

const Insurence = () => {
  return (
  <ScrollView>
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Text style={styles.headline}>Insurence Advisory </Text>
        <Text style={styles.description}>A successful  investment strategy relies on a considered, consistent approach that is flexible enough to be tailored to each client's unique circumstances. However our investment philosophy always remains the same: It is goals-focused, balanced , disciplined, transparent and value driven.</Text>
        <Image style={styles.myimg} source={require('../../assets/10.jpg')}/>
        <Text style={styles.description}>When you engage us to help your financial planning and insurence needs, we will find the best tailored insurence solutions for your personal cirmustances and goals. We'll guide you through initial discovery and focus meetings, our in-depth analysis of the scope required , strategy sessions, implementation of our advice, and ongoing coaching and reviews of your goals and progress.We'll be with you each step of the way as your financial aspiration become reality. </Text>
      </View>
    </View>
  </ScrollView>
  )
}

export default Insurence

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