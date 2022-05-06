import { View, Text, ScrollView, TextInput, Button, StyleSheet } from 'react-native'
import React, {useState} from 'react'

const ROI = () => {
  const [tamount, setTamount] = useState('')
  const [iamount, setIamount] = useState('')
  const [period, setPeriod] = useState('')
  const [firstText, setFirstText] = useState('')
  const [secondText, setSecondText] = useState('')

  const totalvalue = Number(tamount)
  const investedvalue = Number(iamount)
  const timePeriod= Number(period)

  const calculate=()=>{
    if(totalvalue && investedvalue && timePeriod){
      const totalRoi = ((totalvalue-investedvalue)/investedvalue)*100
      const annualizedRoi = ((1+((totalvalue-investedvalue)/investedvalue))**(1/timePeriod)-1)*100
      setFirstText(`Total ROI : ${totalRoi}%`)
      setSecondText(`Annualized ROI : ${annualizedRoi.toFixed(2)}%`)
    }
    else{
      alert('Invalid Input')
    }

  }

  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <View style={styles.Roiform}>
          <TextInput keyboardType='numeric'  placeholder='Returned Amount' style={styles.textfield} value={tamount} onChangeText={setTamount} required></TextInput>
          <TextInput keyboardType='numeric'  placeholder='Invested Amount' style={styles.textfield} value={iamount} onChangeText={setIamount} required ></TextInput>
          <TextInput keyboardType='numeric'  placeholder='Invested Time(Years)' style={styles.textfield} value={period} onChangeText={setPeriod} required></TextInput>
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

export default ROI

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
  Roiform:{
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