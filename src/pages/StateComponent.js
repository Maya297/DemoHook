import { useState } from "react";
import AddNewForm from "../components/users/AddNewForm";
import AllList from "../components/users/AllList";

const StateComponent = (props) => {
    const [ myArray, setMyArray ] = useState([]);

    const AddDataHandler = (allData,id) => {
        if(id) {
            const index = myArray.findIndex(x => x.id === id);
            const newData = [ ...myArray ];
            newData[index] = allData;
            setMyArray(newData);    
        } else {
            const newData = [ ...myArray ];
            newData.push(allData)
            setMyArray(newData);
        }
    };
    const deleteData = (u) => {
        const newData1 = [ ...myArray ];
        newData1.splice(u, 1);
        setMyArray(newData1);
    }

    return (
        <section>
            <h1>Add New Data</h1>
            <AddNewForm onAddForm={AddDataHandler} data={myArray} onRemoveForm={deleteData} />
            <AllList data={myArray}  />
        </section>
    );  
};
export default StateComponent;