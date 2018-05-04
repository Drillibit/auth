const filterReducerDefault = {
    name: '',
    sortBy: 'branch',
};

export default (state = filterReducerDefault, action) => {
    switch (action.type){
        case 'SET_NAME_FILTER':
            return {
                ...state,
                name: action.name
            };
        case 'SET_BRANCH_FILTER':
            return {
                ...state,
                sortBy: 'branch'
            };
        default:
            return state;
    } 
};