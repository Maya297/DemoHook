const AllItem = (props) => {
    return (
        <tr>
            {props.allField.map(item => (
                <td key={item}>
                    {props.allData[item]}
                </td>
            ))}
        </tr>
    );
};
export default AllItem;