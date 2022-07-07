import { usersAPI } from "../../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

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
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
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
                    : state.followInProgress.filter(id => id != action.userId)
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

export const getUsersThunkCreator = (page, pageSize) => (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));

    usersAPI.getUsers(page, pageSize)
        .then(response => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(response.items));
            dispatch(setUsersTotalCount(response.totalCount));

        })
};

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowInProgress(true, userId));

        usersAPI.follow(userId)
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleFollowInProgress(false, userId));
            })
    }
};

export const unFollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowInProgress(true, userId));

        usersAPI.unFollow(userId)
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(unFollowSuccess(userId))
                }
                dispatch(toggleFollowInProgress(false, userId));
            })
    }
}