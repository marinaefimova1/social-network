import { authAPI } from "../../api/api";

const SET_AUTH_USER_DATA = "soc-network/auth/SET_AUTH_USER_DATA";
const LOGIN_ON_SERVICE = "soc-network/auth/LOGIN_ON_SERVICE";


const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload
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

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_AUTH_USER_DATA,
    payload: { userId, email, login, isAuth }
});
export const loginOnService = (userId) => ({ type: LOGIN_ON_SERVICE, userId });


export const authMe = () => {
    return async (dispatch) => {
        const response = await authAPI.me();
        if (response.resultCode === 0) {
            let { id, login, email } = response.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    }
};

export const login = (email, password, rememberMe, setStatus) => {

    return async (dispatch) => {
        const response = await authAPI.login(email, password, rememberMe);
        if (response.resultCode === 0) {
            console.log(response);
            // let { id } = response.data;
            // dispatch(loginOnService(id));
            let { id, login, email } = response.data;
            dispatch(authMe(id, email, login, true));
        } else {
            setStatus(response.messages[0]);
            console.error(response.messages[0]);
        }
    }
};

export const logout = () => {
    return async (dispatch) => {
        const response = await authAPI.logout();
        if (response.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        } else {
            console.error(response.messages);
        }
    }
}