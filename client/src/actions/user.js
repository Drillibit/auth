import axios from 'axios';

export const addUser = (user) => ({
    type: 'ADD_USER',
    user
});

export const StartAddUser = (userData = {}) => {
    return async (dispatch) => {
        const {
            username = '',
            email = '',
            password = '',
            status = ''
        } = userData;
        const user = {
            username,
            email,
            password,
            status
        };
        let res = await axios.post('/api/users/register', user);
        dispatch(addUser({ ...res.data }));
    }
};