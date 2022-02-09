const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";

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
    currentPage: 2
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
        default:
            return state;
    }
};

export default usersReducer;

export const followAC = (id) => ({ type: FOLLOW, userId: id });
export const unFollowAC = (id) => ({ type: UNFOLLOW, userId: id });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setUsersTotalCountAC = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount });
