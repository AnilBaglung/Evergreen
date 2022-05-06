import { View, Text, ScrollView, StyleSheet, Image,  } from 'react-native'
import React from 'react'

const Team = () => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Text style={styles.title}>Executive Leadership</Text>
        <Text style={styles.desc}>Seasoned entrepreneurs and intrapreneurs at the helm of the organisation.</Text>

        <View style={styles.leadership}>
        <Image style={styles.myimg} source={require('../../assets/2.jpg')}/>
        <Text style={styles.person}>Anil Subedi</Text>
        <Text style={styles.personpost}>CEO & CO-FOUNDER</Text>
        </View>
        <View style={styles.leadership}>
        <Image style={styles.myimg} source={require('../../assets/3.jpg')}/>
        <Text style={styles.person}>Aditya Bimoli</Text>
        <Text style={styles.personpost}>CPO & CO-FOUNDER</Text>
        </View>

        <View style={styles.leadership}>
        <Image style={styles.myimg} source={require('../../assets/lp.jpg')}/>
        <Text style={styles.person}>LP Chalise</Text>
        <Text style={styles.personpost}>GROUP COO</Text>
        </View>
        <View style={styles.leadership}>
        <Image style={styles.myimg} source={require('../../assets/ksenia.jpg')}/>
        <Text style={styles.person}>Ksenia Makarova</Text>
        <Text style={styles.personpost}>HEAD, FINANCE</Text>
        </View>

        <View style={styles.leadership}>
        <Image style={styles.myimg} source={require('../../assets/manoj.jpg')}/>
        <Text style={styles.person}>Manoj Subedi</Text>
        <Text style={styles.personpost}>ENGINEERING LEAD</Text>
        </View>

      </View>
    </View>
    </ScrollView>

  )
}

export default Team

const styles= StyleSheet.create({
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
    textAlign:'center',
    width:'95%',
    padding:50,
    alignContent:'center',
  },

  title:{
    marginTop :20,
    marginBottom:25,
    color:'blue',
    fontSize:25,
    fontWeight:'600'

  },
  desc:{
    fontSize:18,
    opacity:0.7
  },
  leadership:{
    marginTop:50,
    alignItems:'center',
    width:'80%',
    marginLeft:'10%'
  },
  myimg:{
    width:'100%',
    height:200,
    borderRadius:20
  },

  person:{
    marginTop:15,
    fontSize:22,
    color:'black',
    fontWeight:'600'
  },
  personpost:{
    fontSize:18,
    marginTop:10,
    opacity:0.6,
  },
}
)


