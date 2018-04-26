export default (state = [], action) => {
    switch (action.type){
        case 'ADD_DISPLAY_MAT':
            return [
                ...state,
                action.mat
            ];
        case 'REMOVE_DISPLAY_MAT':
            return state.filter( ({id}) => id !== action.id );
        default:
            return state;
    }
};