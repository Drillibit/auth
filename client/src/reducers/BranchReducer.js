export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_BRANCH':
            return [
                ...state,
                action.branch
            ];
        case 'REMOVE_BRANCH':
            return state.filter( ({_id}) => _id !== action._id);
        default:
            return state;
    }
};