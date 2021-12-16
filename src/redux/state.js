let rerenderEntrieTree = () => {};

export const subscribe = (observer) => {
    rerenderEntrieTree = observer;
};
const state = {
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
};
// window.state = state;

export const addPost = () => {
    const newPost = {
        id: "4",
        message: state.profilePage.newPostText,
        likeCount: 0
    };

    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText = "";

    rerenderEntrieTree(state);
};

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;

    rerenderEntrieTree(state);
};

export const addMessage = () => {
    const newMessage = {
        id: "4",
        message: state.dialogsPage.newMessage,
        owner: true
    };

    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessage = "";

    rerenderEntrieTree(state);
}

export const updateMessage = (newMessage) => {
    state.dialogsPage.newMessage = newMessage;

    rerenderEntrieTree(state);
};

export default state;
