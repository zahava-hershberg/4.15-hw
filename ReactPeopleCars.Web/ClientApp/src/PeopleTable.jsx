import React from "react";
import axios from 'axios';
import PersonRow from "./PersonRow";
import { Link } from 'react-router-dom';


class PeopleTable extends React.Component {
    state = {
        people: []

    }
    componentDidMount = async () => {

        this.loadPeople();
    }

    loadPeople = async () => {
        const response = await axios.get('/api/people/getall');
        this.setState({ people: response.data });

    }
    render() {
        const { people } = this.state
        return (

            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-12'>

                        <Link to={'/addperson'}>
                            <button className='btn btn-success btn-lg w-100'>Add Person</button>
                        </Link>
                        <div className='container mt-3'>
                            <table className='table table-hover table-bordered table-striped'>
                                <thead>
                                    <tr>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Age</th>
                                        <th>Car Count</th>
                                        <th>Add Car</th>
                                        <th>Delete Car</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {people.map(p => (
                                        <PersonRow
                                            key={p.id}
                                            person={p}

                                        />
                                    ))}

                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default PeopleTable