
import {combineReducers, createStore} from 'redux';
import profileReducer from './reducers/profileReducer';
import dialogsReducer from './reducers/dialogsReducer';
import sideBarReducer from './reducers/sideBarReducer';
import usersReducer from './reducers/usersReducer';

let reducers = combineReducers({    
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sideBar: sideBarReducer
});

let store = createStore(reducers);

window.store = store;

export default store;