import React,{useContext} from 'react';
import {View,StyleSheet,Text,Image,TouchableOpacity} from 'react-native';
import  {Button} from 'react-native-elements'
import {SafeAreaView} from 'react-navigation';
import { LinearGradient } from 'expo-linear-gradient';
import {Context as TrackContext} from '../context/TrackContext'
import MapView, { Polyline } from "react-native-maps";

const TrackDetailScreen =({navigation,route})=>{
const {state} =useContext(TrackContext);

const _id = route.params;
const track = state.find((t) => t._id === _id);
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
              <TouchableOpacity onPress={()=>navigation.goBack()}>
              <View style={{justifyContent:'center',alignItems:"center",flexDirection:'row'}} >
                <Image  style={{height:20,width:20}} source={require('../Image/back.png')} />
                <Button  title="Back" type='clear' onPress={()=>navigation.goBack()} />
              </View>
              <MapView
          initialRegion={{
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
            ...initialCoords,
          }}
        >
          <Polyline coordinates={track.locations.map((loc) => loc.coords)} />
        </MapView>
              </TouchableOpacity>
          ),
        });
      }, []);

    return(
        <SafeAreaView style={{flex:1}}>
           <LinearGradient
            // Background Linear Gradient
            colors={['rgba(0,255,0,0.3)', 'transparent']}
            style={styles.background}
          />
            <Text style={{fontSize:48}}>{track.name}</Text>
         
        </SafeAreaView>
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
  map: { height: 300, width: 300 },

});

export default TrackDetailScreen;