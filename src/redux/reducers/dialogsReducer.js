const CHANGE_MESSAGE = "CHANGE-MESSAGE";
const ADD_MESSAGE = "ADD-MESSAGE";

const dialogsReducer = (state, action) => {  

    switch (action.type) {
        case CHANGE_MESSAGE: 
            state.newMessage = action.newMessage;
            return state;
        case ADD_MESSAGE:
            const newMessage = {
                id: "4",
                message: state.newMessage,
                owner: true
            };
        
            state.messages.push(newMessage);
            state.newMessage = "";
            return state;
        
        default:
            return state;
    }    
};

export default dialogsReducer;

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const changeMessageActionCreator = (text) => ({type: CHANGE_MESSAGE, newMessage: text});
