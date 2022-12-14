import { profileAPI, usersAPI } from "../../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "soc-network/profile/UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "soc-network/profile/SET_USER_PROFILE";
const SET_STATUS = "soc-network/profile/SET_STATUS";
const DELETE_POST = "soc-network/profile/DELETE_POST";

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
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: "4",
                message: action.postText,
                likeCount: 0
            };

            return {
                ...state,
                postData: [...state.postData, newPost]
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
            };
        case DELETE_POST:
            return {
                ...state,
                postData: state.postData.filter((p) => p.id != action.postId)
            }
        default:
            return state;
    }
};

export default profileReducer;

export const addPostActionCreator = (postText) => ({ type: ADD_POST, postText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile: profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });

export const getUserProfile = (userId) => async (dispatch) => {
    const response = await usersAPI.getUserProfile(userId);
    dispatch(setUserProfile(response));
}

export const getStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response));
};

export const updateStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status);
    if (response.resultCode === 0) {
        dispatch(setStatus(status));
    }
};