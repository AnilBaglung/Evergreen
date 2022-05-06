import { View, Text, ScrollView, StyleSheet, TextInput, Button } from 'react-native'
import React,{useState} from 'react'
import { findDOMNode } from 'react-dom'

const Compound = () => {
  const [principle, setPrinciple] = useState('')
  const [period, setPeriod] = useState('')
  const [rate, setRate] = useState('')
  const [firstText, setFirstText] = useState('')

  const principlAmount = Number(principle)
  const timePeriod = Number(period)
  const interestRate = Number(rate)
  let totalAmount= (principlAmount*(1+(interestRate/100))**timePeriod).toFixed(2)

  const calculate =()=>{
    if(principlAmount && timePeriod && interestRate){
      setFirstText(`Your Investment will be: ${totalAmount}`)
    }
    else{
      alert('Invalid Input')
    }
  }
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <View style={styles.compoundinterest}>
          <TextInput keyboardType='numeric'  placeholder='Principle Amount' style={styles.textfield} value={principle} onChangeText={setPrinciple} required></TextInput>
          <TextInput keyboardType='numeric'  placeholder='Investing Time(y)' style={styles.textfield} value={period} onChangeText={setPeriod} required ></TextInput>
          <TextInput keyboardType='numeric'  placeholder='Expected annual Return (%)' style={styles.textfield} value={rate} onChangeText={setRate} required></TextInput>
        </View>
        <View style={styles.mybutton}>
          <Button title='Calculate'  onPress={calculate}></Button>
        </View>
        <Text style={styles.result}>{firstText}</Text>
      </View>
    </View>
    </ScrollView>
  )
}

export default Compound

const styles= StyleSheet.create({
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
    paddingTop:10
  },
  compoundinterest:{
    width:'100%'
  },
  textfield:{
    marginBottom:20,
    fontSize:16,
    padding:10,
    width:'100%',
    borderWidth:1,
    borderStyle:'solid',
    borderColor: 'darkgray',

  },
  result:{
    paddingTop:10,
    fontSize:18,
    color:'green',
    textAlign:'center'
  }
})