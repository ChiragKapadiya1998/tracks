import React,{useContext} from 'react'
import {View} from 'react-native';
import {Input,Button, colors} from 'react-native-elements'
import { Context as LocationContext } from '../context/LoactionContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackFrom = () => {
    const {
        state: { name, recording, locations },
        startRecording,
        stopRecording,
        changeName
      } = useContext(LocationContext);
      const[saveTrack]=useSaveTrack();
    console.log(locations.length);
    return (<>
        <View style={{marginVertical:20}}>

            <Input 
             value={name}
             onChangeText={changeName}
            style={{marginHorizontal:20}} 
            placeholder="Enter Name"
            
            />
             {recording === true? (
                  <View style={{marginHorizontal:25,marginVertical:20,backgroundColor:'#d2dae2' }}>
                  <Button type='outline' title="Stop" onPress={stopRecording} />
                   </View>
             
            ) : (
                <View style={{marginHorizontal:25,marginVertical:20,backgroundColor:'#d2dae2' }}>
                <Button type='outline' title="Start Recording"  onPress={startRecording}/>
              </View>
                
            )}

            {!recording && locations.length ? (
                <View style={{marginHorizontal:25,marginVertical:20,backgroundColor:'#d2dae2' }}>
                <Button type='outline' title="Save Recording" onPress={saveTrack}/>
                 </View>
            ):null

            }
        </View>
        </>
    )
}

export default TrackFrom;
