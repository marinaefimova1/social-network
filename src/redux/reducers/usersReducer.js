import { usersAPI } from "../../api/api";
import { updateObjectInArray } from "../../utils/validators/object-helpers";

const FOLLOW = "soc-network/users/FOLLOW";
const UNFOLLOW = "soc-network/users/UNFOLLOW";
const SET_USERS = "soc-network/users/SET_USERS";
const SET_CURRENT_PAGE = "soc-network/users/SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "soc-network/users/SET_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "soc-network/users/TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "soc-network/users/TOGGLE_IS_FOLLOWING_PROGRESS";

const initialState = {
    users: [

        // { id: "1", followed: true, avaUrl: 'ava.jpeg',
        //  status: "", location: {city: "Omsk", country: "Russia"}, fullName: "Marina" },
        // { id: "2", followed: true, avaUrl: 'ava.jpeg',
        //  status: "", location: {city: "Moscow", country: "Russia"}, fullName: "Slava" },
        // { id: "3", followed: false, avaUrl: 'ava.jpeg',
        //  status: "", location: {city: "Rome", country: "Italy"}, fullName: "Syapick" },
        // { id: "4", followed: true, avaUrl: 'ava.jpeg',
        //  status: "", location: {city: "Omsk", country: "Russia"}, fullName: "Danil" }
    ],
    pageSize: 5,
    totalUsersCount: 21,
    currentPage: 2,
    isFetching: true,
    followInProgress: [22931]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
                // users: state.users.map(u => {
                //     if (u.id === action.userId) {
                //         return { ...u, followed: true }
                //     }
                //     return u;
                // })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            };
        case SET_USERS:
            return {
                ...state, users: action.users
            };
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            };
        case SET_TOTAL_COUNT:
            return {
                ...state, totalUsersCount: action.totalCount
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            };
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            // debugger;    
            return {
                ...state,
                followInProgress: action.isFetching
                    ? [...state.followInProgress, action.userId]
                    : state.followInProgress.filter(id => id !== action.userId)
            };

        default:
            return state;
    }
};

export default usersReducer;

export const followSuccess = (id) => ({ type: FOLLOW, userId: id });
export const unFollowSuccess = (id) => ({ type: UNFOLLOW, userId: id });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setUsersTotalCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowInProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });

export const getUsersThunkCreator = (page, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));

    const response = await usersAPI.getUsers(page, pageSize);
    
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(response.items));
    dispatch(setUsersTotalCount(response.totalCount));
};

export const followUnfollow = async (userId, dispatch, apiMethod, actionCreator) => {
    dispatch(toggleFollowInProgress(true, userId));

    const response = await apiMethod(userId);
    if (response.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowInProgress(false, userId));
};

export const follow = (userId) => {
    return async (dispatch) => {
        followUnfollow(userId, dispatch, usersAPI.follow.bind(usersAPI), followSuccess);
    }
};

export const unFollow = (userId) => {
    return async (dispatch) => {
        followUnfollow(userId, dispatch, usersAPI.unFollow.bind(usersAPI), unFollowSuccess);
    }
};