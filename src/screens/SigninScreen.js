import React,{useContext} from 'react';
import {View,StyleSheet,Text,SafeAreaView,Button,TouchableOpacity,Image} from 'react-native';
import AuthFrom from '../components/AuthFrom';
import {Context as AuthContext} from '../context/AuthContext';
import NavLink from '../components/NavLink';

const SigninScreen =({navigation})=>{

    const{state,Signin}=useContext(AuthContext);

    return (
       <View style={styles.continer}>
       <View style={{flex:2,justifyContent:'center',alignItems:'center'}}>
           <Image style={{height:'40%',width:'40%',}} source={require('../Image/Logo.jpg')}/>
           <Text style={{fontSize: 25,margin:10}}>Signin</Text>
       </View>
       <View style={{flex:4,backgroundColor:'#1abc9c',borderTopLeftRadius: 50,borderTopRightRadius:50}}>
           <AuthFrom 
           errorMessage={state.errorMessage}
           submitButtonText='Sign In'
           onSubmit={Signin,()=>navigation.navigate('AccountScreen')}
           />
           <NavLink 
           onsubmit={()=>navigation.navigate('SignupScreen')} 
           text="Don't have an account? Go back to Sign Up"
       />
       </View>

    </View>
  
    );
};
const styles=StyleSheet.create({
    continer:{
        flex:2,
        justifyContent:'center',
        backgroundColor:'#fff',
    },
});

export default SigninScreen;