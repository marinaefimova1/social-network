import profileReducer from './reducers/profileReducer';
import dialogsReducer from './reducers/dialogsReducer';
import sideBarReducer from './reducers/sideBarReducer';

let store = {
    _subscriber() {
        console.log("no subscribers");
    },
    _state: {
        profilePage: {
            postData: [
                { id: "1", message: "HI!", likeCount: 19 },
                { id: "2", message: "YO", likeCount: 2 },
                { id: "3", message: "It's my first post!", likeCount: 10 },
            ],
            newPostText: "test marina"
        },
        dialogsPage: {
            dialogs: [
                { id: "1", name: "Marina" },
                { id: "2", name: "Slava" },
                { id: "3", name: "Syapick" },
                { id: "4", name: "Danil" }
            ],
            messages: [
                { id: "1", message: "HI!", owner: true },
                { id: "2", message: "YO", owner: false },
                { id: "3", message: "What are you doing?", owner: true },
            ],
            newMessage: "add your message"
        },
        sideBar: {
            friends: [
                { id: "1", name: "Marina", ava: "ava.jpeg" },
                { id: "2", name: "Slava", ava: "ava.jpeg" },
                { id: "3", name: "Syapick", ava: "ava.jpeg" }
            ]
        }
    },

    subscribe(observer) {
        this._subscriber = observer;
    },
    getState() {
        return this._state;
    },  
    
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sideBarReducer(this._state.sideBar, action);
        
        this._subscriber(this._state);
    }
};


export default store;