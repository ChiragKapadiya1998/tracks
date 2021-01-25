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

import { ListItem } from "react-native-elements";

const TrackListScreen = ({navigation}) =>{
    
const {state,fetchTracks}=useContext(TrackContext);
console.log(state);

useEffect(() => {
    const listener = navigation.addListener("focus", () => {
      fetchTracks;
    });

    return listener;

    // return () => {
    //   listener.remove();
    // };
  }, []);


    return <>
    <SafeAreaView forceInset={{top:'always'}} style={{flex:1}}>
    <LinearGradient
        // Background Linear Gradient
        colors={['rgba(0,255,0,0.3)', 'transparent']}
        style={styles.background}
      />
     {/* <NavigationEvents onWillFocus={fetchTracks} />  */}
     <Text style={{ fontSize: 20 }}>TrackListScreen</Text>
        <FlatList
          data={state}
          keyExtractor={(item) => item._id}
          renderItem={(item) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("TrackDetail", { _id:item._id });
                }}
              >
                <ListItem chevron title={item.name} />
              </TouchableOpacity>
            );
          }}
        />
        <Button
          title="Go to Track details"
          onPress={() => {
            navigation.navigate("TrackDetail", { _id: item._id });
          }}
        />
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