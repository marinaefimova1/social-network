const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

const initialState = {
    users: [
        { id: "1", followed: true, avaUrl: 'ava.jpeg',
         status: "", location: {city: "Omsk", country: "Russia"}, fullName: "Marina" },
        { id: "2", followed: true, avaUrl: 'ava.jpeg',
         status: "", location: {city: "Moscow", country: "Russia"}, fullName: "Slava" },
        { id: "3", followed: false, avaUrl: 'ava.jpeg',
         status: "", location: {city: "Rome", country: "Italy"}, fullName: "Syapick" },
        { id: "4", followed: true, avaUrl: 'ava.jpeg',
         status: "", location: {city: "Omsk", country: "Russia"}, fullName: "Danil" }
    ]
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
                ...state, users: [...state.users, ...action.users]
            };
           
        default:
            return state;
    }    
};

export default usersReducer;

export const followAC = (id) => ({type: FOLLOW, userId: id});
export const unFollowAC = (id) => ({type: UNFOLLOW, userId: id});
export const setUsersAC = (users) => ({type: SET_USERS, users});
