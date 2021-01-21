import createDataContext from './createDataContext';


const locationReducer =(state,action)=>{
switch(action.type){
    case 'add_current_location':
        return {...state,currentLoction:action.payload}
    default :
      return state;
}
};
const startReacording =dispatch => () =>{}

const stopReacording =dispatch=>()=>{}
const addLoction=dispatch=> (location) =>{
    dispatch({type:'add_current_location', payload:location});
}
export const {Context,Provider}=createDataContext(
    locationReducer,
    {startReacording,stopReacording,addLoction},
    {recording:false,locations:[],currentLoction:null}
);