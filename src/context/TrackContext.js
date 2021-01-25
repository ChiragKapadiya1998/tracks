import createDataContext from './createDataContext';
import tracker from '../api/tracker';
const trackReduecer= (state,action) => {
    switch(action.type){
        // case 'add to track':
        //     return {...state,trackadd:action.payload}
        case 'fetch_tracks' :
            return action.payload;
        default :
          return state;
      }
};
const fetchTracks=dispatch  => async() =>{ 
    const response=await tracker.get('/tracks');
    dispatch({type:'fetch_tracks',payload:response.data})
};
const createTreack= dispatch => async(name,locations) => { 
 await tracker.post('/tracks',{name,locations})

};

export const { Provider,Context} =createDataContext(
    trackReduecer,
    { fetchTracks,createTreack},
    []
);