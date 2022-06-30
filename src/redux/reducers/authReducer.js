import { authAPI, usersAPI } from "../../api/api";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";
const LOGIN_ON_SERVICE = "LOGIN_ON_SERVICE";


const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    rememberMe: false,
    password: "",
    captcha: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        case LOGIN_ON_SERVICE:
            return {
                ...state,
                userId: action.userId,
                isAuth: true
            }
        default:
            return state;
    }
};

export default authReducer;

export const setAuthUserData = (userId, email, login) => ({ type: SET_AUTH_USER_DATA, data: { userId, email, login } });
export const loginOnService = (userId) => ({ type: LOGIN_ON_SERVICE, userId });


export const authMe = () => {
    return (dispatch) => {
        authAPI.me()
        .then(response => {
            if (response.resultCode === 0) {
                let { id, login, email } = response.data;
                dispatch(setAuthUserData(id, email, login));
            }
        })
    }
};

export const login = (email, password) => {
    return (dispatch) => {
        authAPI.login(email, password)
        .then(response => {
            if (response.resultCode === 0) {
                console.log(response)
                let { id } = response.data;
                dispatch(loginOnService(id));
            } else {
                console.error(response.messages);
            }
        })
    }
}