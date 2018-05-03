import React, { Component } from 'react';
import CurrentUser from './user/CurrentUser';
import Branches from './branch/Branches';

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
                <h1 className="single_branch_header">Регистрация пользователя</h1>
                <div className="form_bg">
                    <form onSubmit={this.onSubmit}>
                        <div className="group">
                            <label>Имя</label>
                            <input
                                className="input-width"
                                type="text"
                                placeholder="Имя"
                                autoFocus
                                value={this.state.username}
                                onChange={this.onNameChange}
                            />
                        </div>
                        <div className="group">
                            <label>Email</label>
                            <input
                                className="input-width"
                                type="text"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.onEmailChange}
                            />
                        </div>
                        <div className="group">
                            <label>Пароль</label>
                            <input
                                className="input-width"
                                type="password"
                                placeholder="Пароль"
                                value={this.state.password}
                                onChange={this.onPasswordChange}
                            />
                        </div>
                        <button className="form_btn">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
};


export default RegisterForm;