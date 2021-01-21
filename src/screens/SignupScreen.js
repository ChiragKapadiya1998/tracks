import React ,{useContext}from 'react';
import {View,StyleSheet,Button,TouchableOpacity} from 'react-native';
import {Text, Input} from 'react-native-elements';
import AuthFrom from '../components/AuthFrom';
import {Context as AuthContext} from '../context/AuthContext';
import NavLink from '../components/NavLink';

const SignupScreen = ({navigation}) =>{
     const{state,Signup}=useContext(AuthContext);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        });
      }, []);

    return( <>
   
      <View style={styles.continer}>

         <AuthFrom 
         headerText="Sign Up for Tracker"
         errorMessage={state.errorMessage}
         submitButtonText='Sign Up'
         onSubmit={Signup}
         />
        <NavLink 
            onsubmit={()=>navigation.navigate('SigninScreen')} 
            text="Already have an account ? Sign in instead"
        />
      </View>
  
    </>);
};


const styles = StyleSheet.create({
    continer:{
        flex:2,
        justifyContent:'center',
        backgroundColor:'#c7ecee',
    },
   
})

export default SignupScreen;