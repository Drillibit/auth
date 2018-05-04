export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_MATERIAL':
            return [
                ...state,
                action.material
            ];
        case 'EDIT_MATERIAL':
            return state.map((material) => {
                if(material._id === action._id){
                    return {
                        ...material,
                        ...action.updates
                    };
                } else {
                    return material;
                }
            });
        case 'REMOVE_MATERIAL':
            return state.filter( ({_id}) => _id !== action._id );    
        default:
            return state;
    }
};