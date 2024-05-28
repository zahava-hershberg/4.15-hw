import React from "react";
import axios from 'axios';
import withRouter from "./withRouter";
import { Link } from 'react-router-dom';

class DeleteCar extends React.Component {
    state = {
        cars:[]

    }
    componentDidMount = async () => {
        const id = this.props.params.id;
        const { data } = await axios.get(`/api/cars/getcarsbyid?id=${id}`);
        this.setState({ cars: data });

    }
    
    onDeleteClick = async () => {
        const id=this.props.params.id
        await axios.post('/api/cars/deletecars', { id: id })
        this.props.navigate('/');

    }
    render() {
        
        return (
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-12'>
                        <table className='table table-hover table-bordered table-striped'>
                            <thead>
                                <tr>
                                    <th>Make</th>
                                    <th>Model</th>
                                    <th>Year</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.state.cars.map(c => (
                                        <tr key={c.id}>
                                            <td>{c.make}</td>
                                            <td>{c.model}</td>
                                            <td>{c.year}</td>

                                        </tr>
                                       
                                    ))}
                                
                            </tbody>
                        </table>
                        <div className='row-mt-5'>
                            <div className='col-md-12'>
                                <h3>Are you sure you want to delete all these cars?</h3>
                            </div>
                        </div>
                        
                            <Link to={'/'}>
                            <div className='col-md-6' style={{ margintop: '20px' }}>
                                <button className='btn btn-primary w-100'>No</button>
                                </div>
                            </Link>
                       
                        <div className='col-md-6' style={{ margintop: '20px' }}>
                            <button onClick={this.onDeleteClick} className='btn btn-danger w-100'>Yes</button>
                            </div>

                       
                    </div>
                </div>
            </div>


        )
    }
}
export default withRouter(DeleteCar)