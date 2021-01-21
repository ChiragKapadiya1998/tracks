import '../screens/_MockLocation'
import React,{useState,useEffect,useContext} from 'react';
import {View,StyleSheet} from 'react-native';
import {Text } from 'react-native-elements';
import {SafeAreaView} from 'react-navigation';
import {requestPermissionsAsync,watchPositionAsync,Accuracy} from 'expo-location';
import Map from '../components/Map';
import {Context as LoactionContext} from '../context/LoactionContext'
const TrackCreateScreen =()=>{
    const [err,setErr] =useState(null);
     
    const {addLoction}=useContext(LoactionContext)

    const startWatching =async ()=>{
        try{
            await requestPermissionsAsync();
            await watchPositionAsync({
                accuracy:Accuracy.BestForNavigation,
                timeInterval:1000,
                distanceInterval:10
            },location=>{
                addLoction(location);
            });
        }catch(e){
            setErr(e);
            
        }
    }
    useEffect(()=>{
     startWatching();
    },[])
    return (
    <SafeAreaView forceInset={{top:'always'}}>
        <Text h3>Create a Track</Text>
        <Map /> 
        {err ? <Text>Please enable loaction services</Text>:null}
    </SafeAreaView>
        );
};
const styles=StyleSheet.create({

});

export default TrackCreateScreen;