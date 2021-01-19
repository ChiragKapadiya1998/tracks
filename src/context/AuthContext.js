import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
const authreducer =(state,action)=>{
    switch(action.type){
        case 'add_error':
            return {...state, errorMessage:action.payload};
        case 'signup' :
            return{errorMessage:'',token:action.payload};
        default :
          return state;
    }
};
const Signup=(dispatch)=> async({email,password},callback)=>{
     try{
         const  response=await trackerApi.post('/signup',{email,password});
         await AsyncStorage.setItem('token',response.data.token);
         dispatch({type:'signup' ,payload:response.data.token});
         if(callback){
             
             callback();
         }
     } catch (err) {
        dispatch({type:'add_error',payload:'Something went wrong with sign up'})
     }
    };

const Signin =(dispatch)=>{
    return ()=>{

    };
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