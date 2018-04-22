import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StartLoginUser } from '../actions/user';

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
        const user = {
            username: this.state.username,
            password: this.state.password
        };
        this.props.StartLoginUser( user );
    };
    render(){
        console.log(this.props);
        return(
            <div>
                <h1>Login</h1>
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


const mapDispatchToProps = (dispatch) => {
    return {
        StartLoginUser: (user) => {
            dispatch(StartLoginUser(user))
        }
    }
}
export default connect(undefined, mapDispatchToProps)(Login);