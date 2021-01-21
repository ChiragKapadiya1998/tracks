import React,{useContext} from 'react';
import {View,StyleSheet,Text,SafeAreaView} from 'react-native';
import {Button} from 'react-native-elements';
import {Context as AuthContent} from '../context/AuthContext'
const AccountScreen =({navigation})=>{
    const {Signout} =useContext(AuthContent)
    return (
        <View style={{backgroundColor:'#c7ecee',flex:1}}>
        <SafeAreaView >
                <View style={{marginHorizontal:30,marginVertical:50,backgroundColor:'#fff'}}>
                    <Button title="Sign Out" type='outline' onPress={Signout} />
                </View>
        </SafeAreaView>
     </View>
    );
    
};
const styles=StyleSheet.create({

});

export default AccountScreen;