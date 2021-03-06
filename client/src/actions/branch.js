import axios from 'axios';

export const addBranch = (branch) => ({
    type: 'ADD_BRANCH',
    branch
});

export const startAddBranch = (branchData = {}) => {
    return async (dispatch) => {
        const {
            branchName = '',
            anglePrice = 0,
            cutPrice = 0,
            customStitch = 0,
            stitchAlignment = 0,
            multiMaterial = 0,
            curvePrice = 0,
            packPrice = 0
        } = branchData;
        const branch = {
            branchName,
            anglePrice,
            cutPrice,
            customStitch,
            stitchAlignment,
            multiMaterial,
            curvePrice,
            packPrice
        };
        let res = await axios.post('/api/branch', branch);
        dispatch(addBranch({ ...res.data }));
    };
};

const removeBranch = ({ _id } = {}) => ({
    type: 'REMOVE_BRANCH',
    _id
});

export const startRemoveBranch = ({ _id } = {}) => {
    return async (dispatch) => {
        await axios.delete(`/api/remove-branch/${_id}`, _id);
        dispatch(removeBranch({ _id }));
    }
};