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

    // addPost() {
    //     const newPost = {
    //         id: "4",
    //         message: this._state.profilePage.newPostText,
    //         likeCount: 0
    //     };
    
    //     this._state.profilePage.postData.push(newPost);
    //     this._state.profilePage.newPostText = "";
    
    //     this._subscriber(this._state);
    //     // rerenderEntrieTree(this._state);
    // },
    //  updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText;
    
    //     this._subscriber(this._state);
    //     // rerenderEntrieTree(this._state);
    // },
     _addMessage() {
        const newMessage = {
            id: "4",
            message: this._state.dialogsPage.newMessage,
            owner: true
        };
    
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessage = "";
    
        this._subscriber(this._state);
        // rerenderEntrieTree(this._state);
    },
    _updateMessage(newMessage) {
        this._state.dialogsPage.newMessage = newMessage;
    
        this._subscriber(this._state);
        // rerenderEntrieTree(this._state);
    },
    
    dispatch(action) {
        if (action.type === "ADD-POST") {
            const newPost = {
                id: "4",
                message: this._state.profilePage.newPostText,
                likeCount: 0
            };
        
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = "";
        
            this._subscriber(this._state);
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newPostText;
    
            this._subscriber(this._state);
        } else if (action.type === "CHANGE-MESSAGE") {
            this._updateMessage(action.newMessage);
        } else if (action.type === "ADD-MESSAGE") {
            this._addMessage();
        };
    }
}
export default store;