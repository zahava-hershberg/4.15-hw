import React from "react";
import {Link} from 'react-router-dom';
function PersonRow({person}) {
    const { id, firstName, lastName, age } = person;
return(
    <tr>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{age}</td>
        <td>{person.cars.length}</td>
        <td>
            <Link to={`/addcar/${id}`}>
                <button className='btn btn-primary'>Add Car</button>
            </Link>
        </td>
        <td>
            <Link to={`/deletecar/${id}`}>
                <button className='btn btn-danger'>Delete Car</button>
            </Link>
        </td>
    </tr>

)}
export default PersonRow;