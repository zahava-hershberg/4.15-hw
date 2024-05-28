import React from "react";
import axios from 'axios';
import withRouter from "./withRouter";


class AddCar extends React.Component {
    state = {
        currentPerson: '',
        car: {
            make: '',
            model: '',
            year: ''
        }

    }

    componentDidMount = async () => {
        const id = this.props.params.id;
        const { data } = await axios.get(`/api/people/getbyid?id=${id}`);
        this.setState({ currentPerson: data });
    }
    onTextChange = e => {
        const copy = { ...this.state.car };
        copy[e.target.name] = e.target.value;
        this.setState({ car: copy });
    }
    onSubmitClick = async () => {
        const id=this.state.currentPerson.id;
        await axios.post('/api/cars/addcar', { ...this.state.car, personId:this.state.currentPerson.id});
        this.props.navigate('/');
    }
   

    render() {
        const { make, model, year } = this.state.car;
        const { currentPerson } = this.state;
        return (

            <div className='container-mt-5'>
                <div className='row'>
                    <div className='col-md-6 offset-md-3 card bg-light p-4'>
                        <h2>Add a car for {currentPerson.firstName} {currentPerson.lastName} </h2>
                        <input type='text' onChange={this.onTextChange} value={make} className='form-control' name='make' placeholder='Make'></input>
                        <br />
                        <input type='text' onChange={this.onTextChange} value={model} className='form-control' name='model' placeholder='Model'></input>
                        <br />
                        <input type='text' onChange={this.onTextChange} value={year} className='form-control' name='year' placeholder='Year'></input>
                        <br />
                        <button onClick={this.onSubmitClick} className='btn btn-primary btn-lg btn-block'>Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(AddCar);