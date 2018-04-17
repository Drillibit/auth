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

export const StartLoginUser = (userLog = {}) => {
    return async (dispatch) => {
        const {
            username = '',
            password = ''
        } = userLog;
        const user = {
            username,
            password
        };
        await axios.post('/api/users/login', user);
        let currentUser = await axios.get('/api/current_user');
        dispatch(addUser(currentUser.data));
    };
};

