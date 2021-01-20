import React from 'react';
import {View,StyleSheet,Text, Button,SafeAreaView} from 'react-native';

const AccountScreen =({navigation})=>{
    
    return (
    <SafeAreaView>
        <View>
            <Text style={{fontSize:48}}>AccountScreen</Text>
            <Button title="NEXT" onPress={()=>{navigation.navigate('SigninScreen')}} />
        </View>
    </SafeAreaView>
    );
    
};
const styles=StyleSheet.create({

});

export default AccountScreen;