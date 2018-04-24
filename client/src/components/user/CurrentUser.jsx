import React from 'react'; 
import { connect } from 'react-redux';

const CurrentUser = ({ users }) => {
    const user = users[0];
    console.log(users);

    if(!user){
        return (
            <div>
                <p>You are not logged in</p>
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