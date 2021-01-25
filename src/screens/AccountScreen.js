import React,{useContext} from 'react';
import {View,StyleSheet,Text,SafeAreaView} from 'react-native';
import {Button} from 'react-native-elements';
import {Context as AuthContent} from '../context/AuthContext';
import { LinearGradient } from 'expo-linear-gradient';
const AccountScreen =({navigation})=>{
    const {Signout} =useContext(AuthContent)
    return (
        
        <View style={{backgroundColor:'#c7ecee',flex:1}}>
        <LinearGradient
        // Background Linear Gradient
        colors={['rgba(0,255,0,0.3)', 'transparent']}
        style={styles.background}
      />
        <SafeAreaView >
                <View style={{marginHorizontal:'5%',marginVertical:'10%',backgroundColor:'#fff'}}>
                    <Button title="Sign Out" type='outline' onPress={Signout,()=>navigation.navigate('SigninScreen')} />
                </View>
        </SafeAreaView>
     </View>
    );
    
};
const styles=StyleSheet.create({
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
      },
});

export default AccountScreen;