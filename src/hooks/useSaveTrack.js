import {useContext} from 'react';
import { Context as TrackContext } from '../context/TrackContext';
import {Context as LoactionContext} from '../context/LoactionContext';


export default () =>{
 const {createTreack} =useContext(TrackContext);
 const {state:{name,locations},reset}=useContext(LoactionContext);
//console.log(name,locations.length);

 const saveTrack= () => {
  
  createTreack(name,locations);
   reset(); 
 };
 return[saveTrack];
};