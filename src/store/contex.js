import { createContext, useState } from 'react';
import ContextComponent from '../pages/ContextComponent';

const reducer = (state, action) => {
    if(action.type==="add") {
        state = [...state];
        state.push(action.data1);
        return state;
    }
    if(action.type==="update") {
         const index = state.findIndex(x => x.id === action.id);
         state = [...state];
         state[index] = action.data1;
         return state;
    }
    if(action.type==="delete") {
        state = [...state];
        state.splice(action.data1,1);
        return state;
    }
  };

export const DataContext = createContext({
    data: [],
    setData: (data) => {},
    reducer: (state, action) =>  {}
});

 const ContextComponentProvider = (props) => {
    const [ myArray, setMyArray ] = useState([]);
    const context = {
        data: myArray,
        setData: setMyArray,
        reducer: reducer
    };

    return (
        <DataContext.Provider value={context}>
           <ContextComponent />
        </DataContext.Provider>
    );  
};
export default ContextComponentProvider;