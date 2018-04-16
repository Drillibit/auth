import React from 'react';
import { connect } from 'react-redux';
import { StartAddUser } from '../actions/user';
import RegisterForm from './RegisterForm';

const Register = (props) => {
    return (
        <div>
            <h1>Register</h1>
            <RegisterForm 
                onSubmit={(user) => {
                    props.dispatch(StartAddUser(user));
                }}
            />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(Register)