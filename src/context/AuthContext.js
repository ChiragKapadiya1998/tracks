import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import {navigate} from '../navigationRef';
const authreducer =(state,action)=>{
    switch(action.type){
        case 'add_error':
            return {...state, errorMessage:action.payload};
        case 'signin' :
            return{errorMessage:'',token:action.payload};
        // case 'clear_message':
        //     return{...state, errorMessage:' '}
        default :
          return state;
    }
};
// const clearErrorMessage =dispatch =>{
//     dispatch({type:'clear_message'})
// }
const Signup=(dispatch)=> async({email,password},callback)=>{
     try{
         const  response=await trackerApi.post('/signup',{email,password});
         await AsyncStorage.setItem('token',response.data.token);
         dispatch({type:'signin' ,payload:response.data.token});
         navigator('TrackListScreen')
     } catch (err) {
        dispatch({type:'add_error',payload:'Something went wrong with sign up'})
     }
    };

const Signin =(dispatch)=>async({email,password})=>{
    try{
        const  response=await trackerApi.post('/signin',{email,password});
         await AsyncStorage.setItem('token',response.data.token);
         dispatch({type:'signin' ,payload:response.data.token});
         navigator('TrackListScreen')
    } catch (err) {
       dispatch({type:'add_error',payload:'Something went wrong with sign up'})
    }

    };

const Signout=(dispatch)=>{
    return ()=>{

    };
};

export const { Provider,Context}=createDataContext(
    authreducer,
    {Signin,Signup,Signout},
    {token:null, errorMessage: ' '},
);