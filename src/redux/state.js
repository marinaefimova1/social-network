const state = {
    profilePage: {
        postData: [
            { id: "1", message: "HI!", likeCount: 19 },
            { id: "2", message: "YO", likeCount: 2 },
            { id: "3", message: "It's my first post!", likeCount: 10 },
        ]
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
        ]
    },
    sideBar: {
        friends: [
            { id: "1", name: "Marina", ava: "ava.jpeg" },
            { id: "2", name: "Slava", ava: "ava.jpeg" },
            { id: "3", name: "Syapick", ava: "ava.jpeg" } 
        ]
    }
};

export default state;
