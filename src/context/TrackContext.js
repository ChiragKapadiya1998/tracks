import createDataContext from './createDataContext';
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

const createTreack= dispatch => (name) => { 
    dispatch({type:'fetch_tracks',payload:name})
};

export const { Provider,Context} =createDataContext(
    trackReduecer,
    { createTreack},
    []
);