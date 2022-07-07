import { authAPI } from "../../api/api";
import { authMe } from "./authReducer";

const INITIALIZE_SUCCESS = "INITIALIZE_SUCCESS";


const initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE_SUCCESS:
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }
};

export default appReducer;

export const initializeSuccess = () => ({ type: INITIALIZE_SUCCESS });


export const initializeApp = () => (dispatch) => {
    let promise = dispatch(authMe());
    
    // Promise.all for a few promises
    Promise.all([promise]).then(()=>{
        dispatch(initializeSuccess());

    })
      
};

// export const initializeApp = () => async(dispatch) => {
//     await dispatch(getAuthUserData())
//     dispatch(initializedSuccess())
// }