import React,{useState} from 'react'
import {View,StyleSheet,TouchableOpacity,Image,TextInput} from 'react-native';
import {Text, Button,Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

 const AuthFrom =({headerText,errorMessage,submitButtonText,onSubmit})=> {
    const [email ,setEmail]=useState('test@test.com');
    const [password,setPassword]=useState('');
    const [show,setShow]=useState(true)
    return (
        <>
        <View style={styles.input}>
            <Input  
               style={styles.emailInput} 
               label="Email" 
               placeholder='Your Email Id' 
               value={email} 
               onChangeText={setEmail}
               autoCapitalize='none'
               autoCorrect={false}
               leftIcon={
                <Icon
                  name='user'
                  size={24}
                  color='black'
                />
              }
               />
            <Input 
                secureTextEntry={show}
                style={styles.passwordInput} 
                label="Password" 
                placeholder='Your Password' 
                value={password} 
                onChangeText={setPassword}
                autoCapitalize='none'
                autoCorrect={false}
                leftIcon={
                    <Icon
                      name='lock'
                      size={24}
                      color='black'
                    />
                  
                  }
                />
        </View>
        <TouchableOpacity onPress={()=>{ setShow(show===true?false:true)}}>
        <View style={styles.showpassword}>
            <Text >Show Password</Text>
        </View>
        </TouchableOpacity>
        {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text>:null}
        <View style={styles.button}>
            <TouchableOpacity  onPress={ ()=> onSubmit({email,password },()=>navigation.navigate('TrackListScreen'))}>
                <View style={{padding: 10,backgroundColor:'#54a0ff',justifyContent:'center',alignItems:'center',borderRadius:30,shadowColor:'black',shadowOpacity:10,shadowRadius:10}}><Text>{submitButtonText}</Text></View>
            </TouchableOpacity>
        </View>

</>
    )
}

const styles = StyleSheet.create({
    continer:{
        flex:2,
        justifyContent:'center',
        backgroundColor:'#c7ecee',
    },
    header:{
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize: 30,
    },
    input:{
        marginHorizontal: '5%',
        marginTop:'10%',
        justifyContent:'center',
        alignItems:'center'
    },
    emailInput:{
        marginVertical:'2%',
    },
    passwordInput:{
        marginTop:'2%',
    },
    showpassword:{
     alignSelf:'flex-end',
     marginHorizontal:'6%'
    },
    errorMessage:{
     fontSize: 16,
     color:'red',
     marginHorizontal:'6%',
  
    },
    button:{
        marginHorizontal:'6%',
        marginVertical:'3%',
    }
})
export default AuthFrom;