import React ,{useContext}from 'react';
import {View,StyleSheet,Button,TouchableOpacity,Image,Animated} from 'react-native';
import {Text, Input} from 'react-native-elements';
import AuthFrom from '../components/AuthFrom';
import {Context as AuthContext} from '../context/AuthContext';
import NavLink from '../components/NavLink';
import useRotation from '../Animation/useRotation';
const SignupScreen = ({navigation}) =>{
     const{state,Signup}=useContext(AuthContext);
     const rotate = useRotation();

     // transform image to rotate
      const animatedStyle = { transform: [ { rotate } ] };
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        });
      }, []);

 
    return( <>
       
      <View style={styles.continer}>
          <View style={{flex:2,justifyContent:'center',alignItems:'center'}}>
          <Animated.Image
                style={[styles.image, animatedStyle]}
                source={require('../Image/Logo.jpg')}
                resizeMode="contain"
            />
            {/* <Image style={{height:'40%',width:'40%',tr}} /> */}
            <Text style={{fontSize: 25,margin:10}}>Signup</Text>
          </View>
          <View style={{flex:4,backgroundColor:'#1abc9c',borderTopLeftRadius: 50,borderTopRightRadius:50}}>
          
               <AuthFrom 
              errorMessage={state.errorMessage}
              submitButtonText='Sign Up'
              onSubmit={Signup}
              />
              <NavLink 
                onsubmit={()=>navigation.navigate('SigninScreen')} 
                text="Already have an account ? Sign in instead"
            />
          </View>
      </View>
  
    </>);
};


const styles = StyleSheet.create({
    continer:{
        flex:1,
        //justifyContent:'center',
        backgroundColor:'#fff',
    },
    image: {
      width: 150,
      height: 150,
  },
   
})

export default SignupScreen;