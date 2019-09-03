import { REQUEST_LOGIN, SET_USER, SET_LOGIN_ERROR } from "../Constants/actionTypes.constant";

export function RequestLogin(username, password) {
    return {
        type: REQUEST_LOGIN,
        username,
        password,
        meta: {
            retry: true,
        }
    }
}

export function SetUser(user) {
    return {
        type: SET_USER,
        user
    }
}

export function SetLoginError(error) {
    return {
        type: SET_LOGIN_ERROR,
        error
    }
}