import { View, Text, TextInput, StyleSheet, Button, ScrollView } from 'react-native'
import React, {useState} from 'react'

const SimpleInterest = () => {
  const [principle, setPrinciple] = useState('')
  const [period, setPeriod] = useState('')
  const [rate, setRate] = useState('')
  const [firstText, setFirstText] = useState('')
  const [secondText, setSecondTest] = useState('')

  let principlAmount = Number(principle)
  const timePeriod = Number(period)
  const interestRate = Number(rate)

  const calculate =()=>{
    if(principlAmount && timePeriod && interestRate){
      let interest = principlAmount*timePeriod*interestRate/100
      let totalAmount= principlAmount + interest
      setFirstText(`Total Interest: ${interest.toLocaleString('hi-IN')}`)
      setSecondTest(`Total Value :  ${totalAmount.toLocaleString('hi-IN')}`)
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
          <TextInput keyboardType='numeric' testID='principal' placeholder='Principle Amount' style={styles.textfield} value={principle} onChangeText={setPrinciple} required></TextInput>
          <TextInput keyboardType='numeric'  testID='periods' placeholder='Time in Years' style={styles.textfield} value={period} onChangeText={setPeriod} required ></TextInput>
          <TextInput keyboardType='numeric'  testID='rate' placeholder='Intrest Rate' style={styles.textfield} value={rate} onChangeText={setRate} required></TextInput>
        </View>
        <View style={styles.mybutton}>
          <Button title='Calculate'  onPress={calculate}></Button>
        </View>
        <Text style={styles.result}>{firstText}</Text>
        <Text style={styles.result}>{secondText}</Text>
      </View>
    </View>
    </ScrollView>
  )
}

export default SimpleInterest

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
  simpleinterest:{
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