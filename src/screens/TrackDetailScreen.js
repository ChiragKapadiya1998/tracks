import React from 'react';
import {View,StyleSheet,Text,Image,TouchableOpacity} from 'react-native';
import  {Button} from 'react-native-elements'
import {SafeAreaView} from 'react-navigation';

const TrackDetailScreen =({navigation})=>{

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
              <TouchableOpacity onPress={()=>navigation.goBack()}>
              <View style={{justifyContent:'center',alignItems:"center",flexDirection:'row'}} >
                <Image  style={{height:20,width:20}} source={require('../Image/back.png')} />
                <Button  title="Back" type='clear' onPress={()=>navigation.goBack()} />
              </View>
              </TouchableOpacity>
          ),
        });
      }, []);

    return(
        <SafeAreaView>
            <Text style={{fontSize:48}}>TrackDetailScreen</Text>
        </SafeAreaView>
    );
};
const styles=StyleSheet.create({

});

export default TrackDetailScreen;