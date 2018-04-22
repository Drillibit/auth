import React from 'react'; 
import { connect } from 'react-redux';

const CurrentUser = ({ users }) => {
    const user = users[0] || users[1];

    if(!user){
        return (
            <div>
                <p>You are not logged in</p>
            </div>
        );
    } else {
        return (
            <div>
                <p>Name: {user.username}</p>
                <p>Email: {user.email}</p>
                <a href="/api/logout">Logout</a>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(CurrentUser);