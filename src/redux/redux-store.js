
import {applyMiddleware, combineReducers, createStore} from 'redux';
import profileReducer from './reducers/profileReducer';
import dialogsReducer from './reducers/dialogsReducer';
import sideBarReducer from './reducers/sideBarReducer';
import usersReducer from './reducers/usersReducer';
import authReducer from './reducers/authReducer';
import thunkMiddleware from 'redux-thunk';
import appReducer from './reducers/appReducer';

let reducers = combineReducers({    
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sideBar: sideBarReducer,
    auth: authReducer,
    app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;