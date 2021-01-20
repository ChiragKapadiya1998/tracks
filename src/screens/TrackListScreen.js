import React from 'react';
import {View,StyleSheet,Text, Button,SafeAreaView} from 'react-native';
const TrackListScreen = ({navigation}) =>{
    

    return <>
    <SafeAreaView>
        <Text style={{fontSize:48}}>TrackListScreen</Text>
        <Button title="Go to  Track Detail"
            onPress={()=>navigation.navigate('TrackDetail')}
        />
    </SafeAreaView>
    </>
};
const styles=StyleSheet.create({

});

export default TrackListScreen;