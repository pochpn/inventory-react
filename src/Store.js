import userReducer from './reducers/userReducer';
import accountReducer from './reducers/accountReducer'
import { createStore, combineReducers } from 'redux';

const rootReducer = combineReducers({
    userReducer: userReducer,
    accountReducer: accountReducer,
});

const configureStore = createStore(rootReducer);
export default configureStore;