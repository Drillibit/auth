import React from 'react';
import { Link } from 'react-router-dom';
import CurrentUser from './user/CurrentUser';

const Menu = (props) => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/register">Register</Link>
            <CurrentUser />
        </nav>
    );
};

export default Menu;