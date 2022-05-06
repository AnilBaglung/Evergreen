import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native'
import React, {useState} from 'react'

 const Register= ({navigation}) => {
     const [name, setName] = useState('')
     const [email, setEmail] = useState('')
     const [user, setUser] = useState('')
     const [password, setPassword] = useState('')

     const data = {'first_name':name,'email':email, 'username':user, 'password':password}


    const loginPage =()=>{
        if(name && email && user && password){
            if(password.length<6){
                alert('password must have at least 6 charecter' )
            }
            else if(!email.includes('@' && '.com')){
                alert('Invalid email')
            }
            else{
              fetch('http://192.168.178.22:8000/user/',{
                method:'POST',
                headers:{
                  'Content-type':'application/json'
                },
                body:JSON.stringify(data)
              }).then(resp=>resp.json())
              .then(alert('Account created successfully'))
            navigation.navigate('Login')}
        }
        else{
            alert('All field must not be empty')
        }
    }
   
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.secondcontainer}>
        <Text style={styles.mytext}>EverGreen Financial</Text>
        <View style={styles.myform}>
          <TextInput   testID='name' placeholder='Fullname' style={styles.textfield} value={name} onChangeText={setName} required></TextInput>
          <TextInput keyboardType='email-address'  testID='email' placeholder='Email' style={styles.textfield} value={email} onChangeText={setEmail} required></TextInput>
          <TextInput   testID='username' placeholder='Username' style={styles.textfield} value={user} onChangeText={setUser} required></TextInput>
          <TextInput   testID='password' placeholder='password' style={styles.textfield} secureTextEntry value={password} onChangeText={setPassword} required></TextInput>
        </View>
        <View style={styles.mybutton}>
          <Button title='Sign Up'  onPress={loginPage}></Button>
        </View>
        <Text style={styles.noaccounttext} onPress={()=>navigation.navigate('Login')}>Already have an account?</Text>
      </View>
    </View>
    </ScrollView>

  );
}
export default Register

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      alignContent:'center',
      backgroundColor:'#f0f2f5',
    },
    secondcontainer:{
      marginTop:'10%',
      width:'90%',
      marginLeft:'5%',
      alignContent:'center',
      borderWidth:1,
      borderStyle:'solid',
      borderColor:'white',
      padding:50,
      backgroundColor:'white'
    },
    mytext:{
      fontSize: 25,
      marginBottom:30,
      color:'blue',
      textAlign:'center'
  
    },
    mybutton:{
      paddingTop:10
    },
    myform:{
      width:'100%'
    },
    textfield:{
      marginBottom:20,
      fontSize:16,
      padding:10,
      width:'100%',
      borderWidth:1.5,
      borderColor: 'darkgray',
  
    },
    noaccounttext:{
        paddingTop:20,
        textAlign:'center',
        color:'blue'
    },
    
  
  });