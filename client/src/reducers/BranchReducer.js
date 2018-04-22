export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_BRANCH':
            return [
                ...state,
                action.branch
            ];
        default:
            return state;
    }
};