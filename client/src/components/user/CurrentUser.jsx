import React from 'react'; 
import { connect } from 'react-redux';

const CurrentUser = (props) => {
    const user = props.users[0];
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