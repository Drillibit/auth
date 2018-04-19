import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
//reducers
import UserReducer from '../reducers/UserReducer';
import BranchReducer from '../reducers/BranchReducer';
import MatReducer from '../reducers/MatReducer';
import FlashMessageReducer from '../reducers/FlashMessageReducer';

export default () => {
    const store = createStore(
        combineReducers({
            users: UserReducer,
            materials: MatReducer,
            branches: BranchReducer,
            messages: FlashMessageReducer
        }),
        compose(
            applyMiddleware(thunk),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );
    return store;
};