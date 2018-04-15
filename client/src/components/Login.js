import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    };
    onNameChange = (e) => {
        const username = e.target.value;
        this.setState(() => ({ username }));
    };
    onPasswordChange = (e) => {
        const password = e.target.value;
        this.setState(() => ({ password }));
    };
    onSubmit = (e) => {
        e.preventDefault();
    };
    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <label>Name</label>
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={this.onNameChange}
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        value={this.state.password}
                        onChange={this.onPasswordChange}
                    />
                    <button>Login</button>
                </form>
            </div>
        );
    };
};

export default Login;