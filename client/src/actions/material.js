import axios from 'axios';

export const addMaterial = (material) => ({
    type: 'ADD_MATERIAL',
    material
});

export const startAddMaterial = (materialData = {}) => {
    return async (dispatch) => {
        const {
            branch = '',
            name = '',
            price = 0,
            priceGold = 0,
            pricePlatinum = 0
        } = materialData;
        const material = {
            branch,
            name,
            price,
            priceGold,
            pricePlatinum
        };
        let res = await axios.post('/api/materials', material);
        dispatch(addMaterial({ ...res.data }));
    };
};

const removeMaterial = ({ _id } = {}) => ({
    type: 'REMOVE_MATERIAL',
    _id
});

export const startRemoveMaterial = ({ _id } = {}) => {
    return async (dispatch) => {
        await axios.delete(`/api/remove/${_id}`, _id);
        dispatch(removeMaterial({ _id }));
    }
};