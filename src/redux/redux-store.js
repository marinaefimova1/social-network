
import {combineReducers, createStore} from 'redux';
import profileReducer from './reducers/profileReducer';
import dialogsReducer from './reducers/dialogsReducer';
import sideBarReducer from './reducers/sideBarReducer';
import usersReducer from './reducers/usersReducer';
import authReducer from './reducers/authReducer';

let reducers = combineReducers({    
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sideBar: sideBarReducer,
    auth: authReducer
});

let store = createStore(reducers);

window.store = store;

export default store;