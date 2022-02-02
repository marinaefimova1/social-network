const CHANGE_MESSAGE = "CHANGE-MESSAGE";
const ADD_MESSAGE = "ADD-MESSAGE";

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
    ],
    newMessage: "add your message"
};

const dialogsReducer = (state = initialState, action) => {  
    switch (action.type) {
        case CHANGE_MESSAGE:
            return {
                ...state, 
                newMessage: action.newMessage 
            };

        case ADD_MESSAGE:
            const newMessage = {
                id: "4",
                message: state.newMessage,
                owner: true
            };

            return {
                ...state,
                newMessage: "",
                messages: [...state.messages, newMessage]
            };
           
        default:
            return state;
    }    
};

export default dialogsReducer;

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const changeMessageActionCreator = (text) => ({type: CHANGE_MESSAGE, newMessage: text});
