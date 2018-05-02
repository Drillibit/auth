import React from 'react'; 
import { connect } from 'react-redux';
import '../../styles/current_user.css';

const CurrentUser = ({ users }) => {
    const user = users[0];
    console.log(users);

    if(!user){
        return (
            <div>
                <p>Вы не зашли :)</p>
            </div>
        );
    } else {
        return (
            <div className="user_card">
                <div className="user_info">
                    <p>Имя: {user.username}</p>
                    <p>Статус: {user.email}</p>
                </div>
                <a className="button_red" href="/api/logout">Выйти</a>
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