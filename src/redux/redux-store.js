
import {combineReducers, createStore} from 'redux';
import profileReducer from './reducers/profileReducer';
import dialogsReducer from './reducers/dialogsReducer';
import sideBarReducer from './reducers/sideBarReducer';

let reducers = combineReducers({    
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sideBarReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;