import { profileAPI, usersAPI } from "../../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

const initialState = {
    postData: [
        { id: "1", message: "HI!", likeCount: 19 },
        { id: "2", message: "YO", likeCount: 2 },
        { id: "3", message: "It's my first post!", likeCount: 10 },
    ],
    newPostText: "test marina",
    profile: null,
    status: ""
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
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }    
};

export default profileReducer;

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newPostText: text });
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile: profile});
export const setStatus = (status) => ({type: SET_STATUS, status});

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getUserProfile(userId)
    .then(response => {
        dispatch(setUserProfile(response));
    })
}

export const getStatus = (userId) => (dispatch => {
    profileAPI.getStatus(userId)
    .then(response =>{
        dispatch(setStatus(response));
    });
});

export const updateStatus = (status) => (dispatch => {
    profileAPI.updateStatus(status)
    .then(response =>{
        if (response.resultCode === 0){
            dispatch(setStatus(status));
        }
    });
});