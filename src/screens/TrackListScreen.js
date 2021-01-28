import React, { useContext, useEffect, useReducer } from "react";
import { View,
    StyleSheet,
    Text,
    FlatList,
    TouchableOpacity,
    Button,} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import { LinearGradient } from 'expo-linear-gradient';
import {Context as TrackContext} from '../context/TrackContext';

const TrackListScreen = ({navigation}) =>{
    
const {state,createTreack}=useContext(TrackContext);
console.log(state);

useEffect(() => {
  createTreack();
  }, []);


    return <>
    <SafeAreaView forceInset={{top:'always'}} style={{flex:1,backgroundColor:'#fff'}}>
    <LinearGradient
        colors={['#c7ecee', 'white']}
        style={styles.background}
        start={{ x: 0.9, y: 0.6 }}
        end={{ x: 0.9, y: 1 }}
      />
     {/* <NavigationEvents onWillFocus={fetchTracks} />  */}
     <Text style={{ fontSize: 20 }}>TrackListScreen</Text>
     <Text>{state}</Text>
       {/* {state.map((item)=>{
         return(<Text>{item.name}</Text>)
       })} */}
        {/* <FlatList
          data={state}
          keyExtractor={(item) => item._id}
          renderItem={(item) => {
            return (
               <Text>{item.name}</Text>
            );
          }}
        /> */}
        <TouchableOpacity  onPress={()=>navigation.navigate('TrackDeScreen')}>
                <View style={{padding: 10,
                                justifyContent:'center',
                                alignItems:'center',
                                borderRadius:30,
                                shadowColor:'black',
                                shadowOpacity:10,
                                shadowRadius:10}}>
                  <Text>Go to Track details</Text>
                  </View>
            </TouchableOpacity>

    </SafeAreaView>
    </>
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

export default TrackListScreen;