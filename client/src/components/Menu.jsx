import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 
import CurrentUser from './user/CurrentUser';
import Branches from './branch/Branches';

const Menu = ({ users }) => {
    const user = users[0];
    if(user){
        return (
            <nav className="menu_main">
                <div className="wrapper">
                    <div className="menu_top">
                        <ul className="menu_wrapper">
                            <Link className="menu_link" to="/">Главная</Link>
                            <Link className="menu_link" to="/add_material">Добавить материал</Link>
                            <Link className="menu_link" to="/add_branch">Добавить филиал</Link>
                        </ul>
                            <Branches />
                    </div>
                    <CurrentUser />
                </div>
            </nav>
        );
    } else {
        return (
            <nav className="menu_main">
                <Link className="menu_link" to="/">Главная</Link>
                <Link className="menu_link" to="/register">Зарегистрироваться</Link>
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