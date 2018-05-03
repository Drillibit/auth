import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StartLoginUser } from '../actions/user';
import { Redirect } from 'react-router';
import '../styles/branch_form.css';
import '../styles/single_branch.css';

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
        if(!this.props.users[0]){
            return (
                <div className="container">
                    <h1 className="single_branch_header">KVK UNION</h1>
                    <div className="form_bg">
                    <form onSubmit={this.onSubmit}>
                        <div className="group">
                            <label>Имя</label>
                            <input
                                className="input-width"
                                type="text"
                                value={this.state.name}
                                onChange={this.onNameChange}
                            />
                        </div>
                        <div className="group">
                            <label>Пароль</label>
                            <input
                                className="input-width"
                                type="password"
                                value={this.state.password}
                                onChange={this.onPasswordChange}
                            />
                        </div>
                        <button className="form_btn">Войти</button>
                    </form>
                </div>
            </div>
            );
        } else {
            return (
                <Redirect to="/add_branch" />
            );
        }

    };
};

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        StartLoginUser: (user) => {
            dispatch(StartLoginUser(user))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);