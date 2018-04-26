export const addDisplayMat = (mat) => ({
    type: 'ADD_DISPLAY_MAT',
    mat 
});

export const removeDisplayMat = ({id} = {}) => ({
    type: 'REMOVE_DISPLAY_MAT',
    id
});