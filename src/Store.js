import userReducer from './reducers/userReducer';
import accountReducer from './reducers/accountReducer'
import productReducer from './reducers/productReducer'
import productProfileReducer from './reducers/productProfileReducer'
import shelfReducer from './reducers/shelfReducer'
import pickOrderReducer from './reducers/pickOrderReducer'
import notificationReducer from './reducers/notificationReducer'
import billReducer from './reducers/billReducer'
import { createStore, combineReducers } from 'redux';

const rootReducer = combineReducers({
    userReducer: userReducer,
    accountReducer: accountReducer,
    productReducer: productReducer,
    productProfileReducer: productProfileReducer,
    shelfReducer: shelfReducer,
    pickOrderReducer: pickOrderReducer,
    notificationReducer: notificationReducer,
    billReducer: billReducer,
});

const configureStore = createStore(rootReducer);
export default configureStore;