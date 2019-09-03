import { REQUEST_LOGIN } from "../Constants/actionTypes.constant";
import { takeLatest, call, put } from 'redux-saga/effects';
import { SetUser, SetLoginError } from "../Actions/user.actions";
import { LoginCall } from "../Api/public.api";

function* requestLogin() {
    console.log('fsfsdfds')
    const result = yield call(LoginCall)
    console.log('result', result)
    if (result.success) {
        const user = result.response;
        yield put(SetUser(user));
    } else {
        yield put(SetLoginError(result.reason))
    }
}

export default function* () {
    yield takeLatest(REQUEST_LOGIN, requestLogin)
};

