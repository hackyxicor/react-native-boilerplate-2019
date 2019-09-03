import { SET_USER, SET_LOGIN_ERROR, REQUEST_LOGIN } from "../Constants/actionTypes.constant";

const DEFAULT_STATE = {
    user: null,
    loading: false,
    error: null
}

function userReducer(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case SET_USER:
            return { ...state, user: action.user, error: null, loading: false };
        case SET_LOGIN_ERROR:
            return { ...state, error: action.error, user: null, loading: false };
        case REQUEST_LOGIN:
            return { ...state, error: null, user: null, loading: true }
        default:
            return state;
    }
}

export default userReducer;