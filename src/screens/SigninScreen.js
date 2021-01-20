import React,{useContext} from 'react';
import {View,StyleSheet,Text,SafeAreaView,Button,TouchableOpacity} from 'react-native';
import AuthFrom from '../components/AuthFrom';
import {Context as AuthContext} from '../context/AuthContext';
import NavLink from '../components/NavLink'
const SigninScreen =({navigation})=>{

    const{state,Signin}=useContext(AuthContext);

    return (
  
          <View style={styles.continer}>

         <AuthFrom 
         headerText="Sign In for Tracker"
         errorMessage={state.errorMessage}
         submitButtonText='Sign In'
         onSubmit={Signin,() => navigation.navigate('AccountScreen')}
         />
            <NavLink 
            onsubmit={()=>navigation.navigate('SignupScreen')} 
            text="Don't have an account? Go back to Sign Up"
        />
           
      </View>
  
    );
};
const styles=StyleSheet.create({
    continer:{
        flex:2,
        justifyContent:'center',
        backgroundColor:'#ced6e0',
    },
    textnavi:{
        marginHorizontal:25,
        color:'#5f27cd'
    }
});

export default SigninScreen;