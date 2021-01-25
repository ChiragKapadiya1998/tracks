
import React,{useContext} from 'react'
import { StyleSheet, Text, View,ActivityIndicator } from 'react-native'
import MapView ,{Polyline,Circle} from 'react-native-maps'
import {Context as LoactionContext} from '../context/LoactionContext';
const Map = () => {
    const {state : {currentLoction} } =useContext(LoactionContext);
    // let points = [];
    // for (let i = 0; i < 20; i++) {
    //   if (i % 2 === 0) {
    //     points.push({
    //       latitude: 37.33233 + i * 0.001,
    //       longitude: -122.03121 + i * 0.001,
    //     });
    //   } else {
    //     points.push({
    //       latitude: 37.33233 - i * 0.002,
    //       longitude: -122.03121 + i * 0.001,
    //     });
    //   }
    // }
    if(!currentLoction){
        return<ActivityIndicator  size='large' style={{marginTop:200}}/>;
    }
    return (
        <View>
            <MapView 
                 initialRegion={{
                    ...currentLoction.coords,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
                region={{
                   ...currentLoction.coords,
                    // latitude: 37.33233,
                    // longitude: -122.03121,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                  }}
                
            style={{height:300,marginHorizontal:1,marginVertical:'2%'}} 
            >
             {/* <Polyline coordinates={points}></Polyline> */}
           <Circle 
                center={{ latitude: 37.33233, longitude: -122.03121 }}
                radius={30}
                strokeColor="rgba(158,158,255,1.0)"
                fillColor="rgba(158,158,255,0.3)"
           />
            </MapView>
        </View>
    );
};

export default Map;

const styles = StyleSheet.create({})
