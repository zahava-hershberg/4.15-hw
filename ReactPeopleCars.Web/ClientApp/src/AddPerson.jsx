import React from "react";
import axios from 'axios';
import withRouter from "./withRouter";

class AddPerson extends React.Component {
    state = {
        person: {
            firstName: '',
            lastName: '',
            age: ''
        }
    }
    onTextChange = e => {
        const copy = { ...this.state.person };
        copy[e.target.name] = e.target.value;
        this.setState({ person: copy });
    }
    onSubmitClick = async () => {
        await axios.post('/api/people/addperson', this.state.person);           
        this.props.navigate('/');
    }

render(){
    const{firstName, lastName, age}=this.state.person;
    
    return (
        <div className='container-mt-5'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 card bg-light p-4'>
                    <h2>Add a new person </h2>
                    <input type='text' onChange={this.onTextChange} value={firstName} className='form-control' name='firstName' placeholder='First Name'></input>
                    <br />
                    <input type='text' onChange={this.onTextChange} value={lastName} className='form-control' name='lastName' placeholder='Last Name'></input>
                    <br />
                    <input type='text' onChange={this.onTextChange} value={age} className='form-control' name='age' placeholder='age'></input>
                    <br />
                    <button onClick={this.onSubmitClick} className='btn btn-primary btn-lg btn-block'>Submit</button>
                </div>
            </div>
        </div>
    )

}}
export default withRouter(AddPerson);