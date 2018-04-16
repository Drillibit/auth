import React, { Component } from 'react';
import RenderInfo from './RenderInfo';

class RegisterForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }
    onNameChange = (e) => {
        const username = e.target.value;
        this.setState(() => ({ username }));
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
        this.setState(() => ({
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }));
        this.props.onSubmit({
            ...this.state
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
                        value={this.state.username}
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


export default RegisterForm;