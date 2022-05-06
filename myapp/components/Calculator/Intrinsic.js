import { View, Text, TextInput, ScrollView, Button, StyleSheet } from 'react-native'
import React,{useState} from 'react'

const Intrinsic = () => {
  const [income, setIncome] = useState('')
  const [growth, setGrowth] = useState('')
  const [time, setTime] = useState('')
  const [ereturn, setEreturn] = useState('')
  const [mcap, setMcap] = useState('')
  const [firstText, setFirstText] = useState('')

  const OperatingIncome = Number(income)
  const ExpectedGrowth = Number(growth)
  const HoldingTime = Number(time)
  const ExpectedReturn = Number(ereturn)
  const MarketCap = Number(mcap)
  var a = []

  const calculate =()=>{
  if(OperatingIncome && ExpectedGrowth && HoldingTime && ExpectedReturn){
    for(let t = 1; t < (HoldingTime+1); t++){
      var free_cash_flow = OperatingIncome * (1 + (ExpectedGrowth / 100)) ** (t + 1)
      var discounted_cash_flow = (free_cash_flow / (1 + (ExpectedReturn / 100)) ** (t + 1))
      a.push(Number(discounted_cash_flow))

      var sum = a.reduce(
        (accumulator, x)=>{
          return accumulator += x
        }
      )
      }
      let sums = Number(sum)
    

      setFirstText(`The Instrinsic Value of Company is : ${sums.toFixed(2)}`)
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
          <TextInput keyboardType='numeric'  placeholder='Operating Income' style={styles.textfield} value={income} onChangeText={setIncome} required></TextInput>
          <TextInput keyboardType='numeric'  placeholder='Expected Growth' style={styles.textfield} value={growth} onChangeText={setGrowth} required ></TextInput>
          <TextInput keyboardType='numeric'  placeholder='Holding Years' style={styles.textfield} value={time} onChangeText={setTime} required></TextInput>
          <TextInput keyboardType='numeric'  placeholder='Expected Return' style={styles.textfield} value={ereturn} onChangeText={setEreturn} required></TextInput>
          <TextInput keyboardType='numeric'  placeholder='Current Market Cap' style={styles.textfield} value={mcap} onChangeText={setMcap} required></TextInput>
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

export default Intrinsic

const styles= StyleSheet.create({
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