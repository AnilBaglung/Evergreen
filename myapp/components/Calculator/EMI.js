import { View, Text, TextInput, ScrollView, Button, StyleSheet } from 'react-native'
import React, {useState} from 'react'

const EMI = () => {

  const[loan, setLoan] = useState('')
  const [tenure, setTenure] = useState('')
  const[rate, setRate] = useState('')

  const LoanAmount= Number(loan)
  const timePeriod = Number(tenure)
  const interest = Number(rate)

  const[firstText, setFirstText]= useState('')

  const calculate = ()=>{
    if(LoanAmount && timePeriod && interest){
      const monthlyEMI = (LoanAmount*(interest/1200)*((1+(interest/1200))**(timePeriod*12)))/(((1+(interest/1200))**(timePeriod*12))-1)
      setFirstText(`Your Monthly payment is ${monthlyEMI.toFixed(2)}`)
    }
    else{
      alert('Invalid Input')
    }
  }

  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <View style={styles.Emiform}>
          <TextInput keyboardType='numeric'  placeholder='Loan Amount' style={styles.textfield} value={loan} onChangeText={setLoan} required></TextInput>
          <TextInput keyboardType='numeric'  placeholder='Tenure (years)' style={styles.textfield} value={tenure} onChangeText={setTenure} required ></TextInput>
          <TextInput keyboardType='numeric'  placeholder='Interest Rate' style={styles.textfield} value={rate} onChangeText={setRate} required></TextInput>
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

export default EMI

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
  Emiform:{
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