import { View, Text, ScrollView, TextInput, Button, StyleSheet } from 'react-native'
import React,{useState} from 'react'

const Contact = ({navigation}) => {
  const [fname, setFname] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [success, setSuccess] = useState('')
  const data = {'fullname':fname,'email':email,'phone':phone,'message':message}

  const submitData=()=>{
    if(fname && email && phone && message){
      if(!email.includes('@' && '.com')){
        alert('Invalid Email')
      }
      else{
        fetch('http://192.168.178.22:8000/contact/',{
          method:'POST',
          headers: {
            'Content-Type':'application/json',
          },
          body:JSON.stringify(data) 
        }).then(resp=>resp.json())
        .then(setFname(''),setEmail(''),setPhone(''), setMessage(''),)
      
        
        setSuccess('Message sent successfully !')
        setFname(''), setEmail(''),setPhone(''),setMessage('')
      }
    }else{
      alert('Plesae provide all information')
    }
  }

  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.subcontainer}>
      <View style={styles.form}>
        <TextInput  placeholder='Full Name' value={fname} onChangeText={setFname} style={styles.inputfield} required/>
        <TextInput  keyboardType='email-address' placeholder='Email' value={email} onChangeText={setEmail} style={styles.inputfield} required/>
        <TextInput  placeholder='Phone Number' value={phone} onChangeText={setPhone} style={styles.inputfield} required/>
        <TextInput multiline numberOfLines={4}  placeholder='Your Message' value={message} onChangeText={setMessage} style={styles.inputfield} required/>
      </View>
      <View style={styles.mybutton}>
        <Button title='Submit' color='green' onPress={submitData}></Button>
      </View>
      <Text style={styles.successText}>{success}</Text>
      </View>
    </View>
    </ScrollView>
  )
}

export default Contact

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent:'center',
    backgroundColor:'#f0f2f5',
  },
  subcontainer:{
    marginTop:'20%',
    width:'98%',
    marginLeft:'1%',
    alignContent:'center',
    borderWidth:1,
    borderStyle:'solid',
    borderColor:'white',
    padding:50,
    backgroundColor:'white'
  },
 
  mybutton:{
    paddingTop:10
  },
  form:{
    width:'100%'
  },
  inputfield:{
    marginBottom:20,
    fontSize:16,
    padding:10,
    width:'100%',
    borderWidth:2,
    borderStyle:'solid',
    borderColor: 'darkgray',

  },
  successText:{
      paddingTop:20,
      textAlign:'center',
      color:'green',
      fontSize:18
  },
})