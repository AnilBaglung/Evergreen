import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native'
import React, {useState, useEffect} from 'react'

const Login = ({navigation}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken]= useState('')

    useEffect(()=>{
      if(token){
        navigation.navigate('Home')
        
      }
      else{
        navigation.navigate('Login')
    }
    }, [token]) 

    

    const loginToHome =(e)=>{
      e.preventDefault()
      fetch('http://192.168.178.22:8000/api-token-auth/',{
        method:'POST',
        headers:{
          Accept: 'application/json',
          'Content-type':'application/json'
        },
        body:JSON.stringify({'username': username, 'password':password})
      }).then(resp=>resp.json()) 
      .then(data=>setToken(data.token))
      .then(console.log(token))
      {
        if (token){
        navigation.navigate('Home');
          }
      else{
        alert('Invalid Username or Password')
      }
      }
    }
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.secondcontainer}>
        <Text style={styles.mytext}>EverGreen Financial</Text>
        <View style={styles.myform}>
          <TextInput  textContentType='username' name='username' testID='username' placeholder='Username' style={styles.textfield} value={username} onChangeText={setUsername} required></TextInput>
          <TextInput  textContentType='password' name ='password' testID='password' placeholder='password' style={styles.textfield} value={password} onChangeText={setPassword} secureTextEntry required ></TextInput>
        </View>
        <View style={styles.mybutton}>
          <Button title='Sign In'  onPress={loginToHome}></Button>
        </View>
        <Text style={styles.noaccounttext}>Don't have account?</Text>
        <View style={styles.mybutton}>
          <Button title='Create New Account'   color='green'  onPress={()=> navigation.navigate('Register')}></Button>
        </View>
      </View>

    </View>
    </ScrollView>
  );
}
export default Login

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
      marginTop:'20%',
      width:'90%',
      marginLeft:'5%',
      marginRight:'5%',
      alignContent:'center',
      borderWidth:1,
      borderStyle:'solid',
      borderColor:'white',
      padding:50,
      backgroundColor:'white'
    },
    mytext:{
      fontSize:25,
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

