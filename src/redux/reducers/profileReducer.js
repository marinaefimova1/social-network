const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const initialState = {
    postData: [
        { id: "1", message: "HI!", likeCount: 19 },
        { id: "2", message: "YO", likeCount: 2 },
        { id: "3", message: "It's my first post!", likeCount: 10 },
    ],
    newPostText: "test marina"
};

const profileReducer = (state = initialState, action) => {
    switch (action.type ) {
        case ADD_POST: 
            const newPost = {
                id: "4",
                message: state.newPostText,
                likeCount: 0
            };
        
            return {
                ...state,
                newPostText: "",
                postData: [...state.postData, newPost]
            };

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newPostText
            };
        
        default:
            return state;
    }    
};

export default profileReducer;

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newPostText: text });
