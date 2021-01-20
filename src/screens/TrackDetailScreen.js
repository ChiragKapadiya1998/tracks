import React from 'react';
import {View,StyleSheet,Text,Button} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const TrackDetailScreen =({navigation})=>{

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
            <Button  title="< Back" onPress={()=>navigation.goBack()} />
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