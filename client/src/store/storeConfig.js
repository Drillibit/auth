import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
//reducers
import UserReducer from '../reducers/UserReducer';
import BranchReducer from '../reducers/BranchReducer';
import MatReducer from '../reducers/MatReducer';

export default () => {
    const store = createStore(
        combineReducers({
            users: UserReducer,
            materials: MatReducer,
            branches: BranchReducer
        }),
        applyMiddleware(thunk)
    );
    return store;
};