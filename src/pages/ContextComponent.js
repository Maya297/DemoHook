import AddNewForm from "../components/users/AddNewForm";
import AllList from "../components/users/AllList";
import { useContext, useEffect, useReducer } from 'react';
import { DataContext } from "../store/contex";

const ContextComponent = (props) => {
    const {data: myArray , setData: setMyArray, reducer: reducer} = useContext(DataContext);
    const [state, dispatch] = useReducer(reducer, []);
    
    useEffect(() => {
        setMyArray(state);
    },[state])

    const AddDataHandler = (allData,id) => {
        if(id) {
            dispatch({type: "update",data1: allData,id:id});
        } else {
            dispatch({type: "add",data1: allData});
        }
    };
    const deleteData = (u) => {
        dispatch({type: "delete", data1: u});
    }

    return (
        <section>
            <h1>Add New Data</h1>
            <AddNewForm onAddForm={AddDataHandler} data={myArray} onRemoveForm={deleteData} />
            <AllList data={myArray}  />
        </section>
    );  
};
export default ContextComponent;