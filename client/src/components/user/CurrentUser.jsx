import React from 'react'; 
import { connect } from 'react-redux';

const CurrentUser = (props) => {
    console.log(props);
    return (
        <div>
            <p>Name: {props.users.username || 'no'}</p>
            <p>Email: {props.users.email || 'no'}</p>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(CurrentUser);