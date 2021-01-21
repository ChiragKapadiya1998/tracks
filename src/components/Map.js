import React,{useContext} from 'react'
import { StyleSheet, Text, View,ActivityIndicator } from 'react-native'
import MapView ,{Polyline,Circle} from 'react-native-maps'
import {Context as LoactionContext} from '../context/LoactionContext';
const Map = () => {
    const {state : {currentLoction} } =useContext(LoactionContext);
  
    if(!currentLoction){
        return<ActivityIndicator  size='large' style={{marginTop:200}}/>;
    }
    return (
        <View>
            <MapView 
                 initialRegion={{
                    // ...currentLocation.coords,
                    ...currentLoction.coords,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
                
            style={{height:300,marginHorizontal:5,marginVertical:20}} 
            >
           <Circle 
                center={currentLoction.coords}
                rediuis={15 }
                strokeColor='rgba(158,158,255,1.0)'
                fillColor='rgba(158,158,255,0.3)'
           />
            </MapView>
        </View>
    )
}

export default Map;

const styles = StyleSheet.create({})
