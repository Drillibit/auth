import axios from 'axios';
import { addUser } from './user';
import { addBranch } from './branch';
import { addMaterial } from './material';

export const fetchData = () => {
    return async (dispatch) => {
        let resBranch = await axios.get('/api/branches');
        resBranch.data.branches.map((branch) => {
            dispatch(addBranch({ ...branch }));
            return branch;
        });

        let resMat = await axios.get('/api/collections');
        resMat.data.materials.map((material) => {
            dispatch(addMaterial({ ...material }));
            return material;
        });
        let currentUser = await axios.get('/api/current_user');
        dispatch(addUser(currentUser.data));
    };
};
