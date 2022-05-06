import { View, Text, ScrollView, StyleSheet, TextInput, Button } from 'react-native'
import React, {useState} from 'react'

const SIP = () => {

  const [investment, setInvestment] = useState('')
  const [period, setPeriod] = useState('')
  const [rate, setRate] = useState('')
  const [firstText, setFirstText] = useState('')
  const [secondText, setSecondText] = useState('')


  let contribution = Number(investment)
  let timePeriod = Number(period)
  let annnualRate = Number(rate)

  const calculate=()=>{
    if(contribution && timePeriod && annnualRate){
      let totalValue = (investment*(((1+(annnualRate/1200))**(timePeriod*12))-1)*(1+(annnualRate/1200))/(annnualRate/1200))
      setFirstText(`Invested amount : ${(contribution*timePeriod*12).toFixed()}`)
      setSecondText(`Total Value :  ${totalValue.toFixed(2)}`)
    }
    else{
      alert('Invalid Input')
    }
  }

  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <View style={styles.sipreturn}>
          <TextInput keyboardType='numeric'  placeholder='Monthly Contribution' style={styles.textfield} value={investment} onChangeText={setInvestment} required></TextInput>
          <TextInput keyboardType='numeric'  placeholder='Number of Years' style={styles.textfield} value={period} onChangeText={setPeriod} required ></TextInput>
          <TextInput keyboardType='numeric'  placeholder='Expected annual Return (%)' style={styles.textfield} value={rate} onChangeText={setRate} required></TextInput>
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

export default SIP

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
  sipreturn:{
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
    fontSize:16,
    color:'green',
    textAlign:'center'
  }
})