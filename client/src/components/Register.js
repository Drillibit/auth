import React, { Component } from 'react';
import RenderInfo from './RenderInfo';

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: ''|| 'Ivsn',
            email: '',
            password: ''
        }
    }
    onNameChange = (e) => {
        const name = e.target.value;
        this.setState(() => ({ name }));
    };
    onEmailChange = (e) => {
        const email = e.target.value;
        this.setState(() => ({ email }));
    }
    onPasswordChange = (e) => {
        const password = e.target.value;
        this.setState(() => ({ password }));
    };
    onSubmit = (e) => {
        e.preventDefault();
        this.setState({
            name: '',
            email: '',
            password: ''
        });
    };
    render(){
        return (
            <div className="container">
                <h1>Hello There</h1>
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Name"
                        autoFocus
                        value={this.state.name}
                        onChange={this.onNameChange}
                    />
                    <input
                        type="text"
                        placeholder="Email"
                        autoFocus
                        value={this.state.email}
                        onChange={this.onEmailChange}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        autoFocus
                        value={this.state.password}
                        onChange={this.onPasswordChange}
                    />
                    <button>Submit</button>
                </form>
                <RenderInfo state={this.state}/>
            </div>
        );
    }
};

export default Register;