import { useEffect, useState } from "react";
import AllItem from "./AllItem";

const AllList = (props) => {
    const [selectedField, setSelectedField] = useState('');
    const [selectedUniId, setSelectedUniId] = useState('');
    const [filterd, setFilter] = useState();
    
    let selField = props.data.length === 0 ? [] : Object.keys(props.data[0]);
    let sel =  selField.filter(item => item !== "id");

    const unisel = selectedField ? props.data.map(data => data[selectedField].toLowerCase()).filter((item,index,array) => array.indexOf(item) === index) : [];

    const filterHandler = () => {
        if(!selectedField) {
            alert('Please select field to filter');
        } else {
            const aaa = props.data.filter((filter) => filter[selectedField].toLowerCase() === selectedUniId);
            setFilter(aaa);
        }
    }
    useEffect(() => {
        setFilter(props.data);
    }, [props.data]);

    
    const allData = () => {
        setFilter(props.data);
        setSelectedField('');
        setSelectedUniId('');
    }

    return (
        <section>
            <div>
                <label htmlFor="selectfield">Selected Field:</label>
                <select name="sfield" id="selectfield" value={selectedField} onChange={e => setSelectedField(e.target.value)}>
                    <option value=''>Select Id</option>
                    {sel.map(item => <option key={item} value={item}>{item}</option>)}
                </select>

                <label htmlFor="uniqueid">Unique Id:</label>
                    <select name="uid" id="uniqueid" value={selectedUniId} onChange={e => setSelectedUniId(e.target.value)}>
                        <option value=''>Select Id</option>
                        {unisel.map(q => <option key={q}>{q}</option>)}
                    </select>

                <button onClick={filterHandler}>Filter</button>
                <button onClick={allData}>All</button>
            </div>
            <h2>All Data</h2>
            <table>
                <thead>
                    <tr>{sel.map(field => <th key={field+'head'}>{field}</th>)}</tr>
                </thead>
                <tbody>
                    {filterd && filterd.map(alldata => (<AllItem allData={alldata} allField={sel} key={alldata.id+'tr'} />))}
                </tbody>
            </table>
        </section>
    );
};
export default AllList;