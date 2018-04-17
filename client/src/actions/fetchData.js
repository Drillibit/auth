import axios from 'axios';
import { addUser } from './user';

export const fetchData = () => {
    return async (dispatch) => {
        let currentUser = await axios.get('/api/current_user');
        console.log(currentUser.data.username);
        dispatch(addUser(currentUser.data));
    };
};
