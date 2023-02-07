import { useState } from "react";

const AddNewForm = (props) => {
    const [selected, setSelected] = useState('');
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [age, setAge] = useState('');
    
    const submitHandler = (event) => {
        event.preventDefault();
            const allData = {
                id: +new Date(),
                name: name,
                city: city,
                age: age
            };
            
        props.onAddForm(allData, parseInt(selected));

        setName('');
        setCity('');
        setAge('');
        setSelected('');
    };
   
    const updateHandler = (id) => {
        setSelected(id);
        const item = props.data.find((filter) => filter.id === parseInt(id));
        if(item){
            setName(item.name);
            setCity(item.city);
            setAge(item.age);
        }
    }

    const deleteData = () => {
        if(!selected) {
            alert('Please select an item to delete');
        } else {
            const u = props.data.findIndex(data => data.id === parseInt(selected));
            props.onRemoveForm(u);
            setSelected('');
            setName('');
            setCity('');
            setAge('');
        }
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
            <div>
                <label htmlFor='name'>Name</label>
                <input type='text' required id='name' value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div>
                <label htmlFor='city'>City</label>
                <input type='text' required id='city' value={city} onChange={e => setCity(e.target.value)} />
            </div>
            <div>
                <label htmlFor='age'>Age</label>
                <input type='text' required id='age' value={age} onChange={e => setAge(e.target.value)} />
            </div><br></br>
            <div>
                <button>{!selected ? 'Save' : 'Update'}</button>
            </div>
        </form><br></br>
        <div>
            <label htmlFor="selectid">Select Id:</label>
                <select name="select" id="selectid" value={selected} onChange={e => updateHandler(e.target.value)}>
                    <option value=''>Select Id</option>
                    {props.data.map(item => <option key={item.id} value={item.id}>{item.id}</option>)}
                </select>
                <button onClick={deleteData}>Delete</button>
                <br></br>
            </div>
      </div>
    );
};
export default AddNewForm;