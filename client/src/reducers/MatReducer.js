export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_MATERIAL':
            return [
                ...state,
                action.material
            ];
        case 'REMOVE_MATERIAL':
            return state.filter( ({_id}) => _id !== action._id );    
        default:
            return state;
    }
};