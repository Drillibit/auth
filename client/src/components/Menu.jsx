import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 
import CurrentUser from './user/CurrentUser';
import Branches from './branch/Branches';

const Menu = ({ users }) => {
    const user = users[0];
    if(user){
        return (
            <nav>
                <Link to="/">Home</Link>
                <Link to="/register">Register</Link>
                <Link to="/add_material">Add Materials</Link>
                <Link to="/add_branch">Add Branch</Link>
                <CurrentUser />
                <Branches />
            </nav>
        );
    } else {
        return (
            <nav>
                <Link to="/">Home</Link>
                <Link to="/register">Register</Link>
            </nav>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(Menu);