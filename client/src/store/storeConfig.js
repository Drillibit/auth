import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import UserReducer from '../reducers/UserReducer';

export default () => {
    const store = createStore(
        combineReducers({
            users: UserReducer
        }),
        applyMiddleware(thunk)
    );
    return store;
};