import React,{useState} from 'react'
import {View,StyleSheet,TouchableOpacity} from 'react-native';
import {Text, Button,Input} from 'react-native-elements';

 const AuthFrom =({headerText,errorMessage,submitButtonText,onSubmit})=> {
    const [email ,setEmail]=useState('test@test.com');
    const [password,setPassword]=useState('');
    const [show,setShow]=useState(true)
    return (
        <>
        <View style={styles.header}>
            <Text style={styles.text}>{headerText}</Text>
        </View>
        <View style={styles.input}>
            <Input  
               style={styles.emailInput} 
               label="Email" 
               placeholder='Your Email Id' 
               value={email} 
               onChangeText={setEmail}
               autoCapitalize='none'
               autoCorrect={false}
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
                />
        </View>
        <TouchableOpacity onPress={()=>{ setShow(show===true?false:true)}}>
        <View style={styles.showpassword}>
            <Text >Show Password</Text>
        </View>
        </TouchableOpacity>
        {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text>:null}
        <View style={styles.button}>
            <Button title={submitButtonText} type='outline'  onPress={ ()=> onSubmit({email,password}) }/>
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
        margin:15,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize: 30,
    },
    input:{
        marginHorizontal: 15,
        marginTop:30,
        justifyContent:'center',
        alignItems:'center'
    },
    emailInput:{
        marginVertical:10,
    },
    passwordInput:{
        marginTop:10,
    },
    showpassword:{
     alignSelf:'flex-end',
     marginHorizontal:25
    },
    errorMessage:{
     fontSize: 16,
     color:'red',
     marginHorizontal:25,
  
    },
    button:{
        marginHorizontal:25,
        marginVertical:10,
    }
})
export default AuthFrom;