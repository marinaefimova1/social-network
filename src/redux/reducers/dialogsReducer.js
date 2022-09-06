const ADD_MESSAGE = "soc-network/dialogs/ADD-MESSAGE";

const initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {  
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                id: "4",
                message: action.message,
                owner: true
            };

            return {
                ...state,
                messages: [...state.messages, newMessage]
            };
           
        default:
            return state;
    }    
};

export default dialogsReducer;

export const addMessageActionCreator = (message) => ({type: ADD_MESSAGE, message});

