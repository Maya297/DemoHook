import { useDispatch, useSelector } from "react-redux";
import AddNewForm from "../components/users/AddNewForm";
import AllList from "../components/users/AllList";
import { reduxAction } from "../store/reducSlice";

const ReduxComponent = (props) => {
    const dispatch = useDispatch();
    const {data} = useSelector((state) => state);

    const AddDataHandler = (allData,id) => {
      if(id) {
        dispatch(reduxAction.updateHandler({allData, id}))
      } else {
        dispatch(reduxAction.addHandler(allData))
      }
    };
    
    const deleteData = (u) => {
       dispatch(reduxAction.deleteHandler(u))
    }

    return (
        <section>
            <h1>Add New Data</h1>
            <AddNewForm onAddForm={AddDataHandler} data={data} onRemoveForm={deleteData} />
            <AllList data={data} />
        </section>
    );  
};
export default ReduxComponent;