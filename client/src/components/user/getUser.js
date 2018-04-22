import React from 'react';
import { connect } from 'react-redux';

const getUser = (props) => {
    console.log(props);
    return true;
};

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}
export default connect(mapStateToProps)(getUser);