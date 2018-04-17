import React from 'react';
import { Link } from 'react-router-dom';
import CurrentUser from './user/CurrentUser';
import Branches from './branch/Branches';

const Menu = (props) => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/register">Register</Link>
            <CurrentUser />
            <Branches />
        </nav>
    );
};

export default Menu;